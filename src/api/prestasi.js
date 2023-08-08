import api from "./http"


export const ApiPrestasi = {
    get : (nuwb)=>{
        return api.get(`/perizinan/prestasi/${nuwb}`)
    }
}