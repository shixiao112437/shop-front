import React,{useState} from 'react'
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';

 function MyTabbar(props) {
   console.log(props,'1123123123');
    const [currentTab,setCurrentTab]= useState(props.location.pathname)
    function renderItem() {
        return props.tabs.map((item,index)=>{
            return  <TabBar.Item
               title={item.title} // 文字
               key={index}
               icon={// 默认字体图标
                 <i className={`iconfont ${item.icon}`}></i>
               }
               selectedIcon={// 选中的字体图标
                 <i className={`iconfont ${item.icon}`}></i>
               }
               // selected 控制当前点击的高亮 true高亮 false不高亮
               selected={props.location.pathname == item.path}
               // onPress点击
               onPress={() => {
                 // 点击 切换单词 控制高亮
                 // 改成一个 有意义的单词 好一点
                 setCurrentTab(item.path)
                 // 点击跳转到首页
                 props.history.push(item.path) 
               }}
             >
             </TabBar.Item>

        })
    }

    return (
        <>
            <TabBar
                barTintColor='#fff'
                tintColor='blue'
                unselectedTintColor="#ccc"
                hidden={false}
                noRenderContent={false}
                tabBarPosition='bottom'
            >
             {renderItem()}

            </TabBar>

        </>
    )
}
MyTabbar.protoTypes = {
  tabs:PropTypes.array
}
export default withRouter(MyTabbar)