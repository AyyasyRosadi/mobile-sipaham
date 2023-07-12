import { View, Text } from 'react-native'
import React from 'react'
import Base from '../component/Base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Akademik = () => {
    return (
        <SafeAreaView>
            <StatusBar style='light' backgroundColor='#806400' />
            <View>
                <Base
                    title="Akademik"
                    navigateTo="Home"
                >
                    <View className="flex justify-center flex-row items-center h-full">
                        <Text className="text-2xl">Under Maintenance</Text>
                    </View>
                </Base>
            </View>
        </SafeAreaView>
    )
}

export default Akademik