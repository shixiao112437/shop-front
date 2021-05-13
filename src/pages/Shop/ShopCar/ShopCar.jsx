import React,{useEffect} from 'react'
import MyNavBar from '../../../component/MyNavBar/myNavBar';
import style from './index.module.scss';
import {connect} from 'react-redux';
import {addCartSync} from './createAction';

 function ShopCar(props) {
    const renderGood = () => {
        return props.cartList.map(item => {
           return <li className={style.goodItem} key={item.id}>
               描述: {item.del} <br/> <br/>
                id: {item.id} <br/> <br/>
                价格:{item.price} <br/> <br/>
                数量:{item.num}
            </li>
        })
    }
    useEffect(() => {
        console.log(props,'kkkkk');
    })
    return (
        <div className={style.contain}>
            <MyNavBar>购物车</MyNavBar>
            {/* 收货信息 */}
            <div className={style.shipment}>
                <div className={style.shipName}>
                   <span>
                   收货人：  珊燃淚夏
                   </span>
                   <span>
                       13111111111
                       &gt;
                   </span>
                </div>
                <div className={style.adress}>
                    收货地址：  xxxxxxx
                </div>
            </div>
            {/* 购物车信息 */}
            <div className={style.cartWrap}>
                <div className={style.title}>
                    购物车商品列表
                </div>
                <ul className={style.goodsWrap}>
                    {renderGood()}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartList:state.cartReduce.cartList
})

const mapDispatchToProps = (dispatch) => ({
    addCart: (value) => {
        dispatch(addCartSync(value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopCar)