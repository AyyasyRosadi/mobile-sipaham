import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Base from '../component/Base'

const Info = () => {
  return (
    <SafeAreaView>
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