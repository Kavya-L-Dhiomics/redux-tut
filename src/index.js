import React , { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18nextConf';
// 
import { createRoot } from 'react-dom/client';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './service/reducers/index'
const store=createStore(rootReducer)
// 
// ReactDOM.render(
//   <Suspense fallback="...">
//   <Provider store={store}>
//     <App />
//   </Provider>
//   </Suspense>,
//   document.getElementById('root')
// );
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Suspense fallback="...">
  <Provider store={store}>
    <App />
  </Provider>
  </Suspense>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
