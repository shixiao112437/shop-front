import {createStore} from 'redux'
// const AuthInfo = JSON.parse(sessionStorage.getItem('userInfo')) || {} 
const info = {
    age:"",
    birth:"",
    brief:"",
    gender:"",
    nickname:"",
    tel:"",
}
// const info = {
//     age:AuthInfo && AuthInfo.age||"",
//     birth:AuthInfo && AuthInfo.birth||"",
//     brief:AuthInfo && AuthInfo.brief||"",
//     gender:AuthInfo && AuthInfo.gender||"",
//     nickname:AuthInfo && AuthInfo.nickname||"",
//     tel:AuthInfo && AuthInfo.tel||"",
// }
function userReduce(state=info,action){
    console.log(action,'OOOOOOOOOOOOOOOOOOOO')
    let {type,value} = action
    if(type=='rrrrr'){
        sessionStorage.setItem('kkk',23123123)
      return {
          ...state,
          ...value
      }
    }else if(type=='setUser'){
        console.error(value,'skdjfakljfklsjdkl')
        sessionStorage.setItem('userInfo',JSON.stringify(value) )
        return {
            ...state,
            age:value.age,
            birth:value.birth,
            brief:value.brief,
            gender:value.gender,
            nickname:value.nickname,
            tel:value.tel,
        }
    }else{
        return  state
    }
}
export default userReduce