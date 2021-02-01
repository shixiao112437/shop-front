import axios from 'axios'

const requset = axios.create({
    baseURL: 'http://127.0.0.1:7001',
})
// 请求拦截
requset.interceptors.request.use(config => {
    
    return config
},error => {
    return Promise.reject(error)
})
// 响应拦截
requset.interceptors.response.use(response => {
    try {
        return response.data.data
    } catch (error) {
        return response.data
    }
},error => {
    if (error.response && error.response.status === 401) {

    }
    return Promise.reject(error)
})

export default requset