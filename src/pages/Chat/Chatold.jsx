import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { connect } from 'react-redux';
import { InputItem, Button, Toast } from 'antd-mobile'
import style from './index.module.scss'
var client, currentId

function Chat(props) {
    // 建立连接
    const { nickname } = JSON.parse(sessionStorage.getItem('userInfo'))
    
    const [msg, setMsg] = useState('') // 消息
    const [currentId, setCurrentId] = useState() // 消息
    const [list, setList] = useState([]) // 人员列表
    const [msgList, setMsgList] = useState([]) // 

    const connect1 = () => {
        client = io('http://localhost:3030/');
        // client =  io.connect('http://127.0.0.1:7001')
        client.on('connect', (res) => {
            Toast.success(`欢迎${nickname}加入聊天室`)
            client.emit('notify', nickname)
            client.on('notify', (data, nick) => {
                nick && Toast.success(`有新成员:${nick}加入聊天室`)
                setList([...data])
            })
            // 监听回复消息
            client.on('chat', data => {
                alert(1)
                const res = JSON.parse(JSON.stringify(msgList))
                res.push(data)
                setMsgList(res)
            })


        })


    }
    useEffect(() => {

        connect1()


    }, [])

    function sayTo() {
        const data = {
            id: currentId,
            nickname,
            value: msg,
        }

        client.emit('chat', data)
        setMsg('')
        // setMsgList([...msgList,data])
        const res = JSON.parse(JSON.stringify(msgList))

        res.push(data)
        setMsgList(res)
  
    }
    // 人员列表渲染
    const renderList = () => {
        return list.map(item => {
            return (
                <li onClick={() => {
                    setCurrentId(item.id)
                }} className={currentId == item.id ? [style.listItem, style.active].join(' ') : style.listItem} key={item.id}>
                    {item.nickname}
                </li>
            )
        })
    }
    // 消息渲染
    const renderMsg = () => {
        return msgList.map((item, index) => {
            return (<div key={index}>

                <div className={style.msgItem}>
                    <span className={style.msgMember}>
                        {item.nickname}:
                    </span>
                    <span className={style.msgDetail}>
                        {item.value}

                    </span>
                </div>
            </div>)
        })
    }
    return (
        <div className={style.wrap}>
            <h1 className={style.top}>{nickname}的聊天室</h1>
            <div className={style.content}>
                <ul className={style.list}>
                    {renderList()}
                </ul>
                <div className={style.msg}>
                    {renderMsg()}
                </div>
            </div>
            <div className={style.bottom}>
                <InputItem value={msg} onChange={val => {
                    setMsg(val)
                }} placeholder='输入你的消息'>
                </InputItem>
                <Button type='primary' onClick={sayTo}>发送</Button>
            </div>
        </div>
    )
}
const mapstate = (state, ownProps) => {
    return {
        myDetail: state.userReduce,
    }
}

export default connect(mapstate)(Chat)