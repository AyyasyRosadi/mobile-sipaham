import { createSlice } from "@reduxjs/toolkit";
import { islogin } from "../actions/auth";

export const authStore = createSlice({
    name:"auth",
    initialState:{
        userAuth : {},
        loadingAuth : false,
        msgAuth : ""
    },
    reducers : {
        clearAuth : (state)=>{
            state.userAuth = {}
        }
    },
    extraReducers : builder =>{
        builder
        .addCase(islogin.pending,(state)=>{
            state.loadingAuth = true
        })
        .addCase(islogin.fulfilled,(state,action)=>{
            state.loadingAuth = false
            state.userAuth = action.payload
        })
        .addCase(islogin.rejected,(state,action)=>{
            state.loadingAuth = false
            state.msgAuth = action.payload
            state.token = ""
        })
    }
})
export const authAction = authStore.actions
export default authStore.reducer