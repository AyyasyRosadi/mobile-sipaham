 import { Text, View, Button, SafeAreaView, ImageBackground } from 'react-native';
import Homepage from './src/UI/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hello from './src/UI/Hello';
import InfoSantri from './src/UI/InfoSantri';


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Homepage} options={{contentStyle:{backgroundColor:"#c9a118"}}} />
        <Stack.Screen name="Info" component={InfoSantri} options={{contentStyle:{backgroundColor:"#c9a118"}}} />
        <Stack.Screen name="Hello" component={Hello} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

