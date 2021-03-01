import {createStore} from 'redux'

let state = {
    musicList:[],
    currentMusicId:"603b604fae5d472ea01830d4",
}
function reduce(state,action){
    let musicList = state.musicList
    let currentMusicId = state.currentMusicId
    let {type,value} = action
    switch (type) {
        case 'addMusic': // 添加音乐
            if(Array.isArray(value)){
                musicList = musicList.concat(value)
            }  else{
                musicList.push(value)
            }

        
         return {
             ...state,
             musicList
         }
            break;

        case 'nextMusic' :
        //    let index = musicList.findIndex(item => {
        //         return item._id===value
        //     })
            // currentMusicId = index+1===musicList.length?musicList[0]._id: musicList[index+1]._id
            currentMusicId =  musicList[0]._id

            return {
                ...state,
                currentMusicId
            }
            break;
        case 'beforeMusic' :
            //  index = musicList.findIndex(item => {
            //     return item._id===value
            // })
            currentMusicId =  musicList[2]._id

            return {
                ...state,
                currentMusicId
            }

            break;
        case 'setMusic':

            break;
        default:
            return state
     
    }
}
let store = createStore(reduce,state)

export default store