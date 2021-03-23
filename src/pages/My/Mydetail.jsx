import React, { useState,useEffect } from 'react'
import MyNavBar from '../../component/MyNavBar/myNavBar'
import SlideCheck from '../../component/SlideCheck/index'
import { Picker, ImagePicker, TextareaItem, DatePicker, List, Button, InputItem } from 'antd-mobile';
import style from './index.module.scss'
import api from '../../api';
import {connect} from 'react-redux';
const BaseUrl = process.env.REACT_APP_URL
const DefaultPhoto = BaseUrl + '/public/img/photo.jpg'

function Mydetail(props) {
  const ageList = [{
    label: '男',
    value: 1
  }, {
    label: '女',
    value: 0
  }]
  const [nickname, setNickname] = useState(props.myDetail.nickname) // 昵称
  const [tel, setTel] = useState(props.myDetail.tel) // 昵称
  const [gender, setGender] = useState(props.myDetail.gender)
  const [age, setAge] = useState(props.myDetail.age)
  const [birth, setBirth] = useState(new Date())
  const [brief, setBrief] = useState(props.myDetail.brief)
  const [files, setFiles] = useState([])
  const [modal, setModal] = useState(false)
  function changefile(files) {
    setFiles(files)
    console.log(files, '123123');
  }
  async function submit() {
    let params = {
      nickname, tel, age, birth, brief, gender: gender[0]
    }
    let res = await api.auth.saveinfo(params)
    console.log(res);
  }
  function success(){
    alert(1)
  }
  useEffect(() => {
     
    console.log(props,'11111111111111');
  }, [])
  return (
    <div className={style.mywrap}>
      <MyNavBar>个人信息</MyNavBar>
      <div className={style.photo}>
        <img src={DefaultPhoto || ''} alt="" />
      </div>
      <List>
        <InputItem onChange={val => setNickname(val)} placeholder='输入你的昵称'>
          昵称
        </InputItem>
        <InputItem onChange={val => setTel(val)} type='phone'>
          手机号
        </InputItem>
        <Picker
          title='性别'
          data={ageList}
          value={gender}
          onOk={v => setGender(v)}
          cols={1}
        >
          <List.Item arrow="horizontal">性别</List.Item>
        </Picker>
        <InputItem onChange={val => setAge(val)} maxLength={3} type='digit'>
          年龄
        </InputItem>
        <DatePicker mode='date'
          value={birth}
          onOk={(val) => {
            setBirth(val)
            console.log(val)
          }}>
          <List.Item arrow="horizontal">生日</List.Item>
        </DatePicker>
      </List>
      <List>
        <TextareaItem
          onChange={val => setBrief(val)}
          rows={3}
          placeholder="这个人很懒还没有什么说的..."
          autoHeight title={'个性说明'}>

        </TextareaItem>
      </List>
      <Button type='primary' onClick={submit}>提交</Button>
      <ImagePicker
        files={files}
        onChange={changefile}
        onImageClick={(index, fs) => console.log(index, fs)}
        selectable={files.length < 7}
      >
        是是是
        </ImagePicker>
      <Button type='primary' onClick={() => {

        props.history.push('/shop')
      }}>跳转shop页面</Button>

      <Button type='primary' onClick={() => {
          setModal(true)
          setTimeout(() => {
            setModal(false)
          },0);
      }}>打开验证码</Button>
      <SlideCheck modal={modal} success={success}></SlideCheck>

    </div>
  )
}
const mapstate = (state,ownProps) => {
  
  return {
    myDetail:state.userReduce,
    a:ownProps
  }
}
export default connect(mapstate)(Mydetail)
