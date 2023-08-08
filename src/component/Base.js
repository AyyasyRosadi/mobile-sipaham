import { View, Text, Image, Platform, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import arrow from "../assets/arrow.png";

const Base = (props) => {
  const navigate = useNavigation();
  return (
    <View>
      <View className=" flex flex-row h-[8vh] bg-[#c9a118]">
        <View
          onTouchStart={() => navigate.navigate(props.navigateTo)}
          className="w-12"
        >
          <Image
            on
            source={arrow}
            className="w-5 h-5 ml-4 my-auto rounded-full"
          />
        </View>
        <Text className="my-auto text-2xl">{props.title}</Text>
      </View>
      {props.scroll ? (
        <ScrollView
          className={`${Platform.OS === "android" ? "mt-0" : "mt-0"} bg-white`}
        >
          {props.children}
        </ScrollView>
      ) : (
        <View
          className={`${Platform.OS === "android" ? "mt-0" : "mt-0"} bg-white`}
        >
          {props.children}
        </View>
      )}
    </View>
  );
};

export default Base;
