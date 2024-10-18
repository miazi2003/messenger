import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux"
import routes from './routes';
import { ToastContainer } from 'react-toastify';
import store from './store/admin/rootReducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Provider store={store}>
<ToastContainer/>
  <RouterProvider router={routes} />
</Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

