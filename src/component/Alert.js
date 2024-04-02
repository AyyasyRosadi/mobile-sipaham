import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

const Alert = ({ show, msg }) => {
  const [showAlert, setShowAlert] = useState(show);
  useEffect(() => {
    setShowAlert(show);
  }, [show]);
  return (
    <View
      className={`absolute top-0 h-[100vh] z-50 w-full flex justify-center items-center ${
        showAlert ? "block" : "hidden"
      }`}
    >
      <View className="bg-[#edcf6b] rounded-md mx-2 w-[80vw] h-14 opacity-100 flex justify-center items-center shadow-md">
        <Text>{msg}</Text>
      </View>
    </View>
  );
};

export default Alert;
