import { createSlice } from "@reduxjs/toolkit";

const initialState  = {adminLogin:null,userLogin:null,loginuserData:null}

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
