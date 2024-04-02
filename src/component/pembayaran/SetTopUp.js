import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { currency } from "../../helper/currency";
import closeImage from "../../assets/close.png";

const SetTopUp = ({ show, close, value, approve, profile }) => {
  const [showTopUp, setShowTopUp] = useState(show);
  useEffect(() => {
    setShowTopUp(show);
  }, [show]);
  return (
    <View
      className={`absolute w-[100vw] bg-slate-200 top-0 h-[95vh]  ${
        showTopUp ? "block opacity-90" : "hidden"
      }`}
    >
      <View className="h-[90vh] relative">
        <View
          className={`bg-white  w-[100vw] absolute bottom-0 p-4 opacity-100`}
        >
          <View className="flex justify-between flex-row">
            <Text className="text-[23px] font-semibold my-autoe">Top Up</Text>
            <View onTouchStart={() => close(false)}>
              <Image source={closeImage} className="w-6 h-6" />
            </View>
          </View>
          <View className="w-full bg-slate-400 h-[1px] mt-2"></View>
          <View className="w-full my-1 p-1 flex flex-col space-y-1">
            <Text className="text-lg">
              Sisa Saldo :{" "}
              {profile.saldo !== null
                ? currency(profile.saldo.nominal)
                : currency(0)}
            </Text>
            <Text className="text-lg">
              Anda Akan Melakukan Top Up Sejumlah Rp {value}
            </Text>
          </View>
          <Pressable
            onTouchStart={approve}
            className="bg-[#29368c] w-full rounded-lg"
          >
            <Text className="mx-auto py-4 text-white">Lanjut</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SetTopUp;
