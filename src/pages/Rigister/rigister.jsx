import React from 'react'
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import rigister from './rigister.module.scss'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import MyNavBar from '../../component/MyNavBar/myNavBar'

function Rigister() {
    const formik = {
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
    }
    return (
        <div className={rigister.wrap}>
            <MyNavBar>
                注册页面
            </MyNavBar>
            <WhiteSpace size="xl"></WhiteSpace>
            <Formik 
            initialValues={formik.initialValues}
            validationSchema={formik.validationSchema}
            onSubmit={formik.onSubmit}>
                <Form>
                    <label htmlFor="account">账号：</label>
                    <Field name="account" type="text"  />
                    <ErrorMessage name="account" className={rigister.errorMsg}  >
                    </ErrorMessage>
                    <hr/>
                    <label htmlFor="password">密码：</label>
                    <Field name="password" type="password"  />
                    <ErrorMessage name="password" className={rigister.errorMsg}  >
                    </ErrorMessage>
                    <button type='submit'>注册</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Rigister
