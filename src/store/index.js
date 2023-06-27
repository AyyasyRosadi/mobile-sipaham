import { configureStore } from "@reduxjs/toolkit";
import { persistStore,} from "redux-persist"
import thunk from "redux-thunk";
import authStore from "./slice/auth";
import pembayaranStore from "./slice/pembayaran";
import santriStore from "./slice/santri";

export const store = configureStore({
    reducer:{
        auth : authStore,
        santri : santriStore,
        pembayaran : pembayaranStore
    },
    middleware:[thunk]
})
export const persistor = persistStore(store)