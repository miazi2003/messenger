import { createSlice, configureStore } from '@reduxjs/toolkit'

import { jwtDecode } from 'jwt-decode';
const adminUserSlice = createSlice({
    name: 'adminuser',
    initialState: {
        token: "",
        name: "",
        phone: "",
        email: "",
        photo: "",
        loginLoading: false,

    },
    reducers: {
        adminLogin: (state, action) => {
            const decode = jwtDecode(action.payload.token);
            state.email = decode.email;
            state.name = decode.name;
            state.token = action.payload.token
        },
    }
})

export const { adminLogin } = adminUserSlice.actions
export default adminUserSlice.reducer