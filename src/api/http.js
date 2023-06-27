import axios from "axios";
// import { store } from "../store";

const api = axios.create({
    baseURL: "http://192.168.1.6:8689"
    // baseURL:"http://192.168.1.20:8689"
})
export default api

let store;
export const injectStore = (_store) => {
  store = _store
}
// console.log(store)

api.interceptors.request.use((req)=>{
    if(!req.url.includes("/user/login")){
        req.headers = {
            Authorization : `Bearer ${store.getState().auth.userAuth.token}`
        }
    }
    return req;
})