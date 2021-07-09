import React ,{useState}from 'react'
import style from './index.module.scss';
import MyNavBar from '../../../component/MyNavBar/myNavBar';
import {Carousel,Button} from 'antd-mobile';
function MusicCom() {
    const [swips,setSwips] = useState([1,2,3,4]) // 轮播图数据
    const renderSwips = () => {
        return swips.map(item => {
            return (
                <div className={style.swipItem}
                 key={item}
                 style={{
                     backgroundColor:`#${Math.random()*100}`
                 }}>
                        第{item}张
                </div>
            )
        })
    }
    const navs = [{
        nav:"每日推荐",
        id:1,
        logo:"",
    },{
        nav:"歌单",
        id:2,
        logo:"",
    },{
        nav:"排行榜",
        id:3,
        logo:"",
    },{
        nav:"电台",
        id:4,
        logo:"",
    },{
        nav:"直播",
        id:5,
        logo:"",
    },]
    const renderNavs = () => {
       return navs.map(item => {
           return (
               <div className={style.navItem}>
                   <div className={style.navLogo}>
                   
                   </div>
                   {item.nav}
               </div>
           )
       })
    }
    const [recoms,setRecoms] = useState([{
       pic:"http://127.0.0.1:7001/public/img/photo1.jpg",
       dsc:"空气太脏太浑浊，他说不喜欢空气太脏太浑浊，他说不喜欢空气太脏太浑浊，他说不喜欢空气太脏太浑浊，他说不喜欢空气太脏太浑浊，他说不喜欢空气太脏太浑浊，他说不喜欢空气太脏太浑浊，他说不喜欢",
       id:Math.random()
    },{
        pic:"http://127.0.0.1:7001/public/img/photo.jpg",
        dsc:"脏太浑浊，他说不喜欢",
        id:Math.random()
     },{
        pic:"http://127.0.0.1:7001/public/img/photo1.jpg",
        dsc:"空气太脏太浑浊，他说不",
        id:Math.random()
     },{
        pic:"http://127.0.0.1:7001/public/img/photo.jpg",
        dsc:"是的空气太脏太浑浊，他说不喜欢",
        id:Math.random()
     },{
        pic:"http://127.0.0.1:7001/public/img/photo1.jpg",
        dsc:"空间哈是肯定会空气太脏太浑浊，他说不喜欢",
        id:Math.random()
     },{
        pic:"http://127.0.0.1:7001/public/img/photo.jpg",
        dsc:"莫斯科货到付款哈市空气太脏太浑浊，他说不喜欢",
        id:Math.random()
     },{
        pic:"http://127.0.0.1:7001/public/img/photo1.jpg",
        dsc:"空气太脏太浑浊，他说不喜欢",
        id:Math.random()
     },{
        pic:"http://127.0.0.1:7001/public/img/photo1.jpg",
        dsc:"空气太脏太浑浊，他说不喜欢",
        id:Math.random()
     },{
         pic:"http://127.0.0.1:7001/public/img/photo.jpg",
         dsc:"脏太浑浊，他说不喜欢",
         id:Math.random()
      },{
         pic:"http://127.0.0.1:7001/public/img/photo1.jpg",
         dsc:"空气太脏太浑浊，他说不",
         id:Math.random()
      },{
         pic:"http://127.0.0.1:7001/public/img/photo.jpg",
         dsc:"是的空气太脏太浑浊，他说不喜欢",
         id:Math.random()
      },{
         pic:"http://127.0.0.1:7001/public/img/photo1.jpg",
         dsc:"空间哈是肯定会空气太脏太浑浊，他说不喜欢",
         id:Math.random()
      },{
         pic:"http://127.0.0.1:7001/public/img/photo.jpg",
         dsc:"莫斯科货到付款哈市空气太脏太浑浊，他说不喜欢",
         id:Math.random()
      },{
         pic:"http://127.0.0.1:7001/public/img/photo1.jpg",
         dsc:"空气太脏太浑浊，他说不喜欢",
         id:Math.random()
      },])
    const renderRecoms = () => {
        return recoms.map(item => {
            return (
                <li className={style.recomItem} key={item.id}>
                    <img src={item.pic} alt=""/>
                    <p>
                        {item.dsc}
                    </p>
                </li>
            )
        })
    }
    return (
        <div className={style.wrap}>
            {/* 头部 */}
            <MyNavBar>发现音乐</MyNavBar>

            <div className={style.swip}>
            <Carousel
            autoplay={true}
            infinite={true}>

                {renderSwips()}
            </Carousel>

            </div>
            <div className={style.nav}>
                {renderNavs()}
            </div>
            <div className={style.recomMusic}>
                <div className={style.top}>
                    <h2>
                    推荐歌曲模块
                    </h2>
                    <a>
                        查看更多
                    </a>
                </div>
                <div className={style.content}>
                    <ul>
                        {renderRecoms()}
                    </ul>
                </div>

                <div>
                    空间哈是肯定会空气太脏太浑浊，他说不喜欢 <br/>
                    空间哈是肯定会空气太脏太浑浊，他说不喜欢 <br/>
                    空间哈是肯定会空气太脏太浑浊，他说不喜欢 <br/>
                    空间哈是肯定会空气太脏太浑浊，他说不喜欢 <br/>
                    空间哈是肯定会空气太脏太浑浊，他说不喜欢 <br/>
                    空间哈是肯定会空气太脏太浑浊，他说不喜欢 <br/>
                    空间哈是肯定会空气太脏太浑浊，他说不喜欢 <br/>
                    空间哈是肯定会空气太脏太浑浊，他说不喜欢 <br/>
                    空间哈是肯定会空气太脏太浑浊，他说不喜欢 <br/>
                </div>
            </div>

           
        </div>
    )
}

export default MusicCom
