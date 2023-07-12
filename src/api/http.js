import axios from "axios";
import { navigationRef } from "./util";
import { CommonActions } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { setAuth } from "../UI/Route";
// import {navigate}

const api = axios.create({
    baseURL: "http://192.168.1.8:8689"
    // baseURL:"http://10.10.10.248:8689"
})
export default api

let store;
export const injectStore = (_store) => {
    store = _store
}

api.interceptors.request.use((req) => {
    if (!req.url.includes("/user/login")) {
        req.headers = {
            Authorization: `Bearer ${store.getState().auth.userAuth.token}`
        }
    }
    if(req.url.includes(`/user/refreshtoken`)){
        req.headers = {
            Authorization : `Bearer ${store.getState().auth.userAuth.refrestToken}`
        }
    }
    return req;
})
api.interceptors.response.use(
    (res) => {
        return res
    },
    async(err) => {
        if ( err.response.status === 403) {
            navigationRef.current?.dispatch(
                CommonActions.navigate("User", {status:true})
            )
        }
        return Promise.reject(err)
    }
)