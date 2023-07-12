import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Base from '../component/Base'
import { StatusBar } from 'expo-status-bar'

const Info = () => {
    return (
        <SafeAreaView>
            <StatusBar style='light' backgroundColor='#806400' />
            <View>
                <Base
                    title="Informasi"
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

export default Info