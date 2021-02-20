// 获取 城市的坐标
const CITY = 'CITY_info'

   const getCity = () => {
       return JSON.parse(localStorage.getItem(CITY))
    }
   const setCity = (value)=>{
        localStorage.setItem(CITY, JSON.stringify(value))
    }
    const getCurrentCity = () => {
        let city = getCity()
        if(city){
            return Promise.resolve(curCity)
        }else{

        }
    }
