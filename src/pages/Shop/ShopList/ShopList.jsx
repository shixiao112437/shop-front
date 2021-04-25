import React, { Component } from 'react'
import Mysearch from '../../../component/MySearch/Mysearch'
import api from '../../../api/index'
import {PullToRefresh,ListView} from 'antd-mobile'
import style from './index.module.scss';    

export default class ShopList extends Component {
    state={
        goods:[]
    }
    page=1
    
    render() {
        return (
            <>
             <Mysearch>

             </Mysearch>
             <div 
            onScroll={(e)=>{
                this.scrollHandle(e)
            }}
             className={style.contain}>

            
             <PullToRefresh
             distanceToRefresh={50}
             onRefresh={()=>{
                 this.page = 1
                 this.getCatGoods()
             }}>
                 
                 {/* <ListView
                 render={() => {
                     
                 }}
                 >

                 </ListView> */}
                     {this.renderContent()}
                     {/* 加载中 正在加载 */}
             </PullToRefresh>

             </div>
            </>
        )
    }
   
    componentDidMount(){
        this.getCatGoods()
        console.log(this.props.match.params.catId);
    }
    async getCatGoods(isRefresh=true){
        let params = {
            cid:this.props.match.params.catId,
            pageSize:5,
            page:this.page
        }
        let res = await api.shop.getCatGoods(params)
        if(isRefresh){
            this.setState({
                goods:res.data
            })
        }else{
                console.log(this.state.goods,'hhhhhhhhhhh')
            let goods = [ ...this.state.goods , ...res.data]
            this.setState({
                goods
            })
        }
      
    }
    renderContent(){
        return this.state.goods.map(item => {
            return (
                <div onClick={() => {
                    this.toDetail(item)
                }} key={item.goods_id} className={style.goodItem}>
                   <div className={style.leftImg}>
                        <img src={item.goods_small_logo } alt=""/>
                   </div>
                   <div className={style.rightContain}>
                       <p>
                           {item.goods_name}
                       </p>
                       <a href='javascript:;' className={style.price}>
                           {item.goods_price}
                       </a>
                   </div>
                </div>
            )
        })
    }
    // 
    scrollHandle(e){
        let scrollTop = e.target.scrollTop // 滚动距离
        let containHeigh = e.target.scrollHeight  //  内容高度
        let domHeight = e.target.clientHeight // dom高度
        let diffHeight = containHeigh - scrollTop - domHeight
        console.log(diffHeight,'差值')
        if(diffHeight<= 20){
            this.page++
            this.getCatGoods(false) // 加载更多
        }
    }
    toDetail(item){
        console.log(item)
        this.props.history.push("/shop/detail/"+item.goods_id)
     
        
    }
}
