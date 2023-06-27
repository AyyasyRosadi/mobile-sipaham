import { View, Text, Image, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import arrow from "../assets/arrow.png"

const Base = (props) => {
    const navigate = useNavigation()
    return (
        <View>
            <View className=" flex flex-row mt-2">
                <View onTouchStart={() => navigate.navigate(props.navigateTo)} className="w-12">
                    <Image on source={arrow} className="w-5 h-5 ml-4 my-auto rounded-full" />
                </View>
                <Text className="my-auto text-2xl">{props.title}</Text>
            </View>
            <View className={`${Platform.OS === "android" ? "mt-2" : "mt-0"} bg-white h-screen`}>
                {props.children}
            </View>
        </View>
    )
}

export default Base