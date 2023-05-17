import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Platform } from 'react-native'
import Fitur from '../component/homepage/Fitur'
import Header from '../component/homepage/Header'
import Headline from '../component/homepage/Headline'

function HomePage() {
    return (
        <SafeAreaView>
            <View className={Platform.OS === "android" ? "mt-8" : "mt-0"}>
                <Header />
                <Headline />
                <Fitur />
            </View>
        </SafeAreaView>
    )
}

export default HomePage