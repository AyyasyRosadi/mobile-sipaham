import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import Fitur from '../component/homepage/Fitur'
import Header from '../component/homepage/Header'
import Headline from '../component/homepage/Headline'
import { profileSantri } from '../store/actions/santri'

function HomePage({navigation}) {
    const dispatch = useDispatch()
    const route = useRoute()
    const {profile} = useSelector(state => state.santri)
    useEffect(()=>{
        const handler = navigation.addListener("focus",()=>{
            dispatch(profileSantri(route.params?.nuwb))
        })
        return handler
    },[navigation])
    useEffect(()=>{
        dispatch(profileSantri(route.params?.nuwb))
    },[route])
    // console.log(AsyncStorage.getItem("user"))
    return (
        <SafeAreaView>
            <View className={Platform.OS === "android" ? "mt-0" : "mt-0"}>
                <Header />
                <Headline />
                <Fitur />
            </View>
        </SafeAreaView>
    )
}

export default HomePage