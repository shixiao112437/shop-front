import React, { Component } from 'react'
import MyNavBar from '../../component/MyNavBar/myNavBar'
import * as echarts from 'echarts';
// import style from './index.module.scss';
class Sports extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    initEcharts() {
        var myEcharts = echarts.init(document.getElementById('sports'))
        myEcharts.setOption({
            title: {
                text: '步数'
            },
            legend: {
                type: 'scroll',
                bottom: 10,
                width: 350,
                left: 0,
                data: (function () {
                    var list = [];
                    for (var i = 1; i <= 28; i++) {
                        list.push(i + 2000 + '');
                    }
                    return list;
                })()
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20]
            }],
            backgroundColor:'#1eb185'
        })
    }
    componentDidMount() {
        this.initEcharts()
    }
    render() {
        return (

            <div style={{ height: '100vh', width: '100%', paddingTop: '45px' }}>
                <MyNavBar>微信运动</MyNavBar>
                <div id='sports' style={{ height: '300px' }}>

                </div>

            </div>

        )
    }
}

export default Sports