import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import InputField from '../InputField'

const Info = (props) => {
    return (
        <View className="bg-white h-full">
            <View className="p-4">
                <Text className="text-2xl font-semibold">Info Santri</Text>
            </View>
            <View className="px-5">
                <InputField title="Nuwb" value={props.nuwb} readOnly={false} color="bg-slate-100 px-2" />
                <InputField title="Nama" value={props.nama} readOnly={false} color="bg-slate-100 px-2" />
                <InputField title="Kelas" value={props.kelas} readOnly={false} color="bg-slate-100 px-2" />
                <InputField title="Ruang" value={props.ruang} readOnly={false} color="bg-slate-100 px-2" />
                <InputField title="Lembaga" value={props.lembaga} readOnly={false} color="bg-slate-100 px-2" />
                <InputField title="Wali" value={props.wali} readOnly={false} color="bg-slate-100 px-2" />
            </View>
        </View>
    )
}

export default Info