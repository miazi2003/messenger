import { configureStore } from '@reduxjs/toolkit'
import adminUserReducers from './adminUserReducers';
import userReducer from './userReducer';






const store = configureStore({
   

    reducer: {
  admin :adminUserReducers,
  user : userReducer
    }
})

export default store;