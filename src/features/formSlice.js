import { createSlice } from "@reduxjs/toolkit";

const initialState  = {  }

const loginformSlice = createSlice({
    name: 'form',
    initialState ,
    reducers: {
        updateLoginState: (state, action) => {
           return state=action.payload
        }
    }
})

export const { updateLoginState } = loginformSlice.actions

export default loginformSlice.reducer
