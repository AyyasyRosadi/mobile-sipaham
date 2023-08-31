import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Base from "../component/Base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { allPoint } from "../store/actions/point";
import bgHistory from "../assets/coins.png";
import titleHistory from "../assets/time.png";
import pointLogo from "../assets/info.png";

const Point = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const { profile } = useSelector((state) => state.santri);
  const { pointAll } = useSelector((state) => state.point);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    dispatch(allPoint(profile?.nuwb));
  }, [profile]);
  useEffect(() => {
    setTotal(0);
    if (pointAll.length >= 1) {
      let sem = 0;
      pointAll.map((d) => {
        sem += parseInt(d.list_point?.jumlahPoint);
      });
      setTotal(sem);
    }
  }, [pointAll]);
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#806400" />
      <View>
        <Base title="Asrama" navigateTo="Home" scroll={true}>
            <View className="mb-[20vh]">
              <View className="flex flex-row justify-between">
                <View
                  onTouchStart={() => navigate.navigate("Point")}
                  className={`bg-[#29368c] py-3 items-center ${profile?.status_santri?.mondok ? "w-[33.3%]" : "w-[50%]" }`}
                >
                  <Text className="text-white">Point Santri</Text>
                </View>
                <View
                  onTouchStart={() => navigate.navigate("Prestasi")}
                  className={`bg-[#6b7ced] py-3 items-center ${profile?.status_santri?.mondok ? "w-[33.2%]" : "w-[50%]" }`}
                >
                  <Text>Prestasi Santri</Text>
                </View>
                <View
                  onTouchStart={() =>
                    navigate.navigate("Perizinan")
                  }
                  className={`bg-[#6b7ced] w-[33.2%] py-3 items-center ${profile?.status_santri?.mondok ? "block" : "hidden"}`}
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
                  Total Point : {total}
                </Text>
              </View>
              {Object.keys(pointAll)?.length !== 0 ? (
                <View className="mx-3 mt-1 mb-[18vh]">
                  {pointAll.map((d, id) => (
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
