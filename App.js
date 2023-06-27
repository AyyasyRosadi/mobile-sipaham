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
import { Provider, useSelector } from 'react-redux';
import { store } from './src/store';
import Login from './src/UI/Login';
import User from './src/UI/User';
import { injectStore } from './src/api/http';
injectStore(store)

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={Login} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
          <Stack.Screen name='User' component={User} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
          <Stack.Screen name="Home" component={Homepage} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
          <Stack.Screen name="Info" component={InfoSantri} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
          <Stack.Screen name='Pembayaran' component={Pembayaran} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
          <Stack.Screen name='TopUp' component={TopUp} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
          <Stack.Screen name="Perizinan" component={Perizininan} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
          <Stack.Screen name="Point" component={Point} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
          <Stack.Screen name="Akademik" component={Akademik} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
          <Stack.Screen name="Tahfidz" component={Tahfidz} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
          <Stack.Screen name="Informasi" component={Info} options={{ contentStyle: { backgroundColor: "#c9a118" } }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

