import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputField = (props) => {
    return (
        <View className="mb-3">
            <Text className="ml-[2px] mb-[2px]">{props.title}</Text>
            <TextInput
                className="bg-slate-50 px-2 py-1  border-b border-b-slate-400 shadow-lg"
                onChangeText={props.set}
                value={props.value}
            />
        </View>
    )
}

export default InputField