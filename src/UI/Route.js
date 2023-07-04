import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Akademik from './Akademik'
import HomePage from './HomePage'
import Info from './Info'
import InfoSantri from './InfoSantri'
import Login from './Login'
import Pembayaran from './Pembayaran'
import Perizininan from './Perizininan'
import Point from './Point'
import Tahfidz from './Tahfidz'
import TopUp from './TopUp'
import User from './User'

export const checkToken = async () => {
    try {
        const res = await AsyncStorage.getItem("userToken")
        if (res === null || Object.keys(JSON.parse(res)).length === 0) {
            return false
        }
        else {
            return true
        }

    }
    catch(err){
        console.log(err)
        return err
    }
}
export const navigationRef = React.createRef()

function Route() {
    const Stack = createNativeStackNavigator()
    const { userAuth, loadingAuth } = useSelector(state => state.auth)
    const [check, setCheck] = useState(false)
    const auth = async () => {
        const validate = await checkToken()
        setCheck(validate)
    }
    useEffect(() => {
        auth()
    }, [check, loadingAuth, auth])
    return (
        <NavigationContainer ref={navigationRef}>
            {check ?
                <Stack.Navigator initialRouteName='User' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='User' component={User} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
                    <Stack.Screen name="Home" component={HomePage} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
                    <Stack.Screen name="Info" component={InfoSantri} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
                    <Stack.Screen name='Pembayaran' component={Pembayaran} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
                    <Stack.Screen name='TopUp' component={TopUp} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
                    <Stack.Screen name="Perizinan" component={Perizininan} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
                    <Stack.Screen name="Point" component={Point} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
                    <Stack.Screen name="Akademik" component={Akademik} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
                    <Stack.Screen name="Tahfidz" component={Tahfidz} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
                    <Stack.Screen name="Informasi" component={Info} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
                </Stack.Navigator>
                :
                <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Login' component={Login} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    )
}

export default Route