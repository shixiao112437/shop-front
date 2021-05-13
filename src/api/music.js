import request from '../utils/request'

export const getMusicList = () => {
    return request({
        url:'/musiclist'
    })
}
export const getPic = () => {
    return request({
        url:"/test"
    })
}