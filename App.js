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

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  )
}

