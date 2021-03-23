import React,{useEffect,useState} from 'react'
import style from './index.module.scss'
import api from '../../../api/index'

function Category() {
    let [navs,setNavs] = useState([])

   async function getCategoriesl(){
    let {data}= await api.shop.getCategoriesl()
       
    let navs = data.map(item =>　item.cat_name)
    setNavs(navs)

   }
   useEffect(()=>{
    getCategoriesl()
   },[])
   
    return (
        <div className={style.contain}>
            <div className="leftNav">
                 <div className="navitem">
                 </div>   
            </div>
            <div className="rightContent">

            </div>
        </div>
    )
}


export default Category
