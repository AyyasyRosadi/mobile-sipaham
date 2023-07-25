import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiPerizinan } from "../../api/perizinan";


export const allPerizinan = createAsyncThunk(
    'perizinan/all',
    async(nuwb,{rejectWithValue})=>{
        try{
            const res = await ApiPerizinan.get(nuwb)
            if(res.status === 200){
                return res.data
            }
        }
        catch(err){
            return rejectWithValue(err.response.data.msg)
        }
    }
)