import AsyncStorage from "@react-native-async-storage/async-storage"

const removeStorage = async(key)=>{
    await AsyncStorage.removeItem(key)
}

export default removeStorage