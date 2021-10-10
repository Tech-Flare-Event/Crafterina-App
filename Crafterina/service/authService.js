import { saveAccessToken,saveRole,saveTokenType } from "../util/mobile_storage";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { axiosInstance } from "../axiosInstance";

const API_URL = "/auth";

const register = async(username,password,email) => {

    try{
      const response = await axiosInstance.post(API_URL + "/signup", {
         username,
         email,
         password
       });
  
       return response.data;
  
    }catch(err){
      throw err;
    }
  
  
      
  };

  const login = async (username, password) => {
    try {


        // console.log(username+' '+password)
        const response = await axiosInstance
            .post(API_URL + "/login", {
                username,
                password,
            });

        if (response.data) {
            AsyncStorage.setItem("user", JSON.stringify(response.data));

            saveRole(response.data.role);
            saveAccessToken(response.data.token);
            saveTokenType(response.data.tokenType);
        }
        return response.data;
    }
    catch (e) {
        throw e;
    }
};

const logout = () => {
    AsyncStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(AsyncStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};