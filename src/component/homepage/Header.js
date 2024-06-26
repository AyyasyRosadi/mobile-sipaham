import React, { useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import dots from "../../assets/dots.png";
import account from "../../assets/switch.png";
import out from "../../assets/logout.png";
import logo from "../../assets/ponpes.png";
import bg from "../../assets/bgHead.png";
import { currency } from "../../helper/currency";
import { useNavigation } from "@react-navigation/native";
import removeStorage from "../../helper/removeStorage";
import { useTrigger } from "../../provider/Context";

function Header({ profile }) {
  const { triggerEffect } = useTrigger();
  const navigate = useNavigation();
  const [dropMenu, setDropMenu] = useState(false);
  const clearStore = async () => {
    await removeStorage("userToken");
    triggerEffect();
  };
  return (
    <ImageBackground
      source={bg}
      resizeMode="cover"
      className={`h-[25vh] pb-2 px-4 flex flex-col justify-between bg-[#c9a118]`}
    >
      <View className="mt-4">
        <View className="flex flex-row justify-between my-auto">
          <View className="ml-1">
            <Image source={logo} className="w-16 h-16" />
          </View>
          <View className="flex flex-row my-auto">
            <View className="mr-3 gap-[2px]">
              <Text className="text-[15px] text-gray-900 text-right">
                Ahlan Wasahlan
              </Text>
              <Text className="text-[13px] text-gray-900 font-semibold w-40 text-right uppercase">
                {profile?.nama}
              </Text>
            </View>
            <View className="relative">
              <Image
                onTouchStart={() => setDropMenu(!dropMenu)}
                className="w-7 h-7 my-auto bg-slate-100 rounded-full"
                source={dots}
              />
              <View
                className={`bg-green-400 h-[10rem] absolute w-32 -left-24 rounded-lg ${
                  dropMenu ? "block -bottom-[77px]" : "hidden -bottom-0"
                } transition-color ease-in-out duration-1000`}
              >
                <View
                  onTouchStart={() => navigate.navigate("User")}
                  className="bg-white px-1 py-2 rounded-t-lg focus:bg-yellow-500 flex flex-row space-x-1"
                >
                  <Image source={account} className="w-5 h-5" />
                  <Text className="my-auto">Ganti Akun</Text>
                </View>
                <View
                  onTouchStart={() => {
                    clearStore();
                  }}
                  className="bg-white px-1 py-2 rounded-b-lg flex flex-row space-x-2"
                >
                  <Image source={out} className="w-5 h-5" />
                  <Text>Keluar</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className=" h-[49%] -z-10">
        <View className="p-2 mt-2">
          <Text className="text-xl font-semibold text-gray-700">
            NUWB : {profile?.nuwb}
          </Text>
          <Text className="text-[17px] mt-1 font-semibold text-gray-700">
            Saldo :
            {profile && Object.keys(profile).length !== 0
              ? profile?.saldo?.nominal !== null
                ? currency(profile?.saldo?.nominal)
                : "0"
              : "0"}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Header;
