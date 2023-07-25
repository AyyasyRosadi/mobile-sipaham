import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiPoint } from "../../api/point";

export const allPoint = createAsyncThunk(
    'point/all',
    async(nuwb,{rejectWithValue})=>{
        try{
            const res = await ApiPoint.get(nuwb)
            if(res.status ===200){
                return res.data
            }
        }
        catch(err){
            return rejectWithValue(err.response.data.msg)
        }
    }
)