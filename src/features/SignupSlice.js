import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name_of_business: '',
    address: '',
    tin: '',
    first_name: '',
    last_name:'',
    designation: '',
    telephone_number: '',
    cell_phone_number: '',
    email_id: '',
    password: '',
    // rePassword: '',
    user_type:2
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