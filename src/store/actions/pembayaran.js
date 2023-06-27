import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiPembayaran } from "../../api/pembayaran";

export const getPembayaran = createAsyncThunk(
    'spp/get',
    async(nuwb,{rejectWithValue})=>{
        try{
            const res = await ApiPembayaran.getData(nuwb)
            if(res.status === 200){
                return res.data
            }
        }
        catch(err){
            return rejectWithValue(err.response.data.msg)
        }
    }
)
export const pembayaranSpp = createAsyncThunk(
    'spp/post',
    async(nuwb,{rejectWithValue})=>{
        try{
            const res = await ApiPembayaran.postPembayaran(nuwb)
            if(res.status === 200){
                return res.data
            }
        }
        catch(err){
            return rejectWithValue(err.response.data.msg)
        }
    }
)
export const getHistory = createAsyncThunk(
    'spp/log',
    async(nuwb,{rejectWithValue})=>{
        try{
            const res = await ApiPembayaran.history(nuwb)
            if(res.status === 200){
                return res.data
            }
        }
        catch(err){
            return rejectWithValue(err.response.data.msg)
        }
    }
)
export const getHistoryTopUp = createAsyncThunk(
    'topup/log',
    async(nuwb,{rejectWithValue})=>{
        try{
            const res = await ApiPembayaran.historyTopUp(nuwb)
            if(res.status === 200){
                return res.data
            }
        }
        catch(err){
            return rejectWithValue(err.response.data.msg)
        }
    }
)
export const postTopup = createAsyncThunk(
    'topup/post',
    async(data,{rejectWithValue})=>{
        try{
            const res = await ApiPembayaran.topUp(data)
            if(res.status === 200){
                return res.data
            }
        }
        catch(err){
            return rejectWithValue(err.response.data.msg)
        }
    }
)