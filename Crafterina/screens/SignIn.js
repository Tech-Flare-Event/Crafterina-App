import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
 
} from "react-native";

import { icons, FONTS, COLORS, images } from "../constants/index";
import authService from '../service/authService';

const SignIn = ({ navigation }) => {
  const correctEmail = "deshanc321@gmail.com";
  const correctPassw = "deshbro";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

   const handleLogin = () => {
        authService.login(username,password).then(
          (data) => {
            if(data.role==="GENERAL_USER") {
              alert('Login Succesed!')
              navigation.navigate('Home')
            }
          },

          (error)=>{
            const resMessage =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        setLoading(false);
        setMessage(resMessage);
        console.log(resMessage)
        alert(resMessage);
          }
        )
   }

  return (
    <View style={styles.container}>
      <View style={styles.topball}>
        <Image source={icons.top_ball} />
      </View>

      <View style={styles.textView}>
        <Text style={styles.signIntext}>Sign In</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor={COLORS.black}
          onChangeText={(username) => setUsername(username)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor={COLORS.black}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          
        />
      </View>
      <View style={{ marginLeft: 110, marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => console.log("Forgot password pressed!")}
        >
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.signInButtonView}
        onPress={handleLogin}
      >
        <Text style={styles.signInButtontext}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.lowerBall}>
        <Image source={images.footer_image} style={styles.fotterImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: COLORS.secondary,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    top: "5%",
  },

  signInButtonView: {
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    width: "70%",
    height: 45,
    alignItems: "center",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: COLORS.textblue,
  },

  signIntext: {
    ...FONTS.largeTitle,
    fontWeight: "bold",
  },
  signInButtontext: {
    ...FONTS.buttonTextTitle,
    fontWeight: "bold",
    color: COLORS.white,
  },
  textView: {
    position: "absolute",
    top: "32%",
    width: "25%",
    marginTop: -10,
  },

  topball: {
    position: "absolute",
    width: 250,
    height: 50,
    right: -40,
    top: -230,
  },
  lowerBall: {
    position: "absolute",
    width: 180,
    left: -150,
    top: 580,
  },
  fotterImage: {
    position: "absolute",
    width: 180,
    height: 180,
    top: "20%",
    left: 150,
  },
});

export default SignIn;
