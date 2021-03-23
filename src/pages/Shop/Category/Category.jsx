import React, { Component, createRef } from 'react'
import style from './index.module.scss'
import api from '../../../api/index'
import Mysearch from '../../../component/MySearch/Mysearch'

export default class Category extends Component {
    state = {
        navs: [],
        content: [],
        navIndex: 0

    }
    contentRef = createRef()
    data = []
    render() {
        return (
            <>
            <Mysearch></Mysearch>
            <div className={style.contain}>
                <div className={style.leftNav}>
                    {this.renderNavs()}
                </div>
                <div ref={this.contentRef} className={style.rightContent}>
                    {this.renderContent()}
                </div>
            </div>
            </>
        )
    }
    async getCategoriesl() {
        let { data } = this.data = await api.shop.getCategoriesl()
        this.data = data
        let navs = data.map(item => item.cat_name)
        let content = data[this.state.navIndex].children
        this.setState({
            navs, content
        }, () => {
            console.log(this.state, 'wwwwwwwwwwwwwwwwwwww');
        })

    }
    // 菜单渲染
    renderNavs() {
        return this.state.navs.map((item, index) => {
            return (
                <div onClick={(a) => {
                    this.changeNav(index, a)
                }} className={[style.navitem, index == this.state.navIndex ? style.active : ""].join(' ')} key={item}>
                    {item}
                </div>
            )
        })
    }
    // 内容渲染
    renderContent() {
        return this.state.content.map(item => {
            return (
                <div key={item.cat_id}>
                    <h1 className={style.title}>{item.cat_name}</h1>
                    <div className={style.list}>
                        {
                            item.children && item.children.map(item1 => {
                                return (
                                    <div className={style.item} key={item1.cat_id}>
                                        <img src={item1.cat_icon} />
                                        <span>{item1.cat_name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        })
    }
    // 菜单切换
    changeNav = (index, a) => {
        let content = this.data[index].children
        console.log(content, '1111111111111');
        this.setState({
            navIndex: index,
            content
        }, () => {
            console.log(this);
            this.contentRef.current.scrollTop = 0
        })
    }

    componentDidMount() {
        this.getCategoriesl()
    }
}
