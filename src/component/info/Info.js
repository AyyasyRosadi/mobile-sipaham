import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import InputField from '../InputField'

const Info = () => {
    const [nama,setNama] = useState("Abdul Kadir")
    const [kelas,setKelas] = useState("12")
    const [ruang,setRuang] = useState("Bahasa B")
    const [lembaga,setLembaga] = useState("MA Plus Abu Hurairah")
    const [wali,setWali] = useState("Kadir Salam")
    return (
        <View className="bg-white h-full">
            <View className="p-4">
                <Text className="text-2xl font-semibold">Info Santri</Text>
            </View>
            <View className="px-5">
                <InputField title="Nama" set={setNama} value={nama}/>
                <InputField title="Kelas" set={setKelas} value={kelas}/>
                <InputField title="Ruang" set={setRuang} value={ruang}/>
                <InputField title="Lembaga" set={setLembaga} value={lembaga}/>
                <InputField title="Wali" set={setWali} value={wali}/>
            </View>
        </View>
    )
}

export default Info