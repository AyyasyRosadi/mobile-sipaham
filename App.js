import { Text, View, Button, SafeAreaView, ImageBackground } from 'react-native';
import Homepage from './src/UI/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoSantri from './src/UI/InfoSantri';
import Pembayaran from './src/UI/Pembayaran';
import TopUp from './src/UI/TopUp';
import Perizininan from './src/UI/Perizininan';
import Point from './src/UI/Point';
import Akademik from './src/UI/Akademik';
import Tahfidz from './src/UI/Tahfidz';
import Info from './src/UI/Info';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/store';
import Login from './src/UI/Login';
import User from './src/UI/User';
import { injectStore } from './src/api/http';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authAction } from './src/store/slice/auth';
import Route from './src/UI/Route';
injectStore(store)

// export const checkLogin = (val = false) =>{
//   return val 
// }

export default function App() {
  // const check = checkLogin()
  // const [initialRoute, setInitialRoute] = useState("Login")
  // const [token, setToken] = useState(false)
  // const auth = async () => {
  //   const res = await AsyncStorage.getItem("userToken")
  //   if (res === null || Object.keys(JSON.parse(res)).length === 0) {
  //     console.log(Object.keys(JSON.parse(res)).length)
  //     setInitialRoute("Login")
  //   }
  //   else {
  //     // console.log(Object.keys(JSON.parse(res).length))
  //     setInitialRoute("User")
  //   }
  // }
  // useEffect(() => {
  //   auth()
  // }, [])
  // const storage = async () => {
  //   const userToken = await AsyncStorage.getItem("userToken")
  //   console.log(userToken)
  //   if (Object.keys(JSON.parse(userToken)).length !== 0) {
  //     setToken(true)
  //   }
  //   else {
  //     setToken(false)
  //   }
  // }
  // useEffect(() => {
  //   storage()
  // }, [])
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  )
}

