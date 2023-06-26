import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/features/formSlice"
import SignupReducer from "@/features/SignupSlice"
import RTRReducer from "@/features/RTRformslice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage,
}


const reducer = combineReducers({
    loginForm: loginReducer,
    SignupForm: SignupReducer,
    rtrForm: RTRReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer
})


export const persistor = persistStore(store);