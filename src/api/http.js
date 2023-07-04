import axios from "axios";
import { navigationRef } from "../UI/Route";
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
    // baseURL: "http://192.168.1.6:8689"
    baseURL:"http://192.168.1.20:8689"
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
    return req;
})
api.interceptors.response.use(
    (res) => {
        return res
    },
    async(err) => {
        if (err.response.status === 401 || err.response.status === 403) {
            console.log("Hey Kamu sudah keluar")
            await AsyncStorage.removeItem("userToken")
            navigationRef.current?.dispatch(
                CommonActions.navigate("Login")
            )
        }
        return Promise.reject(err)
    }
)