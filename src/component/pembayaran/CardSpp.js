import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TextRow from './TextRow'
import operation from "../../assets/operation.png"

const CardSpp = (props) => {
    return (
        <View className="p-4">
            <View className="flex flex-row justify-between">
                <Text className="text-slate-800 text-2xl">Informasi Spp/Ibs</Text>
                <Image source={operation} className="w-9 h-9 my-auto" />
            </View>
            <View className="w-full h-[1px] bg-slate-600 my-1"></View>
            <View className="my-auto">
                <View className="">
                    <TextRow title="Nuwb" value={props.nuwb} />
                    <TextRow title="Nama" value={props.nama} />
                    <TextRow title="Bulan" value={props.bulan} uppercase />
                    <TextRow title="Total" value={props.total} />
                    <TextRow title="Saldo" value={props.saldo} />
                    {/* <TouchableOpacity onPress={props.press}>
                        <TextRow title="No Rek" value={props.no_rek} />
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>

    )
}

export default CardSpp