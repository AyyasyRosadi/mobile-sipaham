import { createSlice } from "@reduxjs/toolkit";
import { islogin, isRefreshToken } from "../actions/auth";

export const authStore = createSlice({
    name:"auth",
    initialState:{
        userAuth : {},
        loadingAuth : false,
        msgAuth : "",
        islogin : false
    },
    reducers : {
        clearAuth : (state)=>{
            state.userAuth = {}
        },
        setAuth : (state,action)=>{
            state.userAuth = action.payload
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
            state.userAuth = {}
            state.islogin = true
        })
        .addCase(isRefreshToken.pending,(state)=>{
            state.loadingAuth = true
        })
        .addCase(isRefreshToken.fulfilled,(state,action)=>{
            state.loadingAuth = false
            state.userAuth.token = action.payload.token
        })
        .addCase(isRefreshToken.rejected,(state,action)=>{
            state.loadingAuth = false
            state.msgAuth = action.payload
        })
    }
})
export const authAction = authStore.actions
export default authStore.reducer