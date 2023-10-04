import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Base from "../component/Base";
import InputField from "../component/InputField";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../store/actions/auth";
import Loader from "../component/Loader";
import Alert from "../component/Alert";
import { authAction } from "../store/slice/auth";

export default function Pengaturan() {
  const dispatch = useDispatch();
  const [old_pass, setOld_pass] = useState("");
  const [new_pass, setNew_pass] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const { loadingAuth, msgAuth,status } = useSelector((state) => state.auth);
  const updatePassword = () => {
    if (
      old_pass !== "" &&
      new_pass !== "" &&
      old_pass !== null &&
      new_pass !== null
    ) {
      dispatch(resetPassword({ old_pass, new_pass }));
    }
  };
  useEffect(() => {
    if(status === "SUCCES" || status === "ERROR"){
        setShowMsg(true)
        setTimeout(()=>{
            setShowMsg(false)
            dispatch(authAction.clearMsg)
        },2000)
    }
  }, [status]);
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#806400" />
      <Loader show={loadingAuth} />
      <Alert show={showMsg} msg={msgAuth} />
      <Base title="Pengaturan" navigateTo="Home">
        <View className=" border border-slate-800 rounded-xl shadow-xl w-[90vw] mx-auto my-[2%] p-4">
          <InputField
            title="Password lama"
            set={setOld_pass}
            value={old_pass}
          />
          <InputField
            title="Password baru"
            set={setNew_pass}
            value={new_pass}
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
