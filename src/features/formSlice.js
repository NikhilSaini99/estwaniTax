import { createSlice } from "@reduxjs/toolkit";

const initialState  = {email_id:'',password:''}

const loginformSlice = createSlice({
    name: 'form',
    initialState ,
    reducers: {
        updateLoginState: (state, action) => {
           return state=action.payload
        },
        adminLogin:(state,action)=>{
            return state= action.payload
        }
    }
})

export const { updateLoginState,adminLogin } = loginformSlice.actions

export default loginformSlice.reducer
