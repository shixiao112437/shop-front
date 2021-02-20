import axios from 'axios'
import {getToken,isLogin} from './token'
const baseURL = process.env.REACT_APP_URL
const requset = axios.create({
    baseURL:baseURL
})
// 请求拦截
requset.interceptors.request.use(config => {
    isLogin() && (config.headers.Authorization = `Bearer ${getToken()}`)
    return config
},error => {
    return Promise.reject(error)
})
// 响应拦截
requset.interceptors.response.use(response => {
    try {
        return response.data
    } catch (error) {
        return response
    }
},error => {
    if (error.response && error.response.status === 401) {

    }
    return Promise.reject(error)
})

export default requset