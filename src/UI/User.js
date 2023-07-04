import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import Loader from '../component/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { authAction } from '../store/slice/auth'

const User = () => {
    const navigate = useNavigation()
    const route = useRoute()
    const dispatch = useDispatch()
    const { userAuth, loadingAuth } = useSelector(state => state.auth)
    const [santri, setSantri] = useState([])
    useEffect(() => {
        console.log(route.params?.status)
        const getStore = async () => {
            console.log(route.params?.status)
            if(route.params?.status){
                await AsyncStorage.removeItem("userToken")
                dispatch(authAction.clearAuth())
            }else{
            const item = await AsyncStorage.getItem("userToken")
            dispatch(authAction.setAuth(JSON.parse(item)))
            setSantri(JSON.parse(item)?.santri)
            if (JSON.parse(item)?.santri < 2) {
                navigate.navigate("Home", { nuwb: JSON.parse(item)?.santri[0]?.nuwb })
            }
        }
        }
        getStore()
    }, [route.params?.status])
    return (
        // <SafeAreaView>
        <View className="h-[120vh]">
            <Loader show={loadingAuth} />
            <View className="bg-white w-screen h-[110vh] flex flex-col justify-center items-center space-y-3">
                <Text className="text-lg">Pilih Santri</Text>
                {santri !== null ? santri?.map((d, id) => (
                    <View onTouchStart={() => navigate.navigate("Home", { nuwb: d.nuwb })} key={id} className="bg-yellow-400 w-[70vw] p-3 rounded-md gap-1">
                        <Text>Nuwb : {d.nuwb}</Text>
                        <Text>Nama : {d.nama}</Text>
                    </View>
                ))
                :
                <></>
                }
            </View>
        </View>
        // </SafeAreaView>
    )
}

export default User