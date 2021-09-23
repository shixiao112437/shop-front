import React, { useEffect ,useState,useRef} from 'react'
import { Toast, List, InputItem, WhiteSpace,Button,Checkbox } from 'antd-mobile';
import rigister from './rigister.module.scss'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import MyNavBar from '../../component/MyNavBar/myNavBar'
import api from '../../api/index';
import SlideCheck from '../../component/SlideCheck/index'

const AgreeItem = Checkbox.AgreeItem;
console.log(process.env.REACT_APP_URL,'aaaaaaaaaaaaaaaa');
console.log(process.env.REACT_APP_URL,'bbbbbbbbbbbbbbbb');

function Rigister() {
  const [modal, setModal] = useState(false)
  let formRef = useRef()
    const formik = {
        initialValues: {
            account: 'wkf123',
            password: 'wkf123',
            ischeck:true,
        },
        validationSchema: Yup.object({
            account: Yup.string().required('账号必填！').matches(/^\w{5,8}$/, '用户名 必须5-8位'),
            password: Yup.string().required('密码必填！').matches(/^\w{5,20}$/, '密码   必须5-20位'),
            ischeck: Yup.string().required('请勾选协议')
        }),
        onSubmit: async values => {
            console.log(formik.initialValues, 'ssss')
            alert(formik.initialValues)
            register(formik.initialValues)
        },
    }
    async function register(values) {
        let res = await api.auth.rigister({...values})
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
              
                >
                <Form ref={formRef} onSubmit={formik.onSubmit}>
                    <label htmlFor="account">账号：</label>
                    <Field className={rigister.input} name="account" type="text" />
                   
                    <ErrorMessage component='div'  name="account" className={rigister.errorMsg}  >
                    </ErrorMessage>
              <br/>
                    <label htmlFor="password">密码：</label>
                    <Field className={rigister.input} name="password" type="password" />
                    <ErrorMessage component='div' name="password" className={rigister.errorMsg}  >
                    </ErrorMessage>
              <br/>
                   <div className={rigister.check}>
                   <Field name="ischeck" type="checkbox" />
                    请仔细阅读天款协议
                   </div>
                    
                    <ErrorMessage component='div' name="ischeck" className={rigister.errorMsg}  >
                    </ErrorMessage>
                
                    <Button type="primary" onClick={()=>{
                     
                        setModal(true)
                        setTimeout(()=>{setModal(false)})
                    }}>注册</Button>
                </Form>
            </Formik>
            <SlideCheck modal={modal} success={()=>{
                formik.onSubmit()
            }}></SlideCheck>
        </div>
    )
}

export default Rigister
