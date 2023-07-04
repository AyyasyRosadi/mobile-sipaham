import { authAction } from "../store/slice/auth"
import { store } from "../store"


export const logOut = async() => {
    store.dispatch(authAction.clearAuth())
}