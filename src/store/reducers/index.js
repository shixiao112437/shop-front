import {createStore,combineReducers,applyMiddleware} from 'redux' // applyMiddleware 中间件
import thunk from 'redux-thunk'; // 处理异步action 
import tokenReduce from './token_reduce'
import musicReducer from './music_reducer'
import userReduce from './user_reduce'
import cartReduce from './cart_reduce'

const allReducer = combineReducers({
    cartReduce,
    tokenReduce,
    musicReducer,
    userReduce
})

let store = createStore(allReducer,applyMiddleware(thunk))

export default store