import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Loader from "../component/Loader";
import { StatusBar } from "expo-status-bar";
import { title } from "../helper/title";
import setStorage from "../helper/setStorage";
import removeStorage from "../helper/removeStorage";
import getStorage from "../helper/getStorage";
import useRefreshToken from "../hooks/react-query/useRefreshToken";
import useRefreshUser from "../hooks/react-query/useRefreshUser";
import useSetHeader from "../hooks/useSetHeader";
import { useTrigger } from "../provider/Context";

const User = ({ navigation }) => {
  const { triggerEffect } = useTrigger();
  const navigate = useNavigation();
  const route = useRoute();
  const [userAuth, setuserAuth] = useState({});
  const [santri, setSantri] = useState([]);
  const refreshToken = useRefreshToken();
  const refreshUser = useRefreshUser();
  useEffect(() => {
    const getStore = async () => {
      if (route.params?.status) {
        refreshToken.mutate(userAuth?.refrestToken);
      } else {
        const item = await getStorage("userToken");
        setuserAuth(JSON.parse(item));
        setSantri(JSON.parse(item)?.santri);
        useSetHeader(JSON.parse(item)?.token);
        if (JSON.parse(item)?.santri < 2) {
          navigate.navigate("Home", {
            nuwb: JSON.parse(item)?.santri[0]?.nuwb,
          });
        }
      }
    };
    getStore();
    const focusHandler = navigation.addListener("focus", async () => {
      await getStore();
    });
    return focusHandler;
  }, [route.params?.status, navigation]);
  useEffect(() => {
    // if (userAuth !== null) {
    //   if (Object.keys(userAuth)?.length !== 0 && refreshToken.status === 200) {
    //     setStorage("userToken", userAuth);
    //   } else if (!refreshToken?.status === 200) {
    //     removeStorage("userToken");
    //   }
    // }
    console.log(refreshToken.status);
    if (refreshToken.status === "success") {
      userAuth.token = refreshToken?.data?.data?.token;
      setStorage("userToken", userAuth);
      useSetHeader(refreshToken?.data?.data?.token);
      refreshUser.mutate();
    } else if (refreshToken.status === "error") {
      removeStorage("userToken");
      triggerEffect();
    }
  }, [userAuth, refreshToken.status]);
  return (
    <View className="h-[120vh]">
      <StatusBar style="light" />
      <Loader show={refreshToken?.isPending || refreshUser.isPending} />
      <View className="bg-white w-screen h-[110vh] flex flex-col justify-center items-center space-y-3">
        <Text className="text-lg">Pilih Santri</Text>
        {santri !== null ? (
          santri?.map((d, id) => (
            <View
              onTouchStart={() => navigate.navigate("Home", { nuwb: d.nuwb })}
              key={id}
              className="bg-yellow-400 w-[70vw] p-3 rounded-md gap-1"
            >
              <Text>Nuwb : {d.nuwb}</Text>
              <Text>Nama : {title(d.nama)}</Text>
            </View>
          ))
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default User;
