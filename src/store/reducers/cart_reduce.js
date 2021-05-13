let state1 = {
    cartList:[],
}
export default function cartReduce(state=state1,action){
    let res = {...state}
    let {type,value} = action
    if(type=='addCart'){
        console.log(value,'vvvvvvvvvvvvvvvvvvvvvvvvvv')
        let {id} = value
        // alert(id)
        let index = res.cartList.findIndex(item => {
            return item.id==id
        })
        // alert(index)
        if(index>=0){
            res.cartList[index].num++
        }else{
            res.cartList.push({...value,num:1})
        }
    
        return res
    }else{
        return state
    }
}