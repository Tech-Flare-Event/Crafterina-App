import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";

import {FONTS,icons,images} from '../constants'



const InitialScreen = () => {
  return (
    <View >
      {/* <Text style={styles.title}>Crafterina</Text> */}
      <Image
       source={icons.logo}
       style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    
  },

  title: {
    ...FONTS.largeTitle,
    position: "absolute",
    // color: "#F8D9AB",
  },
  logo:{
      position:"absolute",
      width:254,
      height:250,
      left:80,
      top:140

  }
});

export default InitialScreen;
