import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import Akademik from "./Akademik";
import HomePage from "./HomePage";
import Info from "./Info";
import InfoSantri from "./InfoSantri";
import Login from "./Login";
import Pembayaran from "./Pembayaran";
import Perizinan from "./Perizinan";
import Point from "./Point";
import Tahfidz from "./Tahfidz";
import TopUp from "./TopUp";
import User from "./User";
import { navigationRef } from "../api/util";
import Prestasi from "./Prestasi";
import Pengaturan from "./Pengaturan";
import getStorage from "../helper/getStorage";
import { useTrigger } from "../provider/Context";

export const checkToken = async () => {
  try {
    const res = await getStorage("userToken");
    if (res === null || Object.keys(JSON.parse(res)).length === 0) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    return err;
  }
};

function Route() {
  const { triggerValue } = useTrigger();
  const Stack = createNativeStackNavigator();
  const [checkAuthentication, setCheckAuthentication] = useState(false);
  const authenctication = async () => {
    const validate = await checkToken();
    setCheckAuthentication(validate);
  };
  useEffect(() => {
    authenctication();
  }, [checkAuthentication, authenctication, triggerValue]);
  return (
    <NavigationContainer ref={navigationRef}>
      {checkAuthentication ? (
        <Stack.Navigator
          initialRouteName="User"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="User"
            component={User}
            options={{ contentStyle: { backgroundColor: "#ffffff" } }}
          />
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ contentStyle: { backgroundColor: "#ffffff" } }}
          />
          <Stack.Screen
            name="Info"
            component={InfoSantri}
            options={{ contentStyle: { backgroundColor: "#ffffff" } }}
          />
          <Stack.Screen
            name="Pembayaran"
            component={Pembayaran}
            options={{ contentStyle: { backgroundColor: "#ffffff" } }}
          />
          <Stack.Screen
            name="TopUp"
            component={TopUp}
            options={{ contentStyle: { backgroundColor: "#ffffff" } }}
          />
          <Stack.Screen
            name="Perizinan"
            component={Perizinan}
            options={{ contentStyle: { backgroundColor: "#ffffff" } }}
          />
          <Stack.Screen
            name="Point"
            component={Point}
            options={{ contentStyle: { backgroundColor: "#ffffff" } }}
          />
          <Stack.Screen
            name="Prestasi"
            component={Prestasi}
            options={{ contentStyle: { backgroundColor: "#ffffff" } }}
          />
          <Stack.Screen
            name="Akademik"
            component={Akademik}
            options={{ contentStyle: { backgroundColor: "#ffffff" } }}
          />
          <Stack.Screen
            name="Tahfidz"
            component={Tahfidz}
            options={{ contentStyle: { backgroundColor: "#ffffff" } }}
          />
          <Stack.Screen
            name="Informasi"
            component={Info}
            options={{ contentStyle: { backgroundColor: "#ffffff" } }}
          />
          <Stack.Screen
            name="Pengaturan"
            component={Pengaturan}
            options={{ contentStyle: { backgroundColor: "#ffffff" } }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ contentStyle: { backgroundColor: "#ffffff" } }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Route;
