import request from '../utils/request'
// 用户注册
export const rigister = (data) => {
    return request({
        method:'post',
        data,
        url:"/rigister"
    })
}
// 登录
export const login = (data) => {
    return request({
        method:'post',
        data,
        url:"/login"
    })
}
// 保存
export const saveinfo = (data) => {
    return request({
        method:'post',
        data,
        url:"/saveinfo"
    })
}