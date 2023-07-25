import { configureStore } from "@reduxjs/toolkit";
import { persistStore,} from "redux-persist"
import thunk from "redux-thunk";
import authStore from "./slice/auth";
import pembayaranStore from "./slice/pembayaran";
import santriStore from "./slice/santri";
import pointStore from "./slice/point";
import perizinanStore from "./slice/perizinan";

export const store = configureStore({
    reducer:{
        auth : authStore,
        santri : santriStore,
        pembayaran : pembayaranStore,
        point : pointStore,
        perizinan : perizinanStore
    },
    middleware:[thunk]
})
export const persistor = persistStore(store)