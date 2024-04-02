import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputField = ({title,defaultValue,placeholder,secure,color,setValue,value,readOnly,keyboard}) => {
    return (
        <View className="mb-3">
            <Text className="ml-[2px] mb-[6px]">{title}</Text>
            <TextInput
                defaultValue={defaultValue}
                placeholder={placeholder}
                secureTextEntry={secure}
                className={`${color} py-2  border-b border-b-slate-400 shadow-lg text-slate-800 rounded-md`}
                onChangeText={setValue}
                value={value}
                editable={readOnly}
                keyboardType={keyboard}

            />
        </View>
    )
}

export default InputField