import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import santri from "../../assets/santri.png";
import spp from "../../assets/spp.png";
import akademik from "../../assets/akademik.png";
import tahfidz from "../../assets/tahfidz.png";
import asrama from "../../assets/asrama.png";
import informasi from "../../assets/information.png";
import Settings from "../../assets/settings.png"
import { useNavigation } from "@react-navigation/native";


function Fitur({profile}) {
  const navigate = useNavigation();
  return (
    <ScrollView className="pt-2 pb-5 w-screen space-y-4 bg-white h-[40vh]">
      <View
        className={`flex flex-wrap flex-row items-center gap-7 justify-center pt-6`}
      >
        <View>
          <View
            onTouchStart={() =>
              navigate.navigate("Info", { nuwb: profile.nuwb })
            }
            className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2"
          >
            <Image source={santri} className="w-8 h-8 mx-auto my-auto" />
          </View>
          <Text className="text-end mx-auto">Info Santri</Text>
        </View>
        <View>
          <View
            onTouchStart={() =>
              navigate.navigate("Pembayaran", { nuwb: profile.nuwb })
            }
            className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2"
          >
            <Image source={spp} className="w-10 h-10 mx-auto my-auto" />
          </View>
          <Text className="text-center mx-auto text-[13px]">Pembayaran</Text>
        </View>
        <View>
          <View
            onTouchStart={() => navigate.navigate("Akademik")}
            className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2"
          >
            <Image source={akademik} className="w-10 h-10 mx-auto my-auto" />
          </View>
          <Text className="text-end mx-auto">Akademik</Text>
        </View>
        <View>
          <View
            onTouchStart={() => navigate.navigate("Tahfidz")}
            className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2"
          >
            <Image source={tahfidz} className="w-9 h-9 mx-auto my-auto" />
          </View>
          <Text className="text-end mx-auto">Tahfidz</Text>
        </View>
        <View>
          <View
            onTouchStart={() => navigate.navigate("Point",{ nuwb: profile.nuwb,mondok:profile?.status_santri?.mondok })}
            className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2"
          >
            <Image source={asrama} className="w-10 h-10 mx-auto my-auto" />
          </View>
          <Text className="text-end mx-auto">{profile?.status_santri?.mondok ? "Asrama" : "Point"}</Text>
        </View>
        <View>
          <View
            onTouchStart={() => navigate.navigate("Informasi",{ nuwb: profile.nuwb })}
            className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2"
          >
            <Image source={informasi} className="w-9 h-9 mx-auto my-auto" />
          </View>
          <Text className="text-end mx-auto">Informasi</Text>
        </View>
        <View>
          <View
            onTouchStart={() => navigate.navigate("Pengaturan",{ nuwb: profile.nuwb })}
            className="w-[60px] h-[60px] bg-yellow-400 rounded-xl shadow-xl mx-auto py-2"
          >
            <Image source={Settings} className="w-12 h-12 mx-auto my-auto" />
          </View>
          <Text className="text-end mx-auto">Pengaturan</Text>
        </View>

      </View>
    </ScrollView>
  );
}

export default Fitur;
