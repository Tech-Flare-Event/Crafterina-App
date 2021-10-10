import AsyncStorage from '@react-native-async-storage/async-storage'

const CONST_ROLE = "role";
const CONST_TOKEN = "accessToken";
const CONST_TYPE = "auth-token";

export const saveRole = (role) => {
    AsyncStorage.setItem(CONST_ROLE, role);
}

export const saveAccessToken = (token) => {
    AsyncStorage.setItem(CONST_TOKEN, token);
}

export const saveTokenType = (type) => {
    AsyncStorage.setItem(CONST_TYPE, type);
}


export const getRole = () => {
    return AsyncStorage.getItem(CONST_ROLE);
}

export const getAccessToken = () => {
    return AsyncStorage.getItem(CONST_TOKEN);
}

export const getTokenType = () => {
    return AsyncStorage.getItem(CONST_TYPE);
}