import { View, Text, Image, ScrollView, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import Base from '../component/Base'
import tz from "moment-timezone"
import InputField from '../component/InputField'
import TextRow from '../component/pembayaran/TextRow'
// import { currency } from '../helper/Currency'
import CardTopUp from '../component/pembayaran/CardTopUp'
import titleHistory from "../assets/time.png"
import SetTopUp from '../component/pembayaran/SetTopUp'
import { useDispatch, useSelector } from 'react-redux'
import { getHistoryTopUp, postTopup } from '../store/actions/pembayaran'
import Loader from '../component/Loader'
import Alert from '../component/Alert'
import bgHistory from "../assets/coins.png"
import { currency } from '../helper/Currency'
import moment from 'moment'
import SetPayment from '../component/pembayaran/SetPayment'
import * as Clipboard from "expo-clipboard"
import { StatusBar } from 'expo-status-bar'



const TopUp = ({ navigation }) => {
    const navigate = useNavigation()
    const route = useRoute()
    const dispatch = useDispatch()
    const [valueTopUp, setValueTopUp] = useState("")
    const [closeCopied, setCloseCopied] = useState(false)
    const [showAprove, setShowAprove] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [showCopied, setShowCopied] = useState(false)
    const { historyTopup, msgPembayaran, loadingPembayaran } = useSelector(state => state.pembayaran)
    const { profile } = useSelector(state => state.santri)
    const submit = () => {
        let change = ""
        for (let i = 0; i < valueTopUp.length; i++) {
            if (valueTopUp[i] !== ".") {
                change += valueTopUp[i]
            }
        }
        dispatch(postTopup({ nuwb: profile.nuwb, nominal: parseInt(change) }))
        setShowAprove(false)
        setShowAlert(true)
        setValueTopUp("")
    }
    useEffect(() => {
        dispatch(getHistoryTopUp(profile.nuwb))
    }, [showAlert])
    useEffect(() => {
        setValueTopUp((e) => e.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."))
    }, [valueTopUp])
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
            <StatusBar style='light' backgroundColor='#806400' />
            <View>
                <Loader show={loadingPembayaran} />
                <Alert show={showAlert} close={setShowAlert} msg={msgPembayaran} />
                <Alert show={showCopied} close={setShowCopied} msg={"Copied"} />
                <Base
                    title="Pembayaran"
                    navigateTo="Home"
                >
                    <View onTouchStart={() => Keyboard.dismiss()}>
                        <View className="flex flex-row justify-between">
                            <View onTouchStart={() => navigate.navigate("Pembayaran")} className="bg-[#6b7ced] w-[50%] py-3 items-center">
                                <Text>Pembayaran</Text>
                            </View>
                            <View onTouchStart={() => navigate.navigate("TopUp")} className="bg-[#29368c] w-[50%] py-3 items-center">
                                <Text className="text-gray-50">Top Up</Text>
                            </View>
                        </View>
                        <View>
                            <CardTopUp
                                saldo={historyTopup?.saldo}
                                value={valueTopUp}
                                setTopUp={setValueTopUp}
                                set={setShowAprove}
                                no_rek={`9003094${profile.nuwb}`}
                                press={async () => {
                                    await Clipboard.setStringAsync(`9003094${profile.nuwb}`)
                                    setShowCopied(true)
                                }}
                                click={() => {
                                    let change = ""
                                    for (let i = 0; i < valueTopUp.length; i++) {
                                        if (valueTopUp[i] !== ".") {
                                            change += valueTopUp[i]
                                        }
                                    }
                                    if (change !== "" && parseInt(change) >= 10000) {
                                        setShowAprove(true)
                                    }
                                }}
                            />
                        </View>
                        <View className="mx-auto w-full bg-[#29368c] flex flex-row py-2 px-3 mb-1">
                            <Image source={titleHistory} className="w-9 h-9 my-auto" />
                            <Text className=" text-slate-50 mx-1 p-2 text-lg">Catatan Top Up</Text>
                        </View>
                        {Object.keys(historyTopup)?.length !== 0 ?
                            <ScrollView className="mx-3 h-[45%]">
                                {
                                    historyTopup.log.map((d, id) => (
                                        <View key={id} className="my-1 py-3 border border-slate-500 flex flex-row rounded-xl">
                                            <Image source={bgHistory} className="w-12 h-12 my-auto mr-2 ml-[2px]" />
                                            <View>
                                                <Text className="">Aktif : {moment(d.active).tz("Asia/Makassar").format("DD-MM-YYYY ( hh:mm:ss )")}</Text>
                                                <Text className="">Sampai : {moment(d.end).tz("Asia/Makassar").format("DD-MM-YYYY ( hh:mm:ss )")}</Text>
                                                <Text>{`Status : ${d.status === 2 ? "Menunggu" : d.status === 1 ? "Berhasil" : "Tidak Aktif"}`}</Text>
                                                <Text>Top up : {currency(d.nominal)}</Text>
                                                <Text>Admin : {currency(2000)}</Text>
                                                <Text>Total : {currency(d.nominal + 2000)}</Text>
                                            </View>
                                        </View>
                                    ))
                                }
                            </ScrollView>
                            :
                            <View className="flex justify-center items-center h-[55vh]">
                                <Text className="text-xl">Tidak Ada Catatan</Text>
                            </View>
                        }
                    </View>
                    <SetTopUp show={showAprove} close={setShowAprove} aprove={submit} val={valueTopUp} />
                    {/* <SetPayment show={showAprove} close={setShowAprove} aprove={submit} /> */}
                </Base>
            </View>
        </SafeAreaView>
    )
}

export default TopUp