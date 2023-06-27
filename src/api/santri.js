import api from "./http";

export const ApiSantri = {
    getProfile : (nuwb) =>{
        return api.get(`/santri/${nuwb}`)
    }
}