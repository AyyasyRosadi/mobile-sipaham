import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { currency } from "../../helper/currency";
import closeImage from "../../assets/close.png";

const SetPayment = ({ show, close, approve, profile, onePembayaran }) => {
  const [showPayment, setShowPayment] = useState(show);
  useEffect(() => {
    setShowPayment(show);
  }, [show]);
  return (
    <View
      className={`absolute right-0 w-[100vw] bg-slate-200 top-0 h-[100vh]  ${
        showPayment ? "block opacity-90" : "hidden"
      }`}
    >
      <View className={`h-[90vh] relative`}>
        <View
          className={`bg-white w-[100vw] absolute bottom-0 p-4 opacity-100`}
        >
          <View className="flex justify-between flex-row">
            <Text className="text-[23px] font-semibold my-autoe">
              Lakukan Pembayaran
            </Text>
            <View onTouchStart={() => close(false)}>
              <Image source={closeImage} className="w-6 h-6" />
            </View>
          </View>
          <View className="w-full bg-slate-400 h-[1px] mt-2"></View>
          <View className="w-full my-1 p-1 flex flex-col space-y-3">
            <Text className="text-lg">
              Sisa Saldo :{" "}
              {profile?.saldo !== null
                ? currency(profile?.saldo?.nominal)
                : "0"}
            </Text>
            <Text className="text-lg uppercase">
              Pembayaran Spp Atas Nama {profile?.nama} Untuk Bulan{" "}
              {onePembayaran?.loan?.bulan} Dengan Jumlah{" "}
              {onePembayaran?.loan?.jumlah
                ? currency(onePembayaran?.loan?.jumlah)
                : currency(0)}
            </Text>
          </View>
          <Pressable
            onTouchStart={approve}
            className="bg-[#29368c] w-full rounded-lg"
          >
            <Text className="mx-auto py-4 text-white">Bayar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default SetPayment;
