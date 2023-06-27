import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiSantri } from "../../api/santri";

export const profileSantri = createAsyncThunk(
    'santri/profile',
    async(nuwb,{rejectWithValue})=>{
        try{
            const res = await ApiSantri.getProfile(nuwb)
            if(res.status === 200){
                return res.data
            }
        }
        catch(err){
            return rejectWithValue(err.response.data.msg)
        }
    }
)