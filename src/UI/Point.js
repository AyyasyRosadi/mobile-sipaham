import { View, Text } from 'react-native'
import React from 'react'
import Base from '../component/Base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

const Point = () => {
    const navigate = useNavigation()
    return (
        <SafeAreaView >
            <StatusBar style='light' backgroundColor='#806400'/>
            <View>
                <Base
                    title="Asrama"
                    navigateTo="Home"
                >
                    <View>
                        <View className="flex flex-row justify-between">
                            <View onTouchStart={() => navigate.navigate("Perizinan", { nuwb: "2302382", nama: "Kadir" })} className="bg-[#6b7ced] w-[50%] py-3 items-center">
                                <Text>Perizinan</Text>
                            </View>
                            <View onTouchStart={() => navigate.navigate("Point")} className="bg-[#29368c] w-[50%] py-3 items-center">
                                <Text className="text-white">Point Santri</Text>
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

export default Point