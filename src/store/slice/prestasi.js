import { createSlice } from "@reduxjs/toolkit";
import { getAllPrestasi } from "../actions/prestasi";

export const prestasiStore = createSlice({
    name:"prestasi",
    initialState:{
        prestasiAll : [],
        loadingPrestasi : false,
        msgPrestasi : ""
    },
    extraReducers : builder =>{
        builder
        .addCase(getAllPrestasi.pending,(state)=>{
            state.loadingPrestasi = true
        })
        .addCase(getAllPrestasi.fulfilled,(state,action)=>{
            state.loadingPrestasi = false
            state.prestasiAll = action.payload
        })
        .addCase(getAllPrestasi.rejected,(state,action)=>{
            state.loadingPrestasi = false
            state.prestasiAll = []
            state.msgPrestasi = action.payload
        })
    }
})

export default prestasiStore.reducer