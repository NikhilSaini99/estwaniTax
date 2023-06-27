import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/features/formSlice"
import SignupReducer from "@/features/SignupSlice"
import RTRReducer from "@/features/RTRformslice"
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import {
    persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';




const persistConfig = {
    key: 'root',
    version: 1,
    storage,

}

const reducer = combineReducers({
    loginForm: loginReducer,
    SignupForm: SignupReducer,
    rtrForm: RTRReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store);