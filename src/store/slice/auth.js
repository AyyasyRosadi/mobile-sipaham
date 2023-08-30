import { createSlice } from "@reduxjs/toolkit";
import { islogin, isRefreshToken, isRefreshUser } from "../actions/auth";

export const authStore = createSlice({
  name: "auth",
  initialState: {
    userAuth: {},
    loadingAuth: false,
    msgAuth: "",
    isRefresh: true,
    checkToken: false,
    status:"IDDLE"
  },
  reducers: {
    clearAuth: (state) => {
      state.userAuth = {};
    },
    setAuth: (state, action) => {
      state.userAuth = action.payload;
    },
    clearCheck: (state) => {
      state.checkToken = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(islogin.pending, (state) => {
        state.loadingAuth = true;
        state.status="PENDING"
      })
      .addCase(islogin.fulfilled, (state, action) => {
        state.loadingAuth = false;
        state.userAuth = action.payload;
        state.isRefresh = true;
        state.status="SUCCES"
      })
      .addCase(islogin.rejected, (state, action) => {
        state.loadingAuth = false;
        state.msgAuth = action.payload;
        state.userAuth = {};
        state.isRefresh = false;
        state.status = "ERROR"
      })
      .addCase(isRefreshToken.pending, (state) => {
        state.loadingAuth = true;
        state.checkToken = false;
      })
      .addCase(isRefreshToken.fulfilled, (state, action) => {
        state.loadingAuth = false;
        state.userAuth.token = action.payload.token;
        state.isRefresh = true;
        state.checkToken = true;
      })
      .addCase(isRefreshToken.rejected, (state, action) => {
        state.loadingAuth = false;
        state.msgAuth = action.payload;
        state.isRefresh = false;
        state.checkToken = false;
      })
      .addCase(isRefreshUser.pending, (state) => {
        state.loadingAuth = true;
      })
      .addCase(isRefreshUser.fulfilled, (state, action) => {
        state.loadingAuth = false;
        state.userAuth.santri = action.payload;
      })
      .addCase(isRefreshUser.rejected, (state, action) => {
        state.loadingAuth = false;
        state.msgAuth = action.payload;
        state.userAuth = {};
      });
  },
});
export const authAction = authStore.actions;
export default authStore.reducer;
