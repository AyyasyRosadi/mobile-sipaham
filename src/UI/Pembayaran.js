import { View, Text, Button, Pressable, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import arrow from "../assets/arrow.png"
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import Base from '../component/Base'
import SetPayment from '../component/pembayaran/SetPayment'
import CardSpp from '../component/pembayaran/CardSpp'
import { useDispatch, useSelector } from 'react-redux'
import { getHistory, getPembayaran, pembayaranSpp } from '../store/actions/pembayaran'
import Loader from '../component/Loader'
import moment from 'moment'
import Alert from '../component/Alert'
// import { currency } from '../helper/Currency'
import bgHistory from "../assets/coins.png"
import titleHistory from "../assets/time.png"
import * as Clipboard from "expo-clipboard"
import { StatusBar } from 'expo-status-bar'
import { currency } from '../helper/Currency'


const Pembayaran = ({ navigation }) => {
    const navigate = useNavigation()
    const dispatch = useDispatch()
    const { profile } = useSelector(state => state.santri)
    const [showAlert, setShowAlert] = useState(false)
    const bul = ["jun", "mei", "apr", "mar", "feb", "jan", "des", "nov", "okt", "sept", "agus", "jul"]
    const { onePembayaran, msgPembayaran, loadingPembayaran, history } = useSelector(state => state.pembayaran)
    const [showAcceptment, setShowAcceptment] = useState(false)
    const [showCopied, setShowCopied] = useState(false)
    useEffect(() => {
        dispatch(getPembayaran(profile.nuwb))
        dispatch(getHistory(profile.nuwb))
    }, [profile.nuwb, showAlert])
    const payment = () => {
        dispatch(pembayaranSpp(profile.nuwb))
        setShowAcceptment(!showAcceptment)
        setShowAlert(!showAlert)
    }
    useEffect(() => {
        if (showCopied) {
            const interval = setInterval(() => {
                setShowCopied(false)
            }, 500)
            return () => clearInterval(interval)
        }
    }, [showCopied])
    return (
        <SafeAreaView>
            {/* <StatusBar style='light' backgroundColor='#806400' /> */}
            <View>
                <Alert show={showAlert} close={setShowAlert} msg={msgPembayaran} />
                <Alert show={showCopied} close={setShowCopied} msg={"Copied"} />
                <Base
                    title="Pembayaran"
                    navigateTo="Home"
                >
                    <View>
                        <View className="flex flex-row justify-between">
                            <View className="bg-[#29368c] w-[50%] py-3 items-center border-b border-[#29368c]">
                                <Text className="text-gray-50">Pembayaran</Text>
                            </View>
                            <View onTouchStart={() => navigate.navigate("TopUp")} className="bg-[#6b7ced] w-[50%] py-3 items-center">
                                <Text>Top Up</Text>
                            </View>
                        </View>
                        {Object.keys(onePembayaran)?.length !== 0 && onePembayaran.status ?
                            <View className="bg-gray-50 border border-slate-600 mx-3 my-3 rounded-xl shadow-xl p-2">
                                <CardSpp
                                    nuwb={profile.nuwb}
                                    nama={profile.nama}
                                    bulan={onePembayaran.loan.bulan}
                                    total={onePembayaran.loan.jumlah !== undefined ? currency(onePembayaran.loan.jumlah) : "Rp 0"}
                                    no_rek={`9003094${profile.nuwb}`}
                                    saldo={profile?.saldo?.nominal !== undefined ? currency(profile?.saldo?.nominal) : "Rp 0"}
                                    // press={async () => {
                                    //     await Clipboard.setStringAsync(`9003094${profile.nuwb}`)
                                    //     setShowCopied(true)
                                    // }}
                                />
                                <Pressable onTouchStart={() => setShowAcceptment(true)} className={`w-28 mx-auto bg-[#29368c] py-3 rounded-2xl mb-1  ${onePembayaran.status ? "block" : "hidden"}`}>
                                    <Text className="text-white text-center">Bayar</Text>
                                </Pressable>

                            </View>
                            :
                            <View />
                        }
                    </View>
                    <View className="mx-auto w-full bg-[#29368c] flex flex-row py-2 px-3">
                        <Image source={titleHistory} className="w-9 h-9 my-auto" />
                        <Text className=" text-slate-50 mx-1 p-2 text-lg">Catatan Pembayaran</Text>
                    </View>
                    <ScrollView className="mx-3 mb-20 mt-1">
                        {[...history].sort((a, b) => {
                            return bul.indexOf(a.ket) - bul.indexOf(b.ket)
                        }).map((d, id) => (
                            <View key={id} className="my-1 py-3 border border-slate-500 flex flex-row rounded-xl">
                                <Image source={bgHistory} className="w-12 h-12 my-auto mr-2 ml-[2px]" />
                                <View>
                                    <Text className="uppercase font-semibold">{d.ket}</Text>
                                    <Text>{d.jumlah}</Text>
                                    <Text>{moment(d.createdAt).format("DD-MM-YYYY ( hh:mm:ss )")}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                    <SetPayment show={showAcceptment} close={setShowAcceptment} aprove={payment} />
                    <Loader show={loadingPembayaran} />
                </Base>
            </View>
        </SafeAreaView>
    )
}

export default Pembayaran