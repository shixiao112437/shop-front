import React from 'react'
import MyTabbar from '../../component/MyTabbar/MyTabbar'
import shop from './index.module.scss';
import {Route,Switch} from 'react-router-dom'
import ShopPage from './ShopPage/ShopPage';
import Category from './Category/Category';
import ShopList from './ShopList/ShopList';
import ShopDetail from './ShopDetail/ShopDetail';
import ShopCar from './ShopCar/ShopCar';




const tabItems = [{
  title: '首页',
  icon: 'icon-ind',
  path: '/shop/'
},
{
  title: '分类',
  icon: 'icon-findHouse',
  path: '/shop/fl'
},
{
  title: '购物车',
  icon: 'icon-cart',
  path: '/shop/car'
},
{
  title: '我的',
  icon: 'icon-my',
  path: '/shop/detail'
}]
function Index() {
  return (
    <div className={shop.contain}>
      <div className={shop.route}>
          <Route exact path='/shop/' component={ShopPage}></Route>
          <Route exact path='/shop/fl' component={Category}></Route>
          <Route exact path='/shop/list/:catId' component={ShopList}></Route>
          <Route exact path='/shop/detail/:goodId' component={ShopDetail}></Route>
          <Route exact path='/shop/car' component={ShopCar}></Route>
       
          {/* <MyTabbar tabs={tabItems}></MyTabbar> */}

      </div>
      <div className={shop.tarbar}>
      <MyTabbar tabs={tabItems}></MyTabbar>

      </div>
    </div>
  )
}

export default Index
