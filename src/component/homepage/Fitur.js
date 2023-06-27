import React, { useState } from 'react'
import { View, Text, Image, Pressable, Button } from 'react-native'
import santri from "../../assets/santri.png";
import spp from "../../assets/spp.png";
import akademik from "../../assets/akademik.png";
import tahfidz from "../../assets/tahfidz.png";
import asrama from "../../assets/asrama.png"
import informasi from "../../assets/information.png"
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

function Fitur() {
    const {profile} = useSelector(state=>state.santri)
    const navigate = useNavigation()
    return (
        <View className="flex flex-col h-[50%] py-3 px-4 bg-white space-y-4">
            <View className="flex flex-row justify-start mx-2 space-x-8">
                <View>
                    <View onTouchStart={() => navigate.navigate("Info",{nuwb:profile.nuwb})} className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2">
                        <Image source={santri} className="w-8 h-8 mx-auto my-auto" />
                    </View >
                    <Text className="text-end mx-auto">Info Santri</Text>
                </View>
                <View>
                    <View onTouchStart={() => navigate.navigate("Pembayaran",{nuwb:profile.nuwb})} className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2">
                        <Image source={spp} className="w-10 h-10 mx-auto my-auto" />
                    </View>
                    <Text className="text-center mx-auto text-[13px]">Pembayaran</Text>
                </View>
                <View>
                    <View onTouchStart={()=>navigate.navigate("Akademik")} className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2">
                        <Image source={akademik} className="w-10 h-10 mx-auto my-auto" />
                    </View>
                    <Text className="text-end mx-auto">Akademik</Text>
                </View>
                <View>
                    <View onTouchStart={()=>navigate.navigate("Tahfidz")} className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2">
                        <Image source={tahfidz} className="w-9 h-9 mx-auto my-auto" />
                    </View>
                    <Text className="text-end mx-auto">Tahfidz</Text>
                </View>
            </View>
            <View className="flex flex-row justify-start mx-2 space-x-8">
                <View>
                    <View onTouchStart={()=>navigate.navigate("Perizinan")} className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2">
                        <Image source={asrama} className="w-10 h-10 mx-auto my-auto" />
                    </View>
                    <Text className="text-end mx-auto">Asrama</Text>
                </View>
                <View>
                    <View onTouchStart={()=>navigate.navigate("Informasi")} className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2">
                        <Image source={informasi} className="w-9 h-9 mx-auto my-auto" />
                    </View>
                    <Text className="text-end mx-auto">Informasi</Text>
                </View>
            </View>
        </View >
    )
}

export default Fitur