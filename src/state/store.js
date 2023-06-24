import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/features/formSlice"
import SignupReducer from "@/features/SignupSlice"
export const store = configureStore({
    reducer: {
        loginForm: loginReducer,
        SignupForm:SignupReducer
    }
})