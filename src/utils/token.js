let getToken = () => {
    return localStorage.getItem('shop-token')
}
let setToken = (token) => {
    return localStorage.setItem('shop-token',token)
}
let delToken = () => {
    return localStorage.removeItem('shop-token')
}
let isLogin = () => {
    return !!getToken() 
}

export { getToken, setToken,delToken,isLogin}