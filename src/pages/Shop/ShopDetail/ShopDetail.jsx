import React ,{useEffect,useState} from 'react'
import MyNavBar from '../../../component/MyNavBar/myNavBar';
import style from './index.module.scss';
export default function ShopDetail(props) {
    useEffect(()=>{
        console.log(props);
    },[])
    return (
        <div className={style.contain}>
            <MyNavBar>商品详情</MyNavBar>

            <h1>商品详情页1</h1>
        
        </div>
    )

}
