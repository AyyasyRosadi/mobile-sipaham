import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
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
    const navigate = useNavigation()
    const dispatch = useDispatch()
    const route = useRoute()
    const {profile} = useSelector(state => state.santri)
    const {userAuth} = useSelector(state=>state.auth)
    useEffect(()=>{
        dispatch(profileSantri(route.params?.nuwb))
    },[])
    return (
        <SafeAreaView >
            <StatusBar style='light' backgroundColor='#806400'/>
            <View className={Platform.OS === "android" ? "mt-0" : "mt-0"}>
                <Header />
                <Headline />
                <Fitur />
            </View>
        </SafeAreaView>
    )
}

export default HomePage