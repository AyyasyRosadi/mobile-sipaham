import { createSlice } from "@reduxjs/toolkit";
import { allPoint } from "../actions/point";

export const pointStore = createSlice({
    name:"point",
    initialState :{
        pointAll : [],
        loadingPoint : false,
        msgPoint : ""
    },
    extraReducers : builder =>{
        builder
        .addCase(allPoint.pending,(state)=>{
            state.loadingPoint = true
        })
        .addCase(allPoint.fulfilled,(state,action)=>{
            state.loadingPoint = false
            state.pointAll = action.payload
        })
        .addCase(allPoint.rejected,(state,action)=>{
            state.loadingPoint = false
            state.pointAll = []
            state.msgPoint = action.payload
        })
    }
})
export default pointStore.reducer