import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import style from './index.module.scss'
class ImageCut extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isDown: false,
            x: 0,
            y: 0,
            diffX: 0,
            diffY: 0,
        }
    }
    componentDidMount() {
        const canvas = document.getElementById('leftImg');
        canvas.setAttribute("width", "500")
        canvas.setAttribute("height", "500")
        // let url = 'http://127.0.0.1:7001/public/img/photo.jpg'
        let url = 'http://127.0.0.1:9090/1.png'
        
        this.drawImage(url, this.leftImg, 500, 500)
    }

    render() {
        const { diffX, diffY } = this.state
        return (
            <>

                <div className={style.wrap}>
                    <div className={style.leftImg}>
                        <canvas id='leftImg' ref={this.leftImg}>

                        </canvas>
                        <div onMouseDown={(e) => {
                            this.downMouse(e)
                        }}
                            onMouseMove={(e) => {
                                this.moveMouse(e)
                            }}
                            onMouseUp={(e) => {
                                this.upMouse(e)
                            }}
                            style={{
                                left: diffX,
                                top: diffY
                            }}
                            className={style.dragWrap}>

                        </div>
                    </div>
                    <div className={style.viewImg}>
                        <canvas ref={this.viewImg}>

                        </canvas>
                    </div>

                </div>
                <button onClick={() => {
                    this.canvasToImg(this.leftImg)
                }}>
                    123123

                </button>
            </>
        )
    }
    // 画图
    drawImage(url, ref) {
        let img = document.createElement('img')
        img.src = url
        let ctx = ref.current.getContext("2d")
        img.onload = () => {
            img.src = url
            ctx.drawImage(img, 0, 0,)

        };

    }
    downMouse(e) {
        // alert(this.state.isDown)
        this.setState({
            isDown: true,
            x: e.clientX,
            y: e.clientY,
        }, () => {
            console.log(this.state);
        })

    }
    moveMouse(e) {
        if (this.state.isDown == false) return
        console.log(1);
        let diffX = e.clientX - this.state.x
        let diffY = e.clientY - this.state.y
        this.setState({
            diffX, diffY
        })
        console.log(diffX, diffY);
    }
    upMouse(e) {
        this.setState({
            isDown: false,
        })
    }
    canvasToImg(ref) {
        var image = new Image();
        image.setAttribute("crossOrigin",'Anonymous')
        let res = ref.current.toDataURL("image/png")
        image.src = res;
        return image;
    }

}
ImageCut.propTypes = {

}
export default ImageCut