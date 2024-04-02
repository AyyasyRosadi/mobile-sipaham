import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Base from "../component/Base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import titleHistory from "../assets/time.png";
import pointLogo from "../assets/info.png";
import useGetPoint from "../hooks/react-query/useGetPoint";

function useCountPoint(setTotalPoint, value) {
  useEffect(() => {
    setTotalPoint(0);
    if (value && value.length >= 1) {
      let result = 0;
      value.map((d) => {
        result += parseInt(d.list_point?.jumlahPoint);
      });
      setTotalPoint(result);
    }
  }, [value]);
}

const Point = () => {
  const navigate = useNavigation();
  const route = useRoute();

  const pointSantri = useGetPoint(route?.params?.nuwb);
  const historyPoint = pointSantri?.data?.data;

  const [totalPoint, setTotalPoint] = useState(0);
  useCountPoint(setTotalPoint, historyPoint);
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#806400" />
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
                className={`bg-[#29368c] py-3 items-center ${
                  route?.params?.mondok ? "w-[33.3%]" : "w-[50%]"
                }`}
              >
                <Text className="text-white">Point Santri</Text>
              </View>
              <View
                onTouchStart={() =>
                  navigate.navigate("Prestasi", {
                    nuwb: route?.params?.nuwb,
                    mondok: route?.params?.mondok,
                  })
                }
                className={`bg-[#6b7ced] py-3 items-center ${
                  route?.params?.mondok ? "w-[33.2%]" : "w-[50%]"
                }`}
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
                className={`bg-[#6b7ced] w-[33.2%] py-3 items-center ${
                  route?.params?.mondok ? "block" : "hidden"
                }`}
              >
                <Text>Perizinan</Text>
              </View>
            </View>
            <View className="mx-auto w-full bg-[#29368c] flex flex-row py-2 px-3 my-1">
              <Image source={titleHistory} className="w-9 h-9 my-auto" />
              <Text className=" text-slate-50 mx-1 p-2 text-lg">
                Catatan Point
              </Text>
            </View>
            <View className="mx-2">
              <Text className="text-lg font-semibold">
                Total Point : {totalPoint}
              </Text>
            </View>
            {historyPoint && Object.keys(historyPoint)?.length !== 0 ? (
              <View className="mx-3 mt-1 mb-[18vh]">
                {historyPoint.map((d, id) => (
                  <View
                    key={id}
                    className="my-1 py-3 border border-slate-500 flex flex-row rounded-xl"
                  >
                    <Image
                      source={pointLogo}
                      className="w-10 h-10 my-auto mr-2 ml-[7px]"
                    />
                    <View className="w-[75vw]">
                      <Text className="font-semibold">
                        {d.list_point?.judul}
                      </Text>
                      <Text>{d.list_point?.deskripsi}</Text>
                      <Text>{d.list_point?.jumlahPoint}</Text>
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

export default Point;
