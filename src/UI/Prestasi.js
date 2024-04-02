import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import titleHistory from "../assets/time.png";
import pointLogo from "../assets/info.png";
import Base from "../component/Base";
import useGetPrestasi from "../hooks/react-query/useGetPrestasi";

function useCountPrestasi(setTotalPrestasi, value) {
  useEffect(() => {
    setTotalPrestasi(0);
    if (value && value.length >= 1) {
      let result = 0;
      value.map((d) => {
        result += parseInt(d.prestasi?.jumlahPoint);
      });
      setTotalPrestasi(result);
    }
  }, [value]);
}

const Prestasi = () => {
  const navigate = useNavigation();
  const route = useRoute();
  
  const prestasiSantri = useGetPrestasi(route?.params?.nuwb, false);
  const historyPrestasi = prestasiSantri?.data?.data;

  const [totalPrestasi, setTotalPrestasi] = useState(0);
  useCountPrestasi(setTotalPrestasi, historyPrestasi);
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#806400" />
      <View>
        <Base title="Asrama" navigateTo="Home" scroll={true}>
          <View className="mb-[20vh]">
            <View className="flex flex-row justify-between">
              <View
                onTouchStart={() =>
                  navigate.navigate("Point", { nuwb: route?.params?.nuwb,mondok:route?.params?.mondok })
                }
                className={`bg-[#6b7ced] py-3 items-center ${
                  route?.params?.mondok ? "w-[33.2%]" : "w-[50%]"
                }`}
              >
                <Text>Point Santri</Text>
              </View>
              <View
                onTouchStart={() =>
                  navigate.navigate("Prestasi", { nuwb: route?.params?.nuwb,mondok:route?.params?.mondok })
                }
                className={`bg-[#29368c] py-3 items-center ${
                  route?.params?.mondok ? "w-[33.3%]" : "w-[50%]"
                }`}
              >
                <Text className="text-white">Prestasi Santri</Text>
              </View>
              <View
                onTouchStart={() =>
                  navigate.navigate("Perizinan", { nuwb: route?.params?.nuwb,mondok:route?.params?.mondok })
                }
                className={`bg-[#6b7ced] w-[33.3%] py-3 items-center ${
                  route?.params?.mondok ? "block" : "hidden"
                }`}
              >
                <Text>Perizinan</Text>
              </View>
            </View>
            <View className="mx-auto w-full bg-[#29368c] flex flex-row py-2 px-3 my-1">
              <Image source={titleHistory} className="w-9 h-9 my-auto" />
              <Text className=" text-slate-50 mx-1 p-2 text-lg">
                Catatan Prestasi
              </Text>
            </View>
            <View className="mx-2">
              <Text className="text-lg font-semibold">
                Total Prestasi : {totalPrestasi}
              </Text>
            </View>
            {historyPrestasi && Object.keys(historyPrestasi)?.length !== 0 ? (
              <View className="mx-3 mt-1 mb-[18vh]">
                {historyPrestasi.map((d, id) => (
                  <View
                    key={id}
                    className="my-1 py-3 border border-slate-500 flex flex-row rounded-xl"
                  >
                    <Image
                      source={pointLogo}
                      className="w-10 h-10 my-auto mr-2 ml-[7px]"
                    />
                    <View className="w-[75vw]">
                      <Text className="font-semibold">{d.prestasi?.judul}</Text>
                      <Text>{d.prestasi?.deskripsi}</Text>
                      <Text>{d.prestasi?.jumlahPoint}</Text>
                    </View>
                  </View>
                ))}
              </View>
            ) : (
              <View className="flex justify-center items-center h-[55vh]">
                <Text className="text-xl">Tidak Ada Catatan</Text>
              </View>
            )}
          </View>
        </Base>
      </View>
    </SafeAreaView>
  );
};

export default Prestasi;
