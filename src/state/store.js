import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/features/formSlice"
import SignupReducer from "@/features/SignupSlice"
import RTRReducer from "@/features/RTRformslice"
export const store = configureStore({
    reducer: {
        loginForm: loginReducer,
        SignupForm: SignupReducer,
        rtrForm: RTRReducer
    }
})