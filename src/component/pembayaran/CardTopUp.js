import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import InputField from '../InputField'
import TextRow from './TextRow'
import topUp from "../../assets/top-up.png"
import { currency } from '../../helper/Currency'
import bsi from "../../assets/bsi.png"


const CardTopUp = (props) => {
    return (
        <View className="border border-slate-800 m-3 py-3 px-2 rounded-xl">
            <View className="flex flex-row justify-between">
                <Text className="text-lg"> Top Up Saldo</Text>
                <Image source={topUp} className="w-8 h-8 my-auto mr-2" />
            </View>
            <View className="w-full h-[1px] bg-slate-600 mt-2 mb-1"></View>
            <View className="">
                <View className="flex flex-col ml-1">
                    <TextRow title="Saldo anda saat ini" value={props.saldo !== undefined && props.saldo !== null && props.saldo !== "" && props.saldo > 0 ? currency(props?.saldo) : "Rp 0"} />
                    <View className="flex flex-row justify-between">
                        <TouchableOpacity onPress={props.press} className="w-[65%]">
                            <TextRow title="No VA" value={props.no_rek} />
                        </TouchableOpacity>
                        <Image source={bsi} className="w-28 h-5 mt-[7px]"></Image>
                    </View>
                </View>
                <View className="mt-1 ml-[2px]">
                    <InputField title="Masukkan jumlah top up yang anda inginkan" color="bg-slate-200 px-2" keyboard="number-pad" value={props.value} set={props.setTopUp} />
                    <Text className="text-right text-red-600 mb-1 -mt-2">min Rp 10.000 </Text>
                    <View onTouchStart={props.click} className="bg-[#29368c]  w-20 rounded-xl"><Text className="mx-auto py-2 text-white">Top Up</Text></View>
                </View>
            </View>
        </View>

    )
}

export default CardTopUp