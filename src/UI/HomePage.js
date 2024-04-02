import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Fitur from "../component/homepage/Fitur";
import Header from "../component/homepage/Header";
import Headline from "../component/homepage/Headline";
import Connection from "../component/Connection";
import { useNetInfo } from "@react-native-community/netinfo";
import Loader from "../component/Loader";
import useGetProfile from "../hooks/react-query/useGetProfile";

function HomePage({ navigation }) {
  const netInfo = useNetInfo();
  const route = useRoute();
  const { data, isLoading } = useGetProfile(route?.params?.nuwb, false);
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#806400" />
      <Loader show={isLoading} />
      <View className={Platform.OS === "android" ? "mt-0" : "mt-0"}>
        <Connection show={!netInfo?.isConnected} msg="No Connection" />
        <Header profile={data?.data?.santri} />
        <Headline img={data?.data?.billboard} />
        <Fitur profile={data?.data?.santri} />
      </View>
    </SafeAreaView>
  );
}

export default HomePage;
