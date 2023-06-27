import { View, Text, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import close from "../../assets/close.png"
import { currency } from '../../helper/Currency'


const SetTopUp = (props) => {
    const { profile } = useSelector(state => state.santri)
    const [show, setShow] = useState(props.show)
    const { historyTopup } = useSelector(state => state.pembayaran)
    useEffect(() => {
        setShow(props.show)
    }, [props.show])
    return (
        <View className={`absolute right-0 w-[100vw] bg-black top-0 h-[95vh]  ${show ? "block opacity-90" : "hidden"}`}>
            {/* <View className={`bg-black h-[72vh] w-full -top-[70vh] ${show ? "visible opacity-70" : "hidden opacity-50"}`}>
            </View> */}
            <View className="h-[94vh] relative">
                <View className={`bg-white w-[100vw] absolute bottom-0 p-4 opacity-100`}>
                    <View className="flex justify-between flex-row">
                        <Text className="text-[23px] font-semibold my-autoe">Top Up</Text>
                        <View onTouchStart={() => props.close(false)}><Image source={close} className="w-6 h-6" /></View>
                    </View>
                    <View className="w-full bg-slate-400 h-[1px] mt-2"></View>
                    <View className="w-full h-[12vh] my-1 p-1 flex flex-col space-y-1">
                        <Text className="text-lg">Sisa Saldo : {profile.saldo !== null ? currency(profile.saldo.nominal) : "0"}</Text>
                        <Text className="text-lg">Anda Akan Melakukan Top Up Sejumlah Rp {props.val}</Text>
                    </View>
                    <Pressable onTouchStart={props.aprove} className="bg-yellow-500 w-full rounded-lg">
                        <Text className="mx-auto py-4">Lanjut</Text>
                    </Pressable>

                </View>
            </View>
        </View>
    )
}

export default SetTopUp