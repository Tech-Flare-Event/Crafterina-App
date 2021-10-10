import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { icons, FONTS, COLORS, images } from "../constants/index";
import authService from '../service/authService';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignup = () => {
    authService.register(username,email,password).then(
      (data) => {
        
          alert(data.message)
          navigation.navigate('Login')
        
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
    console.log(username,email,password)
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
        <Text style={styles.signIntext}>Sign Up </Text>
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
          placeholder="Email"
          placeholderTextColor={COLORS.black}
          onChangeText={(email) => setEmail(email)}
          
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor={COLORS.black}
          onChangeText={(password) => setPassword(password)}
          
        />
      </View>

      <TouchableOpacity
        style={styles.signUpButtonView}
        onPress={handleSignup}
      >
        <Text style={styles.signUpButtontext}>Sign Up</Text>
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
  topball: {
    position: "absolute",
    width: 250,
    height: 50,
    right: -40,
    top: -230,
  },
  signIntext: {
    ...FONTS.largeTitle,
    fontWeight: "bold",
  },
  textView: {
    position: "absolute",
    top: "32%",
    width: "25%",
    marginTop: -18,
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
  signUpButtonView: {
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    width: "70%",
    height: 45,
    alignItems: "center",
    marginTop:30
  },
  signUpButtontext: {
    ...FONTS.buttonTextTitle,
    fontWeight: "bold",
    color: COLORS.white,
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

export default SignUp;
