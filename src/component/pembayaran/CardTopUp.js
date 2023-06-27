import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import InputField from '../InputField'
import TextRow from './TextRow'
import topUp from "../../assets/top-up.png"


const CardTopUp = (props) => {
    return (
        <View className="border border-slate-800 m-3 py-3 px-2 rounded-xl">
            <View className="flex flex-row justify-between">
                <Text className="text-lg"> Top Up Saldo</Text>
                <Image source={topUp} className="w-8 h-8 my-auto mr-2"/>
            </View>
            <View className="w-full h-[1px] bg-slate-600 mt-2 mb-1"></View>
            <View className="">
                <View className="flex flex-col">
                    <TextRow title="Saldo Saat Ini" value={props.saldo} />
                    <TouchableOpacity onPress={props.press}>
                        <TextRow title="No Rek" value={props.no_rek} />
                    </TouchableOpacity>
                </View>
                <View className="mt-2">
                    <InputField title="Masukkan Jumlah Top Up" color="bg-slate-200 px-2" keyboard="number-pad" value={props.value} set={props.setTopUp} />
                    <View onTouchStart={()=>props.set(true)} className="bg-[#c9a118] w-20 rounded-xl"><Text className="mx-auto py-2 ">Top Up</Text></View>
                </View>
            </View>
        </View>

    )
}

export default CardTopUp