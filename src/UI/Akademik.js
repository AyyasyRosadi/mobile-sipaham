import { View, Text } from 'react-native'
import React from 'react'
import Base from '../component/Base'
import { SafeAreaView } from 'react-native-safe-area-context'

const Akademik = () => {
    return (
        <SafeAreaView>
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