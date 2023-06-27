import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

const Loader = (props) => {
    const [show, setShow] = useState(props.show)
    useEffect(() => {
        setShow(props.show)
    }, [props.show])
    return (
        <View className={`absolute bg-slate-800 top-0 opacity-30 h-[100vh] z-50 w-full flex justify-center items-center ${show ? "block" : "hidden"}`}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
}

export default Loader