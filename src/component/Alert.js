import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const Alert = (props) => {
    const [show, setShow] = useState(props.show)
    useEffect(() => {
        setShow(props.show)
    }, [props.show])
    return (
        <View onTouchStart={()=>props.close(false)} className={`absolute top-0 h-[100vh] z-50 w-full flex justify-center items-center ${show ? "block" : "hidden"}`}>
            <View className="bg-slate-100 rounded-md mx-2 w-[80vw] h-14 opacity-100 flex justify-center items-center shadow-md">
                <Text>{props.msg}</Text>
            </View>
        </View>
    )
}

export default Alert