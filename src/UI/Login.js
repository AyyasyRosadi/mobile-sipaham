import { View, Text, Image, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Logo from "../assets/ponpes.png"
import InputField from '../component/InputField'
import Open from "../assets/view.png"
import Close from "../assets/hide.png"
import { useDispatch, useSelector } from 'react-redux'
import { islogin } from '../store/actions/auth'
import { useNavigation } from '@react-navigation/native'
import Loader from '../component/Loader'
import Alert from '../component/Alert'
import AlertBottom from '../component/AlertBottom'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { authAction } from '../store/slice/auth'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const navigate = useNavigation()
    const [no_hp, setNo_hp] = useState("")
    const [pwd, setPwd] = useState("")
    const [secure, setSecure] = useState(false)
    const [msg, setMsg] = useState(0)
    const [showAlert, setShowAlert] = useState(false)
    const { userAuth, loadingAuth, msgAuth } = useSelector(state => state.auth)
    const login = () => {
        dispatch(islogin({ noTelpon: `0${no_hp}`, password: pwd }))
        setMsg(0)
    }
    useEffect(() => {
        if (no_hp[0] === 0 || no_hp[0] === "0") {
            setNo_hp("")
        }
    }, [no_hp])
    useEffect(() => {
        setMsg((e) => e + 1)
        if (msg > 0) {
            setShowAlert(true)
        }
    }, [loadingAuth])
    useEffect(() => {
        const check = async () => {
            try {
                if (Object.keys(userAuth).length !== 0) {
                    await AsyncStorage.setItem("userToken", JSON.stringify(userAuth))
                }
            }
            catch (err) {
                return err
            }
        }
        check()
    }, [userAuth, loadingAuth])
    useEffect(() => {
        if (showAlert) {
            const interval = setInterval(() => {
                setShowAlert(false)
            }, 2000)
            return () => clearInterval(interval)
        }
    }, [showAlert])
    return (
        <KeyboardAvoidingView behavior='height' className="flex h-full">
            <SafeAreaView/>
            <StatusBar style='light' backgroundColor='#ffff' />
            {/* <View className=" bg-white h-[110vh]"> */}
            <View className="flex h-full justify-around">
                <AlertBottom show={showAlert} close={setShowAlert} msg={"No Hp Atau Password Salah"} />
                <Loader show={loadingAuth} />
                <View className="mx-auto flex flex-col justify-center h-[97vh] w-[80vw]">
                    <Image className="w-28 h-28 mx-auto" source={Logo} />
                    <Text className="text-center text-2xl my-2">SiPaham</Text>
                    <View className="relative">
                        <Text className="absolute z-10 top-[33px] left-2">+62</Text>
                        <InputField
                            title="No Hp"
                            value={no_hp}
                            color="bg-slate-200 pl-9"
                            set={setNo_hp}
                            keyboard="number-pad"
                        />
                    </View>
                    <View className="relative">
                        <InputField
                            secure={secure}
                            title="Password"
                            value={pwd}
                            color="bg-slate-200 px-2"
                            set={setPwd}
                        />
                        <View onTouchStart={() => setSecure(!secure)} className="absolute right-2 top-7">
                            <Image className="w-5 h-5" source={secure ? Close : Open} />
                        </View>
                    </View>
                    <View onTouchStart={login} className="bg-[#dbad17] rounded-lg w-full my-2"><Text className="mx-auto py-3">Masuk</Text></View>
                </View>
            </View>
           
    
        </KeyboardAvoidingView>

    )
}


export default Login