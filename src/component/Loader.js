import { View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

const Loader = ({show}) => {
    const [showLoading, setShowLoading] = useState(show)
    useEffect(() => {
        setShowLoading(show)
    }, [show])
    return (
        <View className={`absolute bg-slate-100 top-0 opacity-30 h-[100vh] z-50 w-full flex justify-center items-center ${showLoading ? "block" : "hidden"}`}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
}

export default Loader