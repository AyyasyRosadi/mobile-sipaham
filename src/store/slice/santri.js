import { createSlice } from "@reduxjs/toolkit";
import { profileSantri } from "../actions/santri";

export const santriStore = createSlice({
    name:"santri",
    initialState:{
        profile : {},
        loadingSantri : false,
        msgSantri : ""
    },
    extraReducers : builder =>{
        builder
        .addCase(profileSantri.pending,(state)=>{
            state.loadingSantri = true
        })
        .addCase(profileSantri.fulfilled,(state,action)=>{
            state.loadingSantri = false
            state.profile = action.payload
        })
        .addCase(profileSantri.rejected,(state,action)=>{
            state.loadingSantri = false
            state.msgSantri = action.payload
        })
    }
})
export default santriStore.reducer