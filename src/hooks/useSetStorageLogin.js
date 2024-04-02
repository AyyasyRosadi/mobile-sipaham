import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useTrigger } from "../provider/Context";

export default function useSetStorageLogin(value, trigger) {
  const { triggerEffect } = useTrigger();
  useEffect(() => {
    const check = async () => {
      try {
        if (Object.keys(value).length !== 0) {
          triggerEffect();
          await AsyncStorage.setItem("userToken", JSON.stringify(value));
        }
      } catch (err) {
        return err;
      }
    };
    check();
  }, [value, trigger]);
}
