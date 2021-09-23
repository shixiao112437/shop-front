import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd-mobile/dist/antd-mobile.css'
import './index.css';

import './assets/style/font/iconfont.css'
import store,{persistor} from './store/reducers/index'

import {PersistGate} from 'redux-persist/lib/integration/react'


// store订阅了数据的变化
//  数据变化 重新渲染
/* store.subscribe(() => {
  ReactDOM.render(
    <App  store={store}/>
    , document.getElementById('root')
  );
}) */

import {Provider} from 'react-redux'

console.log(store,'storestorestorestorestore')
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
  , document.getElementById('root')
);

