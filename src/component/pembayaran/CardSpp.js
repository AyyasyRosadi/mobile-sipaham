import { View, Text, Image } from "react-native";
import React from "react";
import TextRow from "./TextRow";
import operation from "../../assets/operation.png";

const CardSpp = ({ nuwb, nama, bulan, total, saldo }) => {
  return (
    <View className="p-4">
      <View className="flex flex-row justify-between">
        <Text className="text-slate-800 text-2xl">Informasi Spp/Ibs</Text>
        <Image source={operation} className="w-9 h-9 my-auto" />
      </View>
      <View className="w-full h-[1px] bg-slate-600 my-1"></View>
      <View className="my-auto">
        <View className="">
          <TextRow title="Nuwb" value={nuwb} />
          <TextRow title="Nama" value={nama} />
          <TextRow title="Bulan" value={bulan} uppercase />
          <TextRow title="Total" value={total} />
          <TextRow title="Saldo" value={saldo} />
        </View>
      </View>
    </View>
  );
};

export default CardSpp;
