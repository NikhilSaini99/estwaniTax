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
        }
    }
}))

export const { rtrData } = rtrSlice.actions
export default rtrSlice.reducer;
