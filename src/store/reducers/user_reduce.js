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
    }else{
        return  state
    }
}
export default userReduce