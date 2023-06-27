import { View, Text } from 'react-native'
import React from 'react'
import Base from '../component/Base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Point = () => {
    const navigate = useNavigation()
    return (
        <SafeAreaView >
            <View>
                <Base
                    title="Asrama"
                    navigateTo="Home"
                >
                    <View>
                        <View className="flex flex-row justify-between">
                            <View onTouchStart={() => navigate.navigate("Perizinan", { nuwb: "2302382", nama: "Kadir" })} className="bg-[#f4ecd0] w-[50%] py-3 items-center">
                                <Text>Perizinan</Text>
                            </View>
                            <View onTouchStart={() => navigate.navigate("Point")} className="bg-[#e4d08b] w-[50%] py-3 items-center">
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

export default Point