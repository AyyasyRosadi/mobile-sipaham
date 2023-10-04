import api from "./http";

export const ApiAuth = {
    login : (data) =>{
        return api.post(`/user/login`,data)
    },
    refreshToken : () =>{
        return api.get("/user/refreshtoken")
    },
    refreshUser : () =>{
        return api.get(`/santri/renew/data`)
    },
    putPassword : (data)=>{
        return api.post(`/user/reset/password`,data)
    }

}