import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Base from "../component/Base";
import { useNavigation, useRoute } from "@react-navigation/native";
import titleHistory from "../assets/time.png";
import pointLogo from "../assets/info.png";
import useGetPerizinan from "../hooks/react-query/useGetPerizinan";
import { timeAsiaMakassar } from "../helper/time";

const Perizinan = () => {
  const navigate = useNavigation();
  const route = useRoute();

  const getPerizinan = useGetPerizinan(route?.params?.nuwb);
  const historyPerizinan = getPerizinan?.data?.data;
  return (
    <SafeAreaView>
      <View>
        <Base title="Asrama" navigateTo="Home" scroll={true}>
          <View className="mb-[20vh]">
            <View className="flex flex-row justify-between">
              <View
                onTouchStart={() =>
                  navigate.navigate("Point", {
                    nuwb: route?.params?.nuwb,
                    mondok: route?.params?.mondok,
                  })
                }
                className="bg-[#6b7ced] w-[33.2%] py-3 items-center"
              >
                <Text>Point Santri</Text>
              </View>
              <View
                onTouchStart={() =>
                  navigate.navigate("Prestasi", {
                    nuwb: route?.params?.nuwb,
                    mondok: route?.params?.mondok,
                  })
                }
                className="bg-[#6b7ced] w-[33.2%] py-3 items-center"
              >
                <Text>Prestasi Santri</Text>
              </View>
              <View
                onTouchStart={() =>
                  navigate.navigate("Perizinan", {
                    nuwb: route?.params?.nuwb,
                    mondok: route?.params?.mondok,
                  })
                }
                className="bg-[#29368c] w-[33.3%] py-3 items-center"
              >
                <Text className="text-white">Perizinan</Text>
              </View>
            </View>
            <View className="mx-auto w-full bg-[#29368c] flex flex-row py-2 px-3 my-1">
              <Image source={titleHistory} className="w-9 h-9 my-auto" />
              <Text className=" text-slate-50 mx-1 p-2 text-lg">
                Catatan Perizinan
              </Text>
            </View>
            {historyPerizinan && Object.keys(historyPerizinan)?.length !== 0 ? (
              <View className="mx-3 mt-1 mb-[18vh]">
                {historyPerizinan.map((d, id) => (
                  <View
                    key={id}
                    className="my-1 py-3 border border-slate-500 flex flex-row rounded-xl"
                  >
                    <Image
                      source={pointLogo}
                      className="w-10 h-10 my-auto mr-2 ml-[7px]"
                    />
                    <View className="w-[75vw]">
                      <Text>
                        Dari : {d.dari ? timeAsiaMakassar(d.dari) : "-"}
                      </Text>
                      <Text>
                        Sampai : {d.sampai ? timeAsiaMakassar(d.sampai) : "-"}
                      </Text>
                      <Text>Keterangan : {d.keterangan}</Text>
                      <Text>Penjemput : {d.listPenjemput?.nama}</Text>
                      <Text>
                        Status : {d.status ? "Sudah kembali" : "Belum kembali"}
                      </Text>
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

export default Perizinan;
