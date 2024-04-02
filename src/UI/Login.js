import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import React, { useEffect, useState } from "react";
import InputField from "../component/InputField";
import Loader from "../component/Loader";
import { StatusBar } from "expo-status-bar";
import masjid from "../assets/masjid.png";
import useErrorAlert from "../hooks/useErrorAlert";
import useSetStorageLogin from "../hooks/useSetStorageLogin";
import useLogin from "../hooks/react-query/useLogin";

function useSetNumberPhone(numberPhone, setNumberPhone) {
  useEffect(() => {
    if (numberPhone[0] === 0 || numberPhone[0] === "0") {
      setNumberPhone("");
    }
  }, [numberPhone]);
}

const Login = ({ navigation }) => {
  const [numberPhone, setNumberPhone] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(false);
  const isLogin = useLogin();
  const login = () => {
    isLogin.mutate({ noTelpon: `0${numberPhone}`, password: password });
  };
  const showAlert = useErrorAlert(isLogin.status === "error" ? true : false);
  useSetNumberPhone(numberPhone, setNumberPhone);
  useSetStorageLogin(isLogin?.data?.data, isLogin?.isPending);
  return (
    <KeyboardAvoidingView behavior="height" className="flex h-screen">
      <Loader show={isLogin?.isPending} />
      <StatusBar />
      <View className="h-[40%] ">
        <View className="bg-black absolute top-0 h-[100%] w-[120%] -ml-[10%] z-10 opacity-50 rounded-b-[90px]"></View>
        <View className="absolute top-0 h-[100%] w-[120%] my-auto z-10 justify-center items-center -ml-[10%]">
          <Text className="text-white text-xl">Berkarakter dengan</Text>
          <View className="flex flex-row space-x-2">
            <Text className="text-4xl mt-[1%] text-white">Ilmu,</Text>
            <Text className="text-4xl mt-[1%] text-white">Amal,</Text>
            <Text className="mt-[3%] text-xl text-white">dan</Text>
            <Text className="text-4xl mt-[1%] text-white">Adab</Text>
          </View>
        </View>
        <Image
          source={masjid}
          alt=""
          className="w-[120%] h-[100%] bg-cover rounded-b-[90px] mx-auto -ml-[10%]"
        />
      </View>
      <View className="flex h-[60%] ">
        <Text className="text-center text-3xl my-2 mt-[5%]">SiPaham</Text>
        <View className="mx-auto w-[90%] h-[80%] flex justify-between">
          <View>
            <View className="relative">
              <Text className="absolute z-10 top-[46%] left-2">+62</Text>
              <InputField
                value={numberPhone}
                color="bg-slate-100 border border-slate-100 pl-9"
                setValue={setNumberPhone}
                keyboard="number-pad"
                placeholder="Nomor HP"
              />
            </View>
            <View className="relative">
              <InputField
                secure={secure}
                value={password}
                color="bg-slate-100 border border-slate-100 px-2"
                setValue={setPassword}
                placeholder="Password"
              />
              <View
                onTouchStart={() => setSecure(!secure)}
                className="absolute right-[5%] top-[45%]"
              >
                {secure ? (
                  <Text className="text-[#dbad17] font-semibold">Lihat</Text>
                ) : (
                  <Text className="text-[#dbad17] font-semibold">
                    Sembunyikan
                  </Text>
                )}
              </View>
            </View>
            <Text
              className={`text-center mt-[5%] text-md text-[#c5a231] ${
                showAlert ? "block" : "hidden"
              }`}
            >
              No HP atau Password Salah
            </Text>
          </View>
          <View
            onTouchStart={login}
            className="bg-[#dbad17] rounded-xl w-full my-2 py-2"
          >
            <Text className="mx-auto py-3 text-white font-extrabold">
              Masuk
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
