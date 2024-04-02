import { View, ScrollView } from "react-native";
import React from "react";
import InputField from "../InputField";

const Info = ({ nuwb, nama, kelas, ruang, lembaga, wali }) => {
  return (
    <ScrollView className="h-[95vh]">
      <View className="px-5 mt-5">
        <InputField
          title="Nuwb"
          value={nuwb}
          readOnly={false}
          color="bg-slate-100 px-2"
        />
        <InputField
          title="Nama"
          value={nama}
          readOnly={false}
          color="bg-slate-100 px-2"
        />
        <InputField
          title="Kelas"
          value={kelas}
          readOnly={false}
          color="bg-slate-100 px-2"
        />
        <InputField
          title="Ruang"
          value={ruang}
          readOnly={false}
          color="bg-slate-100 px-2"
        />
        <InputField
          title="Lembaga"
          value={lembaga}
          readOnly={false}
          color="bg-slate-100 px-2"
        />
        <InputField
          title="Wali"
          value={wali}
          readOnly={false}
          color="bg-slate-100 px-2"
        />
      </View>
    </ScrollView>
  );
};

export default Info;
