var state1 = {
    token:''
}
export default function tokenReducer (state=state1,action)  {
    let {type,value} = action
    if(type=='getToken'){
        return Object.assign({},state,{
            ...value
        })
    }else{
        return state
    }
}