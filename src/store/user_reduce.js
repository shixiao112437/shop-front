import {createStore} from 'redux'
const AuthInfo = JSON.parse(sessionStorage.getItem('userInfo')) 
// const info = {
//     age:"",
//     birth:"",
//     brief:"",
//     gender:"",
//     nickname:"",
//     tel:"",
// }
const info = {
    age:AuthInfo.age||"",
    birth:AuthInfo.birth||"",
    brief:AuthInfo.brief||"",
    gender:AuthInfo.gender||"",
    nickname:AuthInfo.nickname||"",
    tel:AuthInfo.tel||"",
}
function userReduce(state=info,action){
    console.log(action,'userAction')
    let {type,value} = action
    if(type=='getInfo'){
        sessionStorage.setItem('userInfo',JSON.stringify(value))
        return Object.assign({},state,{
            ...value
        })
    }else{
        return state
    }
}
export default userReduce