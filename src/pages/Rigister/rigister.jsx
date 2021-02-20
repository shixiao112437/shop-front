import React, { useEffect } from 'react'
import { Toast, List, InputItem, WhiteSpace,Button,Checkbox } from 'antd-mobile';
import rigister from './rigister.module.scss'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import MyNavBar from '../../component/MyNavBar/myNavBar'
import api from '../../api/index';
const AgreeItem = Checkbox.AgreeItem;
console.log(process.env.REACT_APP_URL,'aaaaaaaaaaaaaaaa');
console.log(process.env.REACT_APP_URL,'bbbbbbbbbbbbbbbb');

function Rigister() {
    const formik = {
        initialValues: {
            account: '',
            password: '',
            ischeck:''
        },
        validationSchema: Yup.object({
            account: Yup.string().required('账号必填！').matches(/^\w{5,8}$/, '用户名 必须5-8位'),
            password: Yup.string().required('密码必填！').matches(/^\w{5,20}$/, '密码   必须5-20位'),
            ischeck: Yup.string().required('请勾选协议')
        }),
        onSubmit: async values => {
            console.log(values, 'ssss')
            register(values)
        },
    }
    async function register(values) {
        let res = await api.auth.rigister(values)
        console.log(res,'ssssss');
        if (res) {
            Toast.success('注册成功', 1)
        } else {
            Toast.fail('注册失败', 1)
        }
    }
    useEffect(() => {
        // console.log(api, 'slfjlsdjf');
    }, [])
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
                    <Field name="account" type="text" />
                    <ErrorMessage name="account" className={rigister.errorMsg}  >
                    </ErrorMessage>
                    <hr />
                    <label htmlFor="password">密码：</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" className={rigister.errorMsg}  >
                    </ErrorMessage>
                    <hr />
                    <input type="checkbox" name="ischeck"/>请勾选协议
                    <ErrorMessage name="ischeck" className={rigister.errorMsg}  >
                    </ErrorMessage>
                    <hr />
                    <Button onClick={
                        ()=>{
                            formik.onSubmit()
                        }
                    } type="primary">注册</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default Rigister
