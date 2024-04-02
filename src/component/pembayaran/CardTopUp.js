import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import InputField from '../InputField'
import TextRow from './TextRow'
import topUp from "../../assets/top-up.png"
import { currency } from '../../helper/currency'
import bsi from "../../assets/bsi.png"


const CardTopUp = ({saldo,press,no_rek,value,setTopUp,click}) => {
    return (
        <View className="border border-slate-800 m-3 py-3 px-2 rounded-xl">
            <View className="flex flex-row justify-between">
                <Text className="text-lg"> Top Up Saldo</Text>
                <Image source={topUp} className="w-8 h-8 my-auto mr-2" />
            </View>
            <View className="w-full h-[1px] bg-slate-600 mt-2 mb-1"></View>
            <View className="">
                <View className="flex flex-col ml-1">
                    <TextRow title="Saldo anda saat ini" value={saldo !== undefined && saldo !== null && saldo !== "" && saldo > 0 ? currency(saldo) : "Rp 0"} />
                    <View className="flex flex-row justify-between">
                        <TouchableOpacity onPress={press} className="w-[65%]">
                            <TextRow title="No VA" value={no_rek} />
                        </TouchableOpacity>
                        <Image source={bsi} className="w-[90px] h-[22px] mt-[7px]"></Image>
                    </View>
                </View>
                <View className="mt-1 ml-[2px]">
                    <InputField title="Masukkan jumlah top up yang anda inginkan" color="bg-slate-200 px-2" keyboard="number-pad" value={value} setValue={setTopUp} />
                    <Text className="text-right text-red-600 mb-1 -mt-2">min Rp 10.000 </Text>
                    <View onTouchStart={click} className="bg-[#29368c]  w-20 rounded-xl"><Text className="mx-auto py-2 text-white">Top Up</Text></View>
                </View>
            </View>
        </View>

    )
}

export default CardTopUp