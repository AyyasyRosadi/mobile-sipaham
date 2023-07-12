import { createSlice } from "@reduxjs/toolkit";
import { islogin, isRefreshToken } from "../actions/auth";

export const authStore = createSlice({
    name:"auth",
    initialState:{
        userAuth : {},
        loadingAuth : false,
        msgAuth : "",
        isRefresh : true
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
        })
        .addCase(isRefreshToken.pending,(state)=>{
            state.loadingAuth = true
        })
        .addCase(isRefreshToken.fulfilled,(state,action)=>{
            state.loadingAuth = false
            state.userAuth.token = action.payload.token
            state.isRefresh = true
        })
        .addCase(isRefreshToken.rejected,(state,action)=>{
            state.loadingAuth = false
            state.msgAuth = action.payload
            state.isRefresh = false
        })
    }
})
export const authAction = authStore.actions
export default authStore.reducer