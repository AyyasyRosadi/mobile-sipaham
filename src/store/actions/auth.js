import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiAuth } from "../../api/auth";

export const islogin = createAsyncThunk(
    'login',
    async(data,{rejectWithValue})=>{
        try{
            const res = await ApiAuth.login(data)
            if(res.status === 200){
                return res.data
            }
        }
        catch(err){
            return rejectWithValue(err.msg)
        }
    }
)
export const isRefreshToken = createAsyncThunk(
    'token/refresh',
    async(_,{rejectWithValue})=>{
        try{
            const res = await ApiAuth.refreshToken()
            if(res.status === 200){
                return res.data
            }
        }
        catch(err){
            return rejectWithValue(err.response.data.msg)
        }
    }
)
export const isRefreshUser = createAsyncThunk(
    'user/refresh',
    async(_,{rejectWithValue})=>{
        try{
            const res = await ApiAuth.refreshUser()
            if(res.status === 200){
                return res.data
            }
        }
        catch(err){
            return rejectWithValue(err.response.data.msg)
        }
    }
)