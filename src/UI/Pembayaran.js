import { View, Text, Pressable, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import Base from "../component/Base";
import CardSpp from "../component/pembayaran/CardSpp";
import Loader from "../component/Loader";
import bgHistory from "../assets/coins.png";
import titleHistory from "../assets/time.png";
import { currency } from "../helper/currency";
import { title } from "../helper/title";
import useGetPembayaran from "../hooks/react-query/useGetPembayaran";
import useGetHistoryPembayaran from "../hooks/react-query/useGetHistoryPembayaran";
import useShowAlert from "../hooks/useShowAlert";
import { timeAsiaMakassar } from "../helper/time";
import useGetProfile from "../hooks/react-query/useGetProfile";
import usePembayaran from "../hooks/react-query/usePembayaran";
import SetPayment from "../component/pembayaran/SetPayment";
import Alert from "../component/Alert";

const month = [
  "jun",
  "mei",
  "apr",
  "mar",
  "feb",
  "jan",
  "des",
  "nov",
  "okt",
  "sept",
  "agus",
  "jul",
];

function Pembayaran({ navigation }) {
  const navigate = useNavigation();
  const route = useRoute();
  const [showAcceptment, setShowAcceptment] = useState(false);
  const sendPembayaran = usePembayaran();
  const showAlert = useShowAlert(
    sendPembayaran?.status !== "idle" && sendPembayaran?.status !== "pending"
      ? true
      : false
  );
  const payment = () => {
    sendPembayaran.mutate(route?.params?.nuwb);
    setShowAcceptment(false);
  };
  const profileSantri = useGetProfile(route?.params?.nuwb, showAlert);
  const getPembayaran = useGetPembayaran(route?.params?.nuwb, showAlert);
  const profile = profileSantri?.data?.data?.santri;
  const onePembayaran = getPembayaran?.data?.data;
  const historyPembayaran = useGetHistoryPembayaran(
    route?.params?.nuwb,
    showAlert
  );
  const history = historyPembayaran?.data?.data;
  return (
    <SafeAreaView>
      <Alert
        show={showAlert}
        msg={
          sendPembayaran.status === "error"
            ? "Saldo tidak mencukupi"
            : "Pembayaran Berhasil"
        }
      />
      <Base title="Pembayaran" navigateTo="Home" scroll={!showAcceptment}>
        <View>
          <View className="flex flex-row justify-between">
            <View className="bg-[#29368c] w-[50%] py-3 items-center border-b border-[#29368c]">
              <Text className="text-gray-50">Pembayaran</Text>
            </View>
            <View
              onTouchStart={() =>
                navigate.navigate("TopUp", { nuwb: profile?.nuwb })
              }
              className="bg-[#6b7ced] w-[50%] py-3 items-center"
            >
              <Text>Top Up</Text>
            </View>
          </View>
          {onePembayaran &&
          Object.keys(onePembayaran)?.length !== 0 &&
          onePembayaran.status ? (
            <View className="bg-gray-50 border border-slate-600 mx-3 my-3 rounded-xl shadow-xl p-2">
              <CardSpp
                nuwb={profile?.nuwb}
                nama={
                  profile?.nama && profile?.nama !== null
                    ? title(profile?.nama)
                    : ""
                }
                bulan={onePembayaran.loan?.bulan}
                total={
                  onePembayaran.loan.jumlah
                    ? currency(onePembayaran.loan.jumlah)
                    : "Rp 0"
                }
                no_rek={`9003094${profile.nuwb}`}
                saldo={
                  profile?.saldo?.nominal
                    ? currency(profile?.saldo?.nominal)
                    : "Rp 0"
                }
              />
              <Pressable
                onTouchStart={() => setShowAcceptment(true)}
                className={`w-28 mx-auto bg-[#29368c] py-3 rounded-2xl mb-1  ${
                  onePembayaran.status ? "block" : "hidden"
                }`}
              >
                <Text className="text-white text-center">Bayar</Text>
              </Pressable>
            </View>
          ) : (
            <View />
          )}
        </View>
        <View className="mx-auto w-full bg-[#29368c] flex flex-row py-2 px-3">
          <Image source={titleHistory} className="w-9 h-9 my-auto" />
          <Text className=" text-slate-50 mx-1 p-2 text-lg">
            Catatan Pembayaran
          </Text>
        </View>
        <ScrollView className="mx-3 mt-1 mb-[40vh]">
          {history?.length > 0 &&
            [...history]
              .sort((a, b) => {
                return month.indexOf(a.ket) - month.indexOf(b.ket);
              })
              .map((d, id) => (
                <View
                  key={id}
                  className="my-1 py-3 border border-slate-500 flex flex-row rounded-xl"
                >
                  <Image
                    source={bgHistory}
                    className="w-12 h-12 my-auto mr-2 ml-[2px]"
                  />
                  <View>
                    <Text className="uppercase font-semibold">{d.ket}</Text>
                    <Text>{d.jumlah ? currency(d.jumlah) : currency(0)}</Text>
                    <Text>
                      {d.createdAt ? timeAsiaMakassar(d.createdAt) : "-"}
                    </Text>
                  </View>
                </View>
              ))}
        </ScrollView>
        <SetPayment
          show={showAcceptment}
          close={setShowAcceptment}
          approve={payment}
          profile={profile}
          onePembayaran={onePembayaran}
        />
        <Loader
          show={
            getPembayaran?.isLoading ||
            profileSantri?.isLoading ||
            sendPembayaran?.isPending ||
            historyPembayaran?.isLoading
          }
        />
      </Base>
    </SafeAreaView>
  );
}

export default Pembayaran;
