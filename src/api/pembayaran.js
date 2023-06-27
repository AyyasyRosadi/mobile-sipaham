import api from "./http";


export const ApiPembayaran = {
    getData : (nuwb) =>{
        return api.get(`/spp/${nuwb}`)
    },
    postPembayaran : (nuwb) =>{
        return api.get(`/spp/pembayaran/${nuwb}`)
    },
    history : (nuwb) =>{
        return api.get(`/spp/log/${nuwb}`)
    },
    historyTopUp : (nuwb) =>{
        return api.get(`/spp/topup/log/${nuwb}`)
    },
    topUp : (data) =>{
        return api.post(`/spp/topup`,data)
    }
}
