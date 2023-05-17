import React, { useState } from 'react'
import { View, Text, Image, Pressable, Button } from 'react-native'
import santri from "../../assets/santri.png";
import spp from "../../assets/spp.png";
import akademik from "../../assets/akademik.png";
import tahfidz from "../../assets/tahfidz.png";
import tabungan from "../../assets/tabungan.png";
import point from "../../assets/point.png";
import { useNavigation } from '@react-navigation/native';

function Fitur() {
    const navigate = useNavigation()
    return (
        <View className="flex flex-col h-[50%] py-3 px-4 bg-white space-y-4">
            <View className="flex flex-row justify-start ml-2 space-x-8">
                <View>
                    <View onTouchStart={() => navigate.navigate("Info",{nuwb:"20102019"})} className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2">
                        <Image source={santri} className="w-9 h-9 mx-auto my-auto" />
                    </View >
                    <Text className="text-end mx-auto">Info Santri</Text>
                </View>
                <View>
                    <View className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2">
                        <Image source={spp} className="w-10 h-10 mx-auto my-auto" />
                    </View>
                    <Text className="text-center mx-auto text-[13px]">Spp</Text>
                </View>
                <View>
                    <View className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2">
                        <Image source={akademik} className="w-9 h-9 mx-auto my-auto" />
                    </View>
                    <Text className="text-end mx-auto">Akademik</Text>
                </View>
                <View>
                    <View className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2">
                        <Image source={tahfidz} className="w-9 h-9 mx-auto my-auto" />
                    </View>
                    <Text className="text-end mx-auto">Tahfidz</Text>
                </View>
            </View>
            <View className="flex flex-row justify-start ml-2 space-x-8">
                <View>
                    <View className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2">
                        <Image source={tabungan} className="w-9 h-9 mx-auto my-auto" />
                    </View>
                    <Text className="text-end mx-auto">Tabungan</Text>
                </View>
                <View>
                    <View className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2">
                        <Image source={point} className="w-9 h-9 mx-auto my-auto" />
                    </View>
                    <Text className="text-end mx-auto">Point</Text>
                </View>
            </View>

        </View >
    )
}

export default Fitur