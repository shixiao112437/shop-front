import React, { Component ,createRef} from 'react'
import notice from  './index.module.scss';

export default class Notice extends Component {
    constructor(props){
        super(props)
        this.state = {
            list :[],
            left:-1000
        }
        this.ulWrap = createRef()
    }
    timer = null

    render() {
        return (
            <div>
                <div ref={this.ulWrap} className={notice.wrap}>
                    <ul style={{left:this.state.left}}>
                        <li>66666666666666666666666666666666666666666666</li>
                        <li>11111111111111111111111111111111111111111111</li>
                        <li>22222222222222222222222222222222222222222222</li>
                        <li>33333333333333333333333333333333333333333333</li>
                        <li>44444444444444444444444444444444444444444444</li>
                        <li>55555555555555555555555555555555555555555555</li>
                        <li onClick={()=>{
                            alert(1)
                        }}> {this.state.left} 66666666666666666666666666666666666666666666
                        {this.state.left}
                        </li>
                        <li>11111111111111111111111111111111111111111111</li>
                    </ul>
                </div>
            </div>
        )
    }
    animationM(){
        this.timer =setInterval(()=>{
           let  value = this.state.left - 20
            let min = -this.state.list.length *1000
            if(value<min){
                this.setState({
                    left:value
                })
            }else{
                this.setState({
                    left:-1000
                })
            }
           
        },20)
    }
    componentDidMount(){
        // console.dir(this.ulWrap.current.offsetWidth);
        // let wrapDom = this.ulWrap.current
        // let width = wrapDom.offsetWidth +'px'
        // let ulDom = wrapDom.getElementsByTagName('ul')[0]
        // console.dir(ulDom);
        this.animationM()
        // ulDom.style.left = '-1000px'
    }
}
