import React, { useEffect, useState } from 'react'
import MyNavBar from '../../../component/MyNavBar/myNavBar';
import style from './index.module.scss';
import {Carousel} from 'antd-mobile'
import {Link} from 'react-router-dom'
import {goods_introduce} from './1';
import {connect} from 'react-redux';
import {addCartSync} from './createAction';
// let c = `<a href=\"https://product.suning.com/0070152112/614304819.html\" target=\"_blank\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/155495297161693914754400_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/155495297161693914754400_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></a>`
 function ShopDetail(props) {
    const [goodDetail, setGoodDetail] = useState({price:"",del:"",imgs:[]})
    const getGood = async () => {
        setGoodDetail({
            price: "279",
            del: "商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述",
            imgs:["商品1","商品2","商品3"]
        })
    }
    const renderCarousels = () => {
         console.log(goodDetail.imgs,'mmmmmmmmmmmmmmmmmmmm');

        return goodDetail.imgs.map && goodDetail.imgs.map((item,index) =>{
            return (
                <div key={index} className={style.CarouItem}>
                        {item}
                </div>
            )
        })
    }

    useEffect(() => {
        console.log(props,'njsdhkhsdkjh');
        getGood()
    }, [])
    const addCar = async () =>{
        console.log(props,'11111')
        let id = props.match.params.goodId
        
      await  props.addCart({
            id,
            price: "279" + "商品id" + id,
            del: "商品id" + id + "商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述",    
        })
        props.history.push("/shop/car")
    }
    return (
        <div className={style.contain}>
            <MyNavBar>商品详情</MyNavBar>
            <Carousel
            autoplay={true}
            autoplayInterval={5000}
            infinite={true}
            swipeSpeed={20}>
            
             {renderCarousels()}
            </Carousel>
            <hr/>
            <ul>
                <li className={style.itemGood}>
                    <h3 className={style.title}>
                        商品id:
                    </h3>
                     {props.match.params.goodId}
                </li>
                <li className={style.itemGood}>
                    <h3 className={style.title}>
                        商品价格:
                    </h3>
                    ￥{goodDetail.price}
                </li>
                <li className={style.itemGood}>
                    <h3 className={style.title}>
                        商品描述:
                    </h3>
                    <div dangerouslySetInnerHTML={{__html:goods_introduce}}>

                    </div>
                
                </li>
            </ul>
            <div className={style.butWrap}>
                <div onClick={()=>{
                    console.log(props,'慢慢开始看多了就看见')
                }} className={style.call}>联系客服</div>
                <div className={style.car}>购物车</div>
                <div onClick={addCar} className={style.addCar}>加入购物车</div>
                <div className={style.buy}>立即购买</div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => ({
    cartList:state.cartReduce.cartList
})

const mapDispatchToProps = (dispatch) => ({
    addCart: (value,cb=() => {}) => {
        dispatch(addCartSync(value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopDetail)