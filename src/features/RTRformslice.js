import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const rtrSlice = (createSlice({
    name: 'RTRform',
    initialState,
    reducers: {
        rtrData: (state, action) => {
             return state = action.payload
        }
    }
}))

export const {rtrData} = rtrSlice.actions
export default rtrSlice.reducer;
