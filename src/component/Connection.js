import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const Connection = ({show,msg}) => {
    const [showConnection, setShowConnection] = useState(show)
    useEffect(()=>{
        setShowConnection(show)
    },[show])
    return (
        <View className={`absolute top-0 bg-[#806400] bg-opacity-40 h-[100vh] z-50 w-full flex justify-center items-center ${showConnection ? "block" : "hidden"}`}>
            <View className="bg-[#f4eede] rounded-md mx-2 w-[80vw] h-14 opacity-100 flex justify-center items-center shadow-md">
                <Text>{msg}</Text>
            </View>
        </View>
    )
}

export default Connection