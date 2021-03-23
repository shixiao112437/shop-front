import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import api from '../../../api/index';
import style from './index.module.scss';
import MyNavBar from '../../../component/MyNavBar/myNavBar'

function MuciList(props) {




    useEffect(() => {
         // 获取音乐列表
        async function getMucisList() {
       
            let {data} = await api.music.getMusicList()
            console.log(data)
            props.addMusic(data)
        }
        getMucisList()
  
    }, [])


    const renderList = () => {
        return (
            props.musicList.map((item,index) => (
                <li className={style.listItem} onClick={
                    ()=>{
                        props.history.push({
                            pathname:'/home/music',
                            state:{
                                id:item._id
                            }


                        })
                    }
                } doubleTap key={item._id}>

                   <span>{index+1}</span> 
                   
                   {item.name}
                </li>
        ))
        )
    }

    return (
        <div style={{paddingTop:'45px'}}>
            <MyNavBar>
                音乐播放列表
            </MyNavBar>
            <button onClick={() => {
                console.log(props)
            }}>
                dianji

            </button>
            <ul>
            {
                renderList()
            }
            </ul>
            
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        musicList: state.reduce.musicList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMusic: (value) => {
    
            dispatch({
                type: 'addMusic',
                value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MuciList)
