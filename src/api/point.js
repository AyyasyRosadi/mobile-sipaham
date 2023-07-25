import api from "./http";


export const ApiPoint = {
    get:(nuwb)=>{
        return api.get(`/perizinan/point/${nuwb}`)
    }
}