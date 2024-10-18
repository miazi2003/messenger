import { createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'



const userLoginSlice = createSlice({
    name: 'user',
    initialState: {
        token: "",
        name: "",
        
     
        loginLoading: false,

    },
    reducers: {
        userLogin: (state, action) => {
            const decode = jwtDecode(action.payload.token);
            state.name = decode.name;
           
        },
    }
})
export const { userLogin } = userLoginSlice.actions
export default userLoginSlice.reducer ;