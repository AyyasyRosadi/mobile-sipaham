import { createSlice } from "@reduxjs/toolkit";
import {
  getHistory,
  getHistoryTopUp,
  getPembayaran,
  pembayaranSpp,
  postTopup,
} from "../actions/pembayaran";

export const pembayaranStore = createSlice({
  name: "pembayaran",
  initialState: {
    history: [],
    historyTopup: {},
    onePembayaran: {},
    loadingPembayaran: false,
    status: false,
    msgPembayaran: "",
  },
  reducers: {
    clearStatus: (state) => {
      state.status = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPembayaran.pending, (state) => {
        state.loadingPembayaran = true;
      })
      .addCase(getPembayaran.fulfilled, (state, action) => {
        state.loadingPembayaran = false;
        state.onePembayaran = action.payload;
      })
      .addCase(getPembayaran.rejected, (state, action) => {
        state.loadingPembayaran = false;
        state.msgPembayaran = action.payload;
      })
      .addCase(pembayaranSpp.pending, (state) => {
        state.loadingPembayaran = true;
        state.status = false;
      })
      .addCase(pembayaranSpp.fulfilled, (state, action) => {
        state.loadingPembayaran = false;
        state.msgPembayaran = action.payload.msg;
        state.status = true;
      })
      .addCase(pembayaranSpp.rejected, (state, action) => {
        state.loadingPembayaran = false;
        state.msgPembayaran = action.payload;
        state.status = true;
      })
      .addCase(getHistory.pending, (state) => {
        state.loadingPembayaran = true;
      })
      .addCase(getHistory.fulfilled, (state, action) => {
        state.loadingPembayaran = false;
        state.history = action.payload;
      })
      .addCase(getHistory.rejected, (state, action) => {
        state.loadingPembayaran = false;
        state.msgPembayaran = action.payload;
      })
      .addCase(getHistoryTopUp.pending, (state) => {
        state.loadingPembayaran = true;
      })
      .addCase(getHistoryTopUp.fulfilled, (state, action) => {
        state.loadingPembayaran = false;
        state.historyTopup = action.payload;
      })
      .addCase(getHistoryTopUp.rejected, (state, action) => {
        state.loadingPembayaran = false;
        state.msgPembayaran = action.payload;
      })
      .addCase(postTopup.pending, (state) => {
        state.loadingPembayaran = true;
        state.status = false;
      })
      .addCase(postTopup.fulfilled, (state, action) => {
        state.msgPembayaran = action.payload.msg;
        state.loadingPembayaran = false;
        state.status = true;
      })
      .addCase(postTopup.rejected, (state, action) => {
        state.msgPembayaran = action.payload;
        state.loadingPembayaran = false;
        state.status = true;
      });
  },
});

export const pembayaranActions = pembayaranStore.actions;
export default pembayaranStore.reducer;
