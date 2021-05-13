import { func } from 'prop-types';
import React, { useEffect } from 'react'
import MyNavBar from '../../component/MyNavBar/myNavBar'

let BMap=window.BMap
let BMapGL=window.BMapGL
console.log(window,'2222222');
// 添加  自定义控件
function SearchConroler(){
    this.defaultAnchor = window.BMAP_ANCHOR_TOP_LEFT
    this.defaultOffset = new BMapGL.Size(20,20)
}

SearchConroler.prototype = new BMapGL.Control()
SearchConroler.prototype.initialize = function (map){
    var div = document.createElement('div')
    div.style.width='100px'
    div.style.height='100px'
    div.style.background='red'
    var input = document.createElement('input')
    input.type = 'input'
    input.value = '请输入路线'
    div.appendChild(input)
    map.getContainer().appendChild(div)
    return div
}
var map 
export default function Mymap(props) {
    console.log(props);
   
    function renderMap(callback) {
         map = new BMapGL.Map("container");
       
        // 创建地图实例  
        map.enableScrollWheelZoom(true);  //开启鼠标滚轮缩放

        // var point = new BMapGL.Point(116.404, 39.915);
        // 创建点坐标  
         map.centerAndZoom('北京市', 12);
        // 添加定位控件
       var locationControl = new BMapGL.LocationControl({
            // 控件基于停靠位置的偏移量（可选）
            offset: new BMapGL.Size(20, 20)
        });
        map.addControl(locationControl)
        // map.addControl(new BMap.NavigationControl());    
        map.addControl(new BMap.ScaleControl());    
        // map.addControl(new BMap.OverviewMapControl());    
        map.addControl(new BMap.MapTypeControl());
        var mapWay = new SearchConroler()
        map.addControl(mapWay)
    }
    function centermap(){
       let city =  props.location.state.city 
       if(!city) return
  
       map.centerAndZoom(city+'市',12)
    }
    useEffect(()=>{
        alert(1)
        renderMap();
        props.location.state&& centermap()

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
