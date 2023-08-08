import { View, Text, Image } from 'react-native'
import React from 'react'
import Base from '../component/Base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Maintain from '../component/Maintain'

const Akademik = () => {
    return (
        <SafeAreaView>
            <StatusBar style='light' backgroundColor='#806400' />
            <View>
                <Base
                    title="Akademik"
                    navigateTo="Home"
                >
                    <Maintain/>
                </Base>
            </View>
        </SafeAreaView>
    )
}

export default Akademik