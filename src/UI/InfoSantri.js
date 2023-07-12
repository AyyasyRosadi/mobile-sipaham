import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Platform } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Info from '../component/info/Info'
import Base from '../component/Base'
import { useSelector } from 'react-redux'
import { StatusBar } from 'expo-status-bar'

const InfoSantri = () => {
    const { profile } = useSelector(state => state.santri)
    return (
        <SafeAreaView>
            <StatusBar style='light' backgroundColor='#806400' />
            <Base
                title="Info Santri"
                navigateTo="Home"
            >
                <View>
                    <Info
                        nuwb={profile?.nuwb}
                        nama={profile?.nama}
                        kelas={String(profile?.kelas)}
                        ruang={"D"}
                        lembaga={profile.lembaga?.nama}
                        wali={profile?.wali?.nama}
                    />
                </View>
            </Base>
        </SafeAreaView>
    )
}

export default InfoSantri