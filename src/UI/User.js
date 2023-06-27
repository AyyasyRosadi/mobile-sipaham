import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import Loader from '../component/Loader'

const User = () => {
    const navigate = useNavigation()
    const { userAuth,loadingAuth } = useSelector(state => state.auth)
    useEffect(() => {
        if (userAuth.santri?.length < 2) {
            navigate.navigate("Home", { nuwb: userAuth.santri[0]?.nuwb })
        }
    }, [userAuth?.santri])
    return (
        // <SafeAreaView>
            <View className="h-[120vh]">
                <Loader show={loadingAuth}/>
                <View className="bg-white w-screen h-[110vh] flex flex-col justify-center items-center space-y-3">
                    <Text className="text-lg">Pilih Santri</Text>
                    {userAuth?.santri.map((d, id) => (
                        <View onTouchStart={()=>navigate.navigate("Home",{nuwb:d.nuwb})} key={id} className="bg-yellow-400 w-[70vw] p-3 rounded-md gap-1">
                            <Text>Nuwb : {d.nuwb}</Text>
                            <Text>Nama : {d.nama}</Text>
                        </View>
                    ))}
                </View>
            </View>
        // </SafeAreaView>
    )
}

export default User