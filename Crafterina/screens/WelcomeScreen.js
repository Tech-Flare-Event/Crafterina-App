import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";


import { COLORS, FONTS, icons, images } from "../constants";

const WelcomeScreen = ({navigation}) => {

  
  const [colors, setColors] = useState(COLORS.secondary);
  const [signupColors, setSignupColors] = useState(COLORS.secondary);

  const signInPressed = () => {
    navigation.navigate("SignIn");
    setColors(COLORS.primary);
  };

  const signUpPressed = () => {
    navigation.navigate("SignUp");
    setSignupColors(COLORS.primary);
  };

  return (
    <View style={styles.container}>
      <Image source={icons.logo} style={styles.logo} />

      <TouchableOpacity
        style={[styles.signinButton, { backgroundColor: colors }]}
        onPress={signInPressed}
      >
        <View>
          <Text style={styles.signInText}>Sign In</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.signupButton, { backgroundColor: signupColors }]}
        onPress={signUpPressed}
      >
        <View>
          <Text style={styles.signInText}>Sign Up</Text>
        </View>
      </TouchableOpacity>

      <Image source={images.footer_image} style={styles.fotterImage} />
      <View style={styles.lowerBall}>
        <Image source={icons.footer_ball}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:"center",

  },

  logo: {
    position: "absolute",
    width: 254,
    height: 250,
    left: 50,
    top: 90,
  },
  signinButton: {
    position: "absolute",
    width: 275,
    height: 50,
    left: 45,
    top: 350,
    borderRadius: 30,
  },
  signInText: {
    ...FONTS.buttonTextTitle,
    textAlign: "center",
  },
  signupButton: {
    position: "absolute",
    width: 275,
    height: 50,
    top: 410,
    left: 45,
    justifyContent: "center",
    borderRadius: 30,
  },
  lowerBall: {
    position: "absolute",
    width: 180,
    left: -150,
    top: 580,
  },
  fotterImage: {
    position: "absolute",
    width: 147,
    height: 144,
    top: 480,
    left: 40,
  },
});

export default WelcomeScreen;
