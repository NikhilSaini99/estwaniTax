import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const rtrSlice = (createSlice({
    name: 'RTRform',
    initialState,
    reducers: {
        rtrData: (state, action) => {
            state = action.payload
            console.log('checking satate in ',state)
            return state;
        },
        existingData: (state,action)=>{
            
                return state= action.payload
        }
    }
}))

export const { rtrData,existingData } = rtrSlice.actions
export default rtrSlice.reducer;
