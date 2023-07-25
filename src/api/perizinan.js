import api from "./http";

export const ApiPerizinan = {
    get:(nuwb)=>{
        return api.get(`/perizinan/perizinan-santri/${nuwb}`)
    }
}
