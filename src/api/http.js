import axios from "axios";
import { navigationRef } from "./util";
import { CommonActions } from "@react-navigation/native";

const api = axios.create({
    baseURL: "http://192.168.1.12:8689"
    // baseURL: "https://sipahamv2-mobile.ponpesabuhurairah.id"
})

export default api

api.interceptors.response.use(
    (res) => {
        return res
    },
    async (err) => {
        if (err.response.status === 403) {
            navigationRef.current?.dispatch(
                CommonActions.navigate("User", { status: true })
            )
        }
        return Promise.reject(err)
    }
)