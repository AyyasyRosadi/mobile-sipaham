import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import close from "../../assets/close.png"
import { getPembayaran, pembayaranSpp } from '../../store/actions/pembayaran'
import { useDispatch, useSelector } from 'react-redux'
import { profileSantri } from '../../store/actions/santri'
import { currency } from '../../helper/Currency'
// import { currency } from '../../helper/Currency'

const SetPayment = (props) => {
    const [show, setShow] = useState(props.show)
    const dispatch = useDispatch()
    const { profile } = useSelector(state => state.santri)
    const { onePembayaran } = useSelector(state => state.pembayaran)
    useEffect(() => {
        setShow(props.show)
        dispatch(profileSantri(profile.nuwb))
        dispatch(getPembayaran(profile.nuwb))
    }, [props.show])
    return (
        <View className={`absolute right-0 w-[100vw] bg-slate-200 top-0 h-[100vh]  ${show ? "block opacity-90" : "hidden"}`}>
            {/* <View className={`bg-black h-[72vh] w-full -top-[70vh] ${show ? "visible opacity-70" : "hidden opacity-50"}`}>
            </View> */}
            <View className={`h-[90vh] relative`}>
                <View className={`bg-white w-[100vw] absolute bottom-0 p-4 opacity-100`}>
                    <View className="flex justify-between flex-row">
                        <Text className="text-[23px] font-semibold my-autoe">Lakukan Pembayaran</Text>
                        <View onTouchStart={() => props.close(false)}><Image source={close} className="w-6 h-6" /></View>
                    </View>
                    <View className="w-full bg-slate-400 h-[1px] mt-2"></View>
                    <View className="w-full my-1 p-1 flex flex-col space-y-3">
                        <Text className="text-lg">Sisa Saldo : {profile?.saldo !== null ? currency(profile?.saldo?.nominal) : "0"}</Text>
                        <Text className="text-lg uppercase">Pembayaran Spp Atas Nama {profile?.nama} Untuk Bulan {onePembayaran?.loan?.bulan} Dengan Jumlah {onePembayaran.loan?.jumlah}</Text>
                    </View>
                    <Pressable onTouchStart={props.aprove} className="bg-[#29368c] w-full rounded-lg">
                        <Text className="mx-auto py-4 text-white">Bayar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
export default SetPayment