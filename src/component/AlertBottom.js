import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

const AlertBottom = ({ show, msg, close }) => {
  const [showAlert, setShowAlert] = useState(show);
  useEffect(() => {
    setShowAlert(show);
  }, [show]);
  return (
    <View
      onTouchStart={() => close(false)}
      className={`absolute h-screen top-0 z-50 w-full flex flex-col justify-end items-center ${
        showAlert ? "block" : "hidden"
      }`}
    >
      <View className="bg-slate-200 rounded-md mx-2 w-[80vw] h-14 opacity-100 flex justify-center items-center shadow-md mb-10">
        <Text>{msg}</Text>
      </View>
    </View>
  );
};

export default AlertBottom;
