import {createStore,combineReducers,applyMiddleware} from 'redux' // applyMiddleware 中间件
import thunk from 'redux-thunk'; // 处理异步action 
import tokenReduce from './token_reduce'
import musicReducer from './music_reducer'
import userReduce from './user_reduce'
import cartReduce from './cart_reduce'
/* 数据持久化 redux-persist*/
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
/* 数据持久化 */

// combineReducers合并多个reducers
const allReducer = combineReducers({
    cartReduce,
    tokenReduce,
    musicReducer,
    userReduce
})
// persist  配置问价
const persistConfig = {
    key:"root",
    storage:storage,
    stateReconciler:autoMergeLevel2
}

// 对Reducer 进行 持久化封装
const myPersistReducers = persistReducer(persistConfig,allReducer) 

//  创建store
let store = createStore(myPersistReducers,applyMiddleware(thunk))

export const persistor = persistStore(store)
// 导出
export default store