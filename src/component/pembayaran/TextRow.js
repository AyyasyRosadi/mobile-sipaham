import { View, Text } from "react-native";
import React from "react";

const TextRow = ({ title, value, uppercase }) => {
  return (
    <View className="flex flex-row space-x-2 my-1">
      <Text className="text-lg text-slate-800">{title}</Text>
      <Text className="text-lg text-slate-800">:</Text>
      <Text
        className={`text-slate-800 w-[83%] my-auto ${
          value?.length < 20
            ? "text-lg"
            : value?.length >= 20 && value?.length < 40
            ? "text-md"
            : "text-sm"
        } ${uppercase ? "uppercase" : ""}`}
      >
        {value}
      </Text>
    </View>
  );
};

export default TextRow;
