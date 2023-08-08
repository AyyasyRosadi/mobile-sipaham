import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Base from '../component/Base'
import { StatusBar } from 'expo-status-bar'
import Maintain from '../component/Maintain'

const Info = () => {
    return (
        <SafeAreaView>
            <StatusBar style='light' backgroundColor='#806400' />
            <View>
                <Base
                    title="Informasi"
                    navigateTo="Home"
                >
                    <Maintain/>
                </Base>
            </View>
        </SafeAreaView>
    )
}

export default Info