import React, { useEffect, useState } from 'react'
import Mysearch from '../../../component/MySearch/Mysearch'
import api from '../../../api/index'
export default function ShopPage() {

    async function getCarousel() {
        let res = await api.shop.getCarousel()
        console.log(res, '1111111111');
    }
    useEffect(()=>{
        getCarousel()
    },[])


    return (
        <div>
            <Mysearch></Mysearch>
        </div>
    )
}
