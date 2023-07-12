import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Base from '../component/Base'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

const Perizininan = () => {
    const navigate = useNavigation()
    return (
        <SafeAreaView >
            <StatusBar style='light' />
            <View>
                <Base
                    title="Asrama"
                    navigateTo="Home"
                >
                    <View>
                        <View className="flex flex-row justify-between">
                            <View onTouchStart={() => navigate.navigate("Perizinan")} className="bg-[#29368c] w-[50%] py-3 items-center">
                                <Text className="text-white">Perizinan</Text>
                            </View>
                            <View onTouchStart={() => navigate.navigate("Point")} className="bg-[#6b7ced] w-[50%] py-3 items-center">
                                <Text>Point Santri</Text>
                            </View>
                        </View>
                        <View className="flex justify-center flex-row items-center h-full">
                            <Text className="text-2xl">Under Maintenance</Text>
                        </View>
                    </View>
                </Base>
            </View>
        </SafeAreaView >
    )
}

export default Perizininan