import request from '../utils/request'
// 用户注册
export const getList = (params) => {
    return request({
        method:'get',
        params,
        url:"/citylist"
    })
}