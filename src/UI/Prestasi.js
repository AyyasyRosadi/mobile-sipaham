import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getAllPrestasi } from "../store/actions/prestasi";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import titleHistory from "../assets/time.png";
import pointLogo from "../assets/info.png";
import Base from "../component/Base";


const Prestasi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const { profile } = useSelector((state) => state.santri);
  const { prestasiAll } = useSelector((state) => state.prestasi);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    dispatch(getAllPrestasi(profile?.nuwb));
  }, [profile]);
  useEffect(() => {
    setTotal(0);
    if (prestasiAll.length >= 1) {
      let sem = 0;
      prestasiAll.map((d) => {
        sem += parseInt(d.prestasi?.jumlahPoint);
      });
      setTotal(sem);
    }
  }, [prestasiAll]);
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#806400" />
      <View>
        <Base title="Asrama" navigateTo="Home">
          <ScrollView>
            <View>
              <View className="flex flex-row justify-between">
                <View
                  onTouchStart={() =>
                    navigate.navigate("Perizinan")
                  }
                  className="bg-[#6b7ced] w-[33.2%] py-3 items-center"
                >
                  <Text>Perizinan</Text>
                </View>
                <View
                  onTouchStart={() => navigate.navigate("Point")}
                  className="bg-[#6b7ced] w-[33.2%] py-3 items-center"
                >
                  <Text>Point Santri</Text>
                </View>
                <View
                  onTouchStart={() => navigate.navigate("Prestasi")}
                  className="bg-[#29368c] w-[33.2%] py-3 items-center"
                >
                  <Text className="text-white">Prestasi Santri</Text>
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
                  Total Prestasi : {total}
                </Text>
              </View>
              {Object.keys(prestasiAll)?.length !== 0 ? (
                <View className="mx-3 mt-1 mb-[18vh]">
                  {prestasiAll.map((d, id) => (
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
                          {d.prestasi?.judul}
                        </Text>
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
          </ScrollView>
        </Base>
      </View>
    </SafeAreaView>
  );
};

export default Prestasi;
