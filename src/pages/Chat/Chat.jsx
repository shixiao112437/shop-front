import React, { Component } from 'react'
import io from 'socket.io-client'
import { connect } from 'react-redux';
import { InputItem, Button, Toast } from 'antd-mobile'
import style from './index.module.scss'
var client


class Chat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentId: '',
            msgList:[],
            list:[],
            msg:'',
        }
    }
    renderList() {
        const { currentId } = this.state
        return this.state.list.map(item => {
            return (
                <li onClick={() => {
                    this.setState({
                        currentId: item.id
                    })
                }} className={currentId == item.id ? [style.listItem, style.active].join(' ') : style.listItem} key={item.id}>
                    {item.nickname}
                </li>
            )
        })
    }
    renderMsg() {
        return this.state.msgList.map((item, index) => {
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
    sayTo() {
        const { nickname } = JSON.parse(sessionStorage.getItem('userInfo'))

        const data = {
            id: this.state.currentId,
            nickname,
            value: this.state.msg,
        }

        client.emit('chat', data)
       this.setState({
           msg:''
       })
        // setMsgList([...msgList,data])
        const {msgList} = this.state
        msgList.push(data)
        this.setState({
            msgList
        })
 


    }

    render() {
        const { nickname } = JSON.parse(sessionStorage.getItem('userInfo'))
        const {msg}=this.state
        return (
            <div className={style.wrap}>
                <h1 className={style.top}>{nickname}的聊天室</h1>
                <div className={style.content}>
                    <ul className={style.list}>
                        {this.renderList()}
                    </ul>
                    <div className={style.msg}>
                        {this.renderMsg()}
                    </div>
                </div>
                <div className={style.bottom}>
                    <InputItem value={msg} onChange={val => {
                        this.setState({
                            msg:val
                        })
                    }} placeholder='输入你的消息'>
                    </InputItem>
                    <Button type='primary' onClick={() => {
                        this.sayTo()
                    }}>发送</Button>
                </div>
            </div>
        )
    }
    componentDidMount() {
        const { nickname } = JSON.parse(sessionStorage.getItem('userInfo'))
        client = io('http://localhost:3030/');
        // client =  io.connect('http://127.0.0.1:7001')
        client.on('connect', (res) => {
            Toast.success(`欢迎${nickname}加入聊天室`)
            client.emit('notify', nickname)
            client.on('notify', (data, nick) => {
                nick && Toast.success(`有新成员:${nick}加入聊天室`)
               this.setState({
                list:data
               })
            })
            // 监听回复消息
            alert(1)
            client.on('chat', data => {
                alert(1)
                const {msgList} = this.state
                msgList.push(data)
                this.setState({
                    msgList
                })
            })


        })

    }
}
const mapstate = (state, ownProps) => {
    return {
        myDetail: state.userReduce,
    }
}

export default connect(mapstate)(Chat)
