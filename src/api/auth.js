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
// 保存用户信息
export const saveinfo = (data) => {
    return request({
        method:'post',
        data,
        url:"/saveinfo"
    })
}

// 获取用户信息
export const getAuthInfo = (data) => {
    return request({
        method:'get',
        data,
        url:"/authInfo"
    })
}
// 获取 验证码
export const getVerific = () => {
    return request({
        method:'get',
        url:"/verific"
    })
}
// 校验验证码
export const checkVerific = (data) => {
    return request({
        method:'post',
        url:"/checkVerific",
        data
    })
}

