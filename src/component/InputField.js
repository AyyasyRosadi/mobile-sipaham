import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputField = (props) => {
    return (
        <View className="mb-3">
            <Text className="ml-[2px] mb-[2px]">{props.title}</Text>
            <TextInput
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
                secureTextEntry={props.secure}
                className={`${props.color} py-1 border-b border-b-slate-400 shadow-lg text-slate-800 rounded-md`}
                onChangeText={props.set}
                value={props.value}
                editable={props.readOnly}
                keyboardType={props.keyboard}

            />
        </View>
    )
}

export default InputField