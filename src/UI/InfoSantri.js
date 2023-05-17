import { View, Text } from 'react-native'
import React from 'react'
import { Platform } from 'react-native'
import { useRoute} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../component/homepage/Header'
import Info from '../component/info/Info'

const InfoSantri = () => {
    const route = useRoute()
    const { nuwb } = route.params;
    return (
        <SafeAreaView>
            <View className={Platform.OS === "android" ? "mt-1" : "mt-0"}>
                <Header />
                <Info/>
            </View>
        </SafeAreaView>
    )
}

export default InfoSantri