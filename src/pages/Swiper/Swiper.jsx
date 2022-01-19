import React, { PureComponent } from 'react'
import Style from './index.module.scss';
import Notice from '../../component/Notice';
class Swiper extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className={Style.wrap}>
                <Notice></Notice>
            </div>
        )
    }
}

export default Swiper