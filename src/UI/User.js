import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import Loader from '../component/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { authAction } from '../store/slice/auth'
import { isRefreshToken, isRefreshUser } from '../store/actions/auth'
import { StatusBar } from 'expo-status-bar'
import {useNetInfo} from "@react-native-community/netinfo"
import { title } from '../helper/Title'

const User = ({navigation}) => {
    const navigate = useNavigation()
    const route = useRoute()
    const dispatch = useDispatch()
    const { userAuth, loadingAuth,isRefresh,checkToken } = useSelector(state => state.auth)
    const [santri, setSantri] = useState([])
    useEffect(() => {
        const getStore = async () => {
            if(route.params?.status){
                dispatch(isRefreshToken())
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
        const focusHandler = navigation.addListener("focus",async() => {
            await getStore()
        })
        return focusHandler
    }, [route.params?.status,navigation])
    useEffect(()=>{
        const change = async()=>{
            await AsyncStorage.setItem("userToken",JSON.stringify(userAuth))
        }
        const remove = async()=>{
            await AsyncStorage.removeItem("userToken")
        }
        if(userAuth !== null){
            if(Object.keys(userAuth)?.length !== 0 && isRefresh){
                change()
            }else if(!isRefresh){
                remove()
            }    
        }
        if(checkToken){
            dispatch(isRefreshUser())
            dispatch(authAction.clearCheck())
        }
    },[userAuth,checkToken])
    return (
        // <SafeAreaView>
        <View className="h-[120vh]">
            <StatusBar style='light'/>
            <Loader show={loadingAuth} />
            <View className="bg-white w-screen h-[110vh] flex flex-col justify-center items-center space-y-3">
                <Text className="text-lg">Pilih Santri</Text>
                {santri !== null ? santri?.map((d, id) => (
                    <View onTouchStart={() => navigate.navigate("Home", { nuwb: d.nuwb })} key={id} className="bg-yellow-400 w-[70vw] p-3 rounded-md gap-1">
                        <Text>Nuwb : {d.nuwb}</Text>
                        <Text>Nama : {title(d.nama)}</Text>
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