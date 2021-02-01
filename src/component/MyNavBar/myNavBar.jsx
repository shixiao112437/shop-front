import React from 'react'
import {NavBar,Icon } from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
function MyNavBar(props) {
    return (
        <NavBar
        mode={props.mode}
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />
        ]}
      >  {props.children}
      </NavBar>
    )
}
MyNavBar.propTypes = {
    children:PropTypes.string,
    mode:PropTypes.string,
}
MyNavBar.defaultProps={
    children:'默认导航标题',
    mode:"dark"
}
export default withRouter(MyNavBar) 
