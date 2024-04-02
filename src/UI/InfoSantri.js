import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Info from "../component/info/Info";
import Base from "../component/Base";
import { StatusBar } from "expo-status-bar";
import { title } from "../helper/title";
import useGetProfile from "../hooks/react-query/useGetProfile";
import { useRoute } from "@react-navigation/native";

const InfoSantri = () => {
  const route = useRoute();
  const { data } = useGetProfile(route?.params?.nuwb, false);
  const profile = data?.data?.santri
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#806400" />
      <Base title="Info Santri" navigateTo="Home">
        <View>
          <Info
            nuwb={profile?.nuwb}
            nama={profile?.nama !== null ? title(profile?.nama) : "-"}
            kelas={profile?.kelas !== null ? String(profile?.kelas) : "-"}
            ruang={profile?.ruang}
            lembaga={
              profile?.lembaga?.nama !== null ? profile.lembaga?.nama : "-"
            }
            wali={
              profile?.wali?.nama !== null ? title(profile?.wali?.nama) : "-"
            }
          />
        </View>
      </Base>
    </SafeAreaView>
  );
};

export default InfoSantri;
