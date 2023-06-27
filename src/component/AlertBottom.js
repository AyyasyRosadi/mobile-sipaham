import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const AlertBottom = (props) => {
    const [show, setShow] = useState(props.show)
    useEffect(() => {
        setShow(props.show)
    }, [props.show])
    return (
        <View onTouchStart={()=>props.close(false)} className={`absolute h-screen top-0 z-50 w-full flex flex-col justify-end items-center ${show ? "block" : "hidden"}`}>
            <View className="bg-slate-200 rounded-md mx-2 w-[80vw] h-14 opacity-100 flex justify-center items-center shadow-md">
                <Text>{props.msg}</Text>
            </View>
        </View>
    )
}

export default AlertBottom