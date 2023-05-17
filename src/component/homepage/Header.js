import React, { useState } from 'react'
import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native'
import dots from "../../assets/dots.png";
import account from "../../assets/switch.png"
import out from "../../assets/logout.png"
import logo from "../../assets/ponpes.png"
import bg from "../../assets/bgHead.png"

function Header() {
    const [nuwb, setNuwb] = useState(29819283)
    const [dropMenu, setDropMenu] = useState(false)
    const [nama,setNama] = useState("Ayyasy")
    return (
        <ImageBackground source={bg} resizeMode="cover" className={`h-[23vh] pb-2 px-4 flex flex-col justify-between`}>
            <View className="h-[49%]">
                <View className="flex flex-row justify-between my-auto">
                    <View className="ml-1">
                        <Image source={logo} className="w-16 h-16"/>
                    </View>
                    <View className="flex flex-row my-auto">
                        <View className="mr-2 gap-1">
                            <Text className="text-[15px] text-gray-900">Ahlan Wasahlan</Text>
                            <Text className="text-[15px] text-gray-900 font-semibold">{nama}</Text>
                        </View>
                        <View className="relative">
                            <Image onTouchStart={() => setDropMenu(!dropMenu)} className="w-7 h-7 my-auto bg-slate-100 rounded-full" source={dots} />
                            <View className={`bg-green-400 h-[10rem] absolute w-32 -left-24 rounded-lg ${dropMenu ? "block -bottom-[77px]" : "hidden -bottom-0"} transition-color ease-in-out duration-1000`}>
                                <View className="bg-white px-1 py-2 rounded-t-lg focus:bg-yellow-500 flex flex-row space-x-1">
                                    <Image source={account} className="w-5 h-5" />
                                    <Text className="my-auto">Ganti Akun</Text>
                                </View>
                                <View className="bg-white px-1 py-2 rounded-b-lg flex flex-row space-x-2">
                                    <Image source={out} className="w-5 h-5" />
                                    <Text>Keluar</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className=" h-[49%]">
                <View className="p-2 mt-2">
                    <Text className="text-lg font-semibold text-gray-700">NUWB : {nuwb}</Text>
                </View>
            </View>
        </ImageBackground>)
}

export default Header