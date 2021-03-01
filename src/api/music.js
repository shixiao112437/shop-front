import request from '../utils/request'

export const getMusicList = () => {
    return request({
        url:'/musiclist'
    })
}