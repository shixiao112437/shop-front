import React from 'react'

import MyTabbar from '../../component/MyTabbar/MyTabbar'
import style from './index.module.scss'
import {Route} from 'react-router-dom'
import Mydetail from '../My/Mydetail'
import PageIndex from '../Index/PageIndex'
import Mymap from '../Map/Mymap'
import Music from '../Music/Music'
console.log(Mydetail,'skshdkfkjsadfk h');

function Home() {
    return (
        <div className={style.wrap}>
            <div className={style.content}>
            <Route exact path='/home' component={PageIndex}></Route>
            <Route exact path='/home/index' component={PageIndex}></Route>
            <Route exact path='/home/detail' component={Mydetail}></Route>
            <Route exact path='/home/map' component={Mymap}></Route>
            <Route exact path='/home/music' component={Music}></Route>
            </div>
            <div className={style.bottom}>
                <MyTabbar>主页</MyTabbar>
            </div>
        </div>
    )
}

export default Home
