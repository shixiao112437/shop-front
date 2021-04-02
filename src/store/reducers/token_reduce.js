var state1 = {
    token:''
}
export default function tokenReducer (state=state1,action)  {
    let {type,value} = action
   console.log(action,'mmmmmmmmmmmmmm')
    if(type=='getToken'){
        return Object.assign({},state,{
            token:value
        })
    }else{
        return state
    }
}