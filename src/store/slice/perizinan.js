import { createSlice } from "@reduxjs/toolkit";
import { allPerizinan } from "../actions/perizinan";

export const perizinanStore = createSlice({
    name:"perizinan",
    initialState :{
        perizinanAll : [],
        loadingPerizinan : false,
        msgPerizinan : ""
    },
    extraReducers:builder =>{
        builder
        .addCase(allPerizinan.pending,(state)=>{
            state.loadingPerizinan = true
        })
        .addCase(allPerizinan.fulfilled,(state,action)=>{
            state.loadingPerizinan = false
            state.perizinanAll = action.payload
        })
        .addCase(allPerizinan.rejected,(state,action)=>{
            state.loadingPerizinan = false
            state.perizinanAll = []
            state.msgPerizinan = action.payload
        })
    }
})
export default perizinanStore.reducer