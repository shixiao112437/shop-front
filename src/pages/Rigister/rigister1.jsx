import React from 'react'
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import rigister from './rigister.module.scss'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import MyNavBar from '../../component/MyNavBar/myNavBar'

function Rigister() {
    const formik = useFormik({
        initialValues: {
            account: '',
            password: '',
        },
        validationSchema: Yup.object({
            account: Yup.string().required('账号必填！').matches(/^\w{5,8}$/, '用户名 必须5-8位'),
            password: Yup.string().required('密码必填！').matches(/^\w{5,20}$/, '密码   必须5-20位')
        }),
        onSubmit: values => { 
            console.log(values,'ssss')
        },
    })
    return (
        <div className={rigister.wrap}>
            <MyNavBar>
                注册页面
            </MyNavBar>
            <WhiteSpace size="xl"></WhiteSpace>
            {/*    <h1>第一个表单</h1>
            <Formik
                initialValues={{
                    account: '',
                    password: '',
                    ischeck: '',
                }}
                validate={values => {
                    const errors = {}
                    if (!values.account) {
                        errors.account = '请输入您的账号'
                    }
                    if (!values.password) {
                        errors.password = '请填写密码'
                    }
                    return errors
                }}
                onSubmit={(values, a) => {
                    console.log(values);
                    console.log(a, 'submit');
                }}>
                {(a) => {
                    // console.log(a, 'children');
                    return (<Form>
                        <Field type="text" name="account" />
                        <ErrorMessage name="account" component="div" />
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" >
                            Submit
                        </button>
                    </Form>)
                }}
            </Formik>
            <h1>第二个表单</h1> */}
            <Formik>
                <Form onSubmit={formik.handleSubmit}>
                    {/*     <label htmlFor="account">账号:</label>
                <input
                    id='account'
                    name="account"
                    onChange={formik.handleChange}
                    value={formik.values.account}
                />
                <hr /> */}
                    {/* <label htmlFor="account">账号：</label> */}
                    <Field name="account" type="text" {...formik.getFieldProps('account')} />
                    <ErrorMessage name="account" className={rigister.errorMsg}  >
                        </ErrorMessage>

                

                    {/* <label htmlFor="password">密码：</label> */}
                    <Field name="password" type="password" {...formik.getFieldProps('password')} />
                    <ErrorMessage name="password" className={rigister.errorMsg}  >
                    </ErrorMessage>
                    <button type='submit'>注册</button>

                    {/*    <label htmlFor="password">密码：</label>
                <input
                    id='password'
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <hr/> */}

                </Form>
            </Formik>
        </div>
    )
}

export default Rigister
