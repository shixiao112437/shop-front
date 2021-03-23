import React, { Component, createRef } from 'react'
import { Modal } from 'antd-mobile';
import style from './index.module.scss';
import './index.scss'
import api from '../../api/index';
class SlideCheck extends Component {
    constructor(props) {
        super(props)
        this.state = {
            diffx: 0,
            originX: 0,
            modal: false,
            imgUrl: "http://127.0.0.1:7001/public/img/photo1.jpg", // 图片
            miniImg: "http://127.0.0.1:7001/public/img/photo.jpg",// 小图片
            text:""
        }
        this.imgCavasRef = createRef()
        // 占位符ref对象
        this.miniCavasRef = createRef()
        this.ctxs = []


    }

    render() {
        return (
            <Modal
                maskClosable={true}
                visible={this.state.modal}
                transparent={true}
                popup={true}
                className={'slideModal'}
                wrapClassName={'myWrapModal'}
                animationType={'slide-up'}
            >
                <div className={style.top}>
                    <span>完成图片验证</span>

                    <span>
                        <a onClick={this.reset}>换一张</a>
                    </span>
                </div>



                <div className={style.cavas}>
                    <canvas ref={this.imgCavasRef}></canvas>
                    <canvas style={{
                        left: this.state.diffX + 'px'
                    }} ref={this.miniCavasRef}></canvas>
                </div>

                <div className={style.tip}>
                   {this.state.text}
                </div>

                <div className={style.slideBlock}>
                    <div className={style.wrap}>
                        <span>
                            向右滑动完成拼图
                           </span>
                        <div
                            style={{
                                left: this.state.diffX + 'px'
                            }}
                            onTouchStart={(e) => {
                                this.start(e)
                            }}
                            onTouchMove={
                                (e) => {
                                    this.move(e)
                                }
                            }
                            onTouchEnd={
                                (e) => {
                                    this.end(e)
                                }
                            }
                            className={style.black}>

                        </div>

                    </div>
                </div>

            </Modal>
        )
    }

    // 绘制cavas
    drawImage(url, ref, w = 310) {
        let img = document.createElement('img')
        img.src = url
        let ctx = ref.current.getContext("2d")
        this.ctxs.push(ctx)
        img.onload = () => {
            img.src = url
            ctx.drawImage(img, 0, 0, w, 155)
        };

    }
    // 获取验证码信息
     getVerific = async (cb = () => {}) =>{
        console.log(this,'验证');
        let res = await api.auth.getVerific()
        console.log(res);
        this.setState({
            imgUrl: res.data.imgUrl, // 图片
            miniImg: res.data.miniImg// 小图片
        }, () => {
            this.drawImage(this.state.imgUrl, this.imgCavasRef)
            this.drawImage(this.state.miniImg, this.miniCavasRef, 40)
        })
        cb()

    }
    // 校验码验证
    async verify() {
        let params = {
            tokenId: '',
            left: this.state.diffX,
        }
        let res = await api.auth.checkVerific(params)

        if (res.code == 0) {
            // 成功 调用成功回调
            let text = "验证成功"
            this.setState({
                modal: false,
                text
            }, () => {
                this.clearCavas()
                this.props.success()
            })
        } else {
            // 失败 调用失败回调
            // 清空cavas  
            let text = "验证失败"
            this.setState({text})
            this.clearCavas(this.getVerific)

        }
    }
    // 接受到新的nextProps 是触发
    componentWillReceiveProps(nextProps) {
        console.log(nextProps, 'props');

        nextProps.modal && this.setState({
            modal: nextProps.modal
        }, () => {
            this.getVerific()
        })
    }

    componentDidMount() {

    }
    start = (e) => {
        console.log(e, 'start');
        let originX = e.changedTouches[0].clientX
        this.setState({
            originX
        }, () => {

        })
    }
    move = (e) => {
        let clientX = e.changedTouches[0].clientX

        let diffX = clientX - this.state.originX
        // console.log(diffX, 'diffx');
        if (diffX < 0 || diffX > 340) return false
        this.setState({ diffX }, () => {
            //    let eve =  e.nativeEvent 原生事件
            //    eve.target.style.left = diffX+'px'
            //    this.miniCavasRef.current.style.left = diffX+'px'

        })

    }
    // 验证
    end = (e) => {
        this.verify()
    }
    // 初始化cavas reset 避免图像重叠
    clearCavas(cb = () => { }) {

        this.ctxs.forEach(item => {
            item.clearRect(0, 0, 384, 200)
        })
        this.setState({
            diffX: 0
        })
      
        cb()
    }
    // 刷新
    reset = () => {
        this.clearCavas(this.getVerific)
    }
}

export default SlideCheck