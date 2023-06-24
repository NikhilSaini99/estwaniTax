import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    businessName: '',
    address: '',
    tin: '',
    primaryContact: '',
    designation: '',
    teleNo: '',
    cellNo: '',
    email: '',
    password: '',
    rePassword: '',
}


export const signUpSlice = createSlice({
    name: 'SignUp',
    initialState,
    reducers: {
        signupData: (state, action) => {
            return state = action.payload
        }
    }

})


export const { signupData } = signUpSlice.actions
export default signUpSlice.reducer