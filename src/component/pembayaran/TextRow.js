import { View, Text } from 'react-native'
import React from 'react'

const TextRow = (props) => {
    return (
        <View className="flex flex-row space-x-2 my-1">
            <Text className="text-lg text-slate-800">{props.title}</Text>
            <Text className="text-lg text-slate-800">:</Text>
            <Text className={`text-slate-800 w-[83%] my-auto ${props.value?.length < 20 ? "text-lg" : props.value?.length >= 20 && props.value?.length < 40 ? "text-md" : "text-sm"} ${props.uppercase ? "uppercase" : ""}`}>{props.value}</Text>
        </View>
    )
}

export default TextRow