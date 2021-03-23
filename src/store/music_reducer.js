import { object } from "prop-types"

let state1 = {
    musicList:[],
    currentMusicId:"603b604fae5d472ea01830d4",
}
export default function musicReduce(state=state1,action){
    let musicList = state.musicList
    let currentMusicId = state.currentMusicId
    let {type,value} = action

    if(type == 'addMusic'){
        if(Array.isArray(value)){
            musicList = musicList.concat(value)
        }  else{
            musicList.push(value)
        }
        return Object.assign({},state,{
            musicList
        })
    }else{
        return state
    }
}