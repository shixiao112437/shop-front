import React from 'react'

import MyTabbar from '../../component/MyTabbar/MyTabbar'
import style from './index.module.scss'
import {Route} from 'react-router-dom'
import Mydetail from '../My/Mydetail'
import PageIndex from '../Index/PageIndex'
// import Mymap from '../Map/Mymap'
import Music from '../Music/Music'
console.log(Mydetail,'skshdkfkjsadfk h');
const tabItems = [{
    title: '首页',
    icon: 'icon-ind',
    path: '/home/index'
  },
  {
    title: '地图',
    icon: 'icon-findHouse',
    path: '/home/map'
  },
  {
    title: '音乐',
    icon: 'icon-infom',
    path: '/home/music'
  },
  {
    title: '我的',
    icon: 'icon-my',
    path: '/home/detail'
}]
function Home() {
    return (
        <div className={style.wrap}>
            <div className={style.content}>
            <Route exact path='/home' component={PageIndex}></Route>
            <Route exact path='/home/index' component={PageIndex}></Route>
            <Route exact path='/home/detail' component={Mydetail}></Route>
            {/* <Route exact path='/home/map' component={Mymap}></Route> */}
            <Route exact path='/home/music' component={Music}></Route>
            </div>
      
            <MyTabbar tabs={tabItems}>主页</MyTabbar>
          
        </div>
    )
}

export default Home
