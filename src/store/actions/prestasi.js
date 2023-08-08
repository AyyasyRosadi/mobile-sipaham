import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiPrestasi } from "../../api/prestasi";

export const getAllPrestasi = createAsyncThunk(
    'prestasi/all',
    async(nuwb,{rejectWithValue})=>{
        try{
            const res = await ApiPrestasi.get(nuwb)
            if(res.status === 200){
                return res.data
            }
        }
        catch(err){
            return rejectWithValue(err.response.data.msg)
        }
    }
)