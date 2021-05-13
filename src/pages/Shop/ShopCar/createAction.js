import api from '../../../api/index'
export let  addCartSync = (value) => {
    return async (dispatch) => {
        let res = await api.music.getPic()
        console.log(res,'图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片')
        dispatch({
            type:"addCart",
            value
        })
    }

}