import React, { useEffect } from 'react'
import MyNavBar from '../../component/MyNavBar/myNavBar'

let BMap=window.BMap
let BMapGL=window.BMapGL
console.log(window,'2222222');
export default function Mymap() {
    function renderMap() {
        var map = new BMapGL.Map("container");
        // 创建地图实例  
        var point = new BMapGL.Point(116.404, 39.915);
        // 创建点坐标  
        map.centerAndZoom(point, 15);
        var locationControl = new BMapGL.LocationControl()
        map.addControl(locationControl)
        map.enableScrollWheelZoom(true);  //开启鼠标滚轮缩放
    }
    useEffect(()=>{
        renderMap()
    },[])
    return (
        <>
        <MyNavBar>地图演示</MyNavBar>

        <div id="container" style={{
            width:'100%',
            height:'100%',
        }}>

        </div>
        </>
    )
}
