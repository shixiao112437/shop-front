import request from '../utils/request'
export  const getCarousel = () => {
    return request({
        url:'/carousel'
    })
}
export  const getCategoriesl = () => {
    return request({
        url:'/categories'
    })
}