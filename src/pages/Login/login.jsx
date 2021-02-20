import React, { Component } from 'react'
import { Flex, WingBlank, WhiteSpace ,Toast } from 'antd-mobile'
import { Link } from 'react-router-dom'
import MyNavBar from '../../component/MyNavBar/myNavBar'
import styles from './index.module.css'
// 导入withFormik
import { withFormik,Form ,Field,ErrorMessage } from 'formik';
// 导入yup --主要配合react  * as Yup 导入所有 并取一个 名字Yup
import * as Yup from 'yup'
import api from '../../api/index';

class Login extends Component {
 
  render() {
    return (
      <div className={styles.root}>
        <MyNavBar>账号登录</MyNavBar>
        <WhiteSpace size="xl" />

        {/* 登录表单 */}
        {/* WingBlank 左右 15px的 margin */}
        <WingBlank>
          <Form>
            <div className={styles.formItem}>
              {/* 用户名 	需要自己 绑定 value +  onChange函数 实现类似的功能*/}
              <Field 
                className={styles.input} 
                name="account" 
                placeholder="请输入账号">  
                </Field>
            </div>
            {/* 如果有错误 才显示错误div 长度为5到8位，只能出现数字、字母、下划线 
             errors={account: "用户名 必须5-8位", password: "密码必填！"}
            */}
            <ErrorMessage 
              className={styles.error}// 样式
              name="account" // 对应的错误提示字段
              component="div" // 是一个div 标签
            ></ErrorMessage>

            <div className={styles.formItem}>
              {/* 密码 */}
              <Field  
                className={styles.input}
                name="password"
                type="password"
                placeholder="请输入密码"></Field>
                
            </div>
            {/* 长度为5到12位，只能出现数字、字母、下划线 */}
            <ErrorMessage 
              className={styles.error}// 样式
              name="password" // 对应的错误提示字段
              component="div" // 是一个div 标签
            ></ErrorMessage>
            
            <div className={styles.formSubmit}>
              <button className={styles.submit} type="primary">
                登 录
              </button>
            </div>
          </Form>
          <Flex className={styles.backHome}>
            <Flex.Item>
              <Link to="/rigister">还没有账号，去注册~</Link>
            </Flex.Item>
          </Flex>
        </WingBlank>
      </div>
    )
  }
 
}
export default withFormik({
  mapPropsToValues: () => {// state
     return { 
        account :'',
        password:'' 
      }
  },
  handleSubmit: async (values, { props }) => {
    console.log('数据在values',values) ;// {account: "123", password: "456"}
    let res=await api.auth.login(values)
    console.log('登录结果',res)
    if(res.code==0){
      localStorage.setItem("shop-token",res.data)
      Toast.success('登录成功啦~',1)
      props.history.push('/')
    }else{//失败 提示
        Toast.fail('登录失败啦~',2)
    }
  },
  validationSchema:Yup.object().shape({
      account:Yup.string().required('用户名必填！').matches(/^\w{5,8}$/,'用户名 必须5-8位'),
      password:Yup.string().required('密码必填！').matches(/^\w{5,20}$/,'密码   必须5-20位')
  })
 
})(Login)

 
