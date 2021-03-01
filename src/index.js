import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd-mobile/dist/antd-mobile.css'
import './index.css';

import './assets/style/font/iconfont.css'
import store from './store/index'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('root')
);

