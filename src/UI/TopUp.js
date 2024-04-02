import { View, Text, Image, Keyboard } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import Base from "../component/Base";
import CardTopUp from "../component/pembayaran/CardTopUp";
import titleHistory from "../assets/time.png";
import SetTopUp from "../component/pembayaran/SetTopUp";
import Loader from "../component/Loader";
import Alert from "../component/Alert";
import bgHistory from "../assets/coins.png";
import { currency } from "../helper/currency";
import * as Clipboard from "expo-clipboard";
import { StatusBar } from "expo-status-bar";
import formatToAmount from "../helper/formatToAmount";
import useCopied from "../hooks/useCopied";
import useShowAlert from "../hooks/useShowAlert";
import useGetHistoryTopUp from "../hooks/react-query/useGetHistoryTopUp";
import formatToNumber from "../helper/formatToNumber";
import { timeAsiaMakassar } from "../helper/time";
import useGetProfile from "../hooks/react-query/useGetProfile";
import useTopUp from "../hooks/react-query/useTopUp";

const TopUp = ({ navigation }) => {
  const navigate = useNavigation();
  const route = useRoute();

  const [valueTopUp, setValueTopUp] = useState("");
  const [showApprove, setShowApprove] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const profileSantri = useGetProfile(route?.params?.nuwb, false);
  const profile = profileSantri?.data?.data?.santri;

  const sendTopUp = useTopUp();
  const showAlert = useShowAlert(sendTopUp?.status !== "idle" ? true : false);
  const submit = () => {
    let amount = formatToNumber(valueTopUp);
    sendTopUp.mutate({ nuwb: profile.nuwb, nominal: parseInt(amount) });
    setShowApprove(false);
    setValueTopUp("");
  };

  formatToAmount(valueTopUp, setValueTopUp);
  useCopied(showCopied, setShowCopied);

  const getHistoryTopUp = useGetHistoryTopUp(route?.params?.nuwb, showAlert);
  const historyTopUp = getHistoryTopUp?.data?.data;
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#806400" />
      <Loader show={getHistoryTopUp?.isLoading || profileSantri?.isLoading} />
      <Alert
        show={showAlert}
        msg={sendTopUp?.status === "error" ? "Gagal" : "Top Up Berhasil"}
      />
      <Alert show={showCopied} msg={"Copied"} />
      <Base title="Top Up" navigateTo="Home" scroll={!showApprove}>
        <View>
          <View className="" onTouchStart={() => Keyboard.dismiss()}>
            <View className="flex flex-row justify-between">
              <View
                onTouchStart={() =>
                  navigate.navigate("Pembayaran", { nuwb: profile?.nuwb })
                }
                className="bg-[#6b7ced] w-[50%] py-3 items-center"
              >
                <Text>Pembayaran</Text>
              </View>
              <View
                onTouchStart={() => navigate.navigate("TopUp")}
                className="bg-[#29368c] w-[50%] py-3 items-center"
              >
                <Text className="text-gray-50">Top Up</Text>
              </View>
            </View>
            <View>
              <CardTopUp
                saldo={historyTopUp?.saldo}
                value={valueTopUp}
                setTopUp={setValueTopUp}
                set={setShowApprove}
                no_rek={`9003094${profile.nuwb}`}
                press={async () => {
                  await Clipboard.setStringAsync(`9003094${profile.nuwb}`);
                  setShowCopied(true);
                }}
                click={() => {
                  let amount = formatToNumber(valueTopUp);
                  if (amount !== "" && parseInt(amount) >= 10000) {
                    setShowApprove(true);
                  }
                }}
              />
            </View>
            <View className="mx-auto w-full bg-[#29368c] flex flex-row py-2 px-3 mb-1">
              <Image source={titleHistory} className="w-9 h-9 my-auto" />
              <Text className=" text-slate-50 mx-1 p-2 text-lg">
                Catatan Top Up
              </Text>
            </View>
            {historyTopUp && Object.keys(historyTopUp)?.length !== 0 ? (
              <View className="mx-3 mt-1 mb-[40vh]">
                {historyTopUp.log.map((d, id) => (
                  <View
                    key={id}
                    className="my-1 py-3 border border-slate-500 flex flex-row rounded-xl"
                  >
                    <Image
                      source={bgHistory}
                      className="w-12 h-12 my-auto mr-2 ml-[2px]"
                    />
                    <View>
                      <Text className="">
                        Aktif : {d.active && timeAsiaMakassar(d.active)}
                      </Text>
                      <Text className="">
                        Sampai : {d.end && timeAsiaMakassar(d.end)}
                      </Text>
                      <Text>{`Status : ${
                        d.status === 2
                          ? "Menunggu"
                          : d.status === 1
                          ? "Berhasil"
                          : "Tidak Aktif"
                      }`}</Text>
                      <Text>Top up : {currency(d.nominal)}</Text>
                      <Text>Admin : {currency(2000)}</Text>
                      <Text>Total : {currency(d.nominal + 2000)}</Text>
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
        </View>
        <SetTopUp
          show={showApprove}
          close={setShowApprove}
          approve={submit}
          value={valueTopUp}
          profile={profile}
        />
      </Base>
    </SafeAreaView>
  );
};

export default TopUp;
