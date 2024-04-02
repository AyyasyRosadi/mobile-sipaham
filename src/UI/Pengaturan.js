import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Base from "../component/Base";
import InputField from "../component/InputField";
import Loader from "../component/Loader";
import Alert from "../component/Alert";
import useShowAlert from "../hooks/useShowAlert";
import useResetPassword from "../hooks/react-query/useResetPassword";

export default function Pengaturan() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const sendReset = useResetPassword();
  const updatePassword = () => {
    if (
      oldPassword !== "" &&
      newPassword !== "" &&
      oldPassword !== null &&
      newPassword !== null
    ) {
      sendReset.mutate({ old_pass: oldPassword, new_pass: newPassword });
    }
  };
  const showAlert = useShowAlert(
    sendReset?.status !== "idle" && sendReset?.status !== "pending"
      ? true
      : false
  );
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#806400" />
      <Loader show={sendReset?.isPending} />
      <Alert
        show={showAlert}
        msg={sendReset?.status === "error" ? "Gagal" : "Berhasil"}
      />
      <Base title="Pengaturan" navigateTo="Home">
        <View className=" border border-slate-800 rounded-xl shadow-xl w-[90vw] mx-auto my-[2%] p-4">
          <InputField
            title="Password lama"
            setValue={setOldPassword}
            value={oldPassword}
          />
          <InputField
            title="Password baru"
            setValue={setNewPassword}
            value={newPassword}
          />
          <Pressable
            onTouchStart={updatePassword}
            className={`w-28 mx-auto bg-[#29368c] py-3 rounded-2xl mt-1`}
          >
            <Text className="text-white text-center">Reset</Text>
          </Pressable>
        </View>
      </Base>
    </SafeAreaView>
  );
}
