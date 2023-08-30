import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import React, { useEffect, useState } from "react";
import Logo from "../assets/ponpes.png";
import InputField from "../component/InputField";
import Open from "../assets/view.png";
import Close from "../assets/hide.png";
import { useDispatch, useSelector } from "react-redux";
import { islogin } from "../store/actions/auth";
import { useNavigation } from "@react-navigation/native";
import Loader from "../component/Loader";
import Alert from "../component/Alert";
import AlertBottom from "../component/AlertBottom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authAction } from "../store/slice/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import masjid from "../assets/masjid.png";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const [no_hp, setNo_hp] = useState("");
  const [pwd, setPwd] = useState("");
  const [secure, setSecure] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { userAuth, loadingAuth, msgAuth,status } = useSelector((state) => state.auth);
  const login = () => {
    dispatch(islogin({ noTelpon: `0${no_hp}`, password: pwd }));
  };
  useEffect(() => {
    if (no_hp[0] === 0 || no_hp[0] === "0") {
      setNo_hp("");
    }
  }, [no_hp]);
  useEffect(() => {
    if (status === "ERROR") {
      setShowAlert(true);
    }
  }, [status]);
  useEffect(() => {
    const check = async () => {
      try {
        if (Object.keys(userAuth).length !== 0) {
          await AsyncStorage.setItem("userToken", JSON.stringify(userAuth));
        }
      } catch (err) {
        return err;
      }
    };
    check();
  }, [userAuth, loadingAuth]);
  useEffect(() => {
    if (showAlert) {
      const interval = setInterval(() => {
        setShowAlert(false);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [showAlert]);
  return (
    <KeyboardAvoidingView behavior="height" className="flex h-screen">
      <Loader show={loadingAuth} />
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
                value={no_hp}
                color="bg-slate-100 border border-slate-100 pl-9"
                set={setNo_hp}
                keyboard="number-pad"
                placeholder="Nomor HP"
              />
            </View>
            <View className="relative">
              <InputField
                secure={secure}
                value={pwd}
                color="bg-slate-100 border border-slate-100 px-2"
                set={setPwd}
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
                {/* <Image className="w-5 h-5" source={secure ? Close : Open} /> */}
              </View>
            </View>
            <Text className={`text-center mt-[5%] text-md text-[#c5a231] ${showAlert ? "block" :"hidden"}`}>No HP atau Password Salah</Text>
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
