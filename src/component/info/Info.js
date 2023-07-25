import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import InputField from "../InputField";

const Info = (props) => {
  return (
    <ScrollView className="h-[95vh]">
      {/* <View className="bg-blue-400 h-[50%]"> */}
      <View className="px-5 mt-5">
        <InputField
          title="Nuwb"
          value={props.nuwb}
          readOnly={false}
          color="bg-slate-100 px-2"
        />
        <InputField
          title="Nama"
          value={props.nama}
          readOnly={false}
          color="bg-slate-100 px-2"
        />
        <InputField
          title="Kelas"
          value={props.kelas}
          readOnly={false}
          color="bg-slate-100 px-2"
        />
        <InputField
          title="Ruang"
          value={props.ruang}
          readOnly={false}
          color="bg-slate-100 px-2"
        />
        <InputField
          title="Lembaga"
          value={props.lembaga}
          readOnly={false}
          color="bg-slate-100 px-2"
        />
        <InputField
          title="Wali"
          value={props.wali}
          readOnly={false}
          color="bg-slate-100 px-2"
        />
      </View>
      {/* </View> */}
    </ScrollView>
  );
};

export default Info;
