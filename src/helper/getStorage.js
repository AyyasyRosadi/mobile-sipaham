import AsyncStorage from "@react-native-async-storage/async-storage";

const getStorage = async (key) => {
  const res = await AsyncStorage.getItem(key);
  return res
};

export default getStorage