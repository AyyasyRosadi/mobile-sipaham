import React from "react";
import gear from "../assets/engineering.png"
import { Image, Text, View } from "react-native";

function Maintain() {
  return (
    <View className="flex flex-col justify-center items-center h-[90vh]">
      <Image source={gear} className="w-40 h-40" />
      <Text className="text-2xl">Dalam Pengembangan</Text>
    </View>
  );
}

export default Maintain;
