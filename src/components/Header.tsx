import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, Platform } from "react-native";

import avatar from "../assets/waterdrop.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header() {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Olá,
        </Text>
        <Text style={styles.userName}>
          Victor
        </Text>
      </View>

      <Image source={avatar} style={styles.avatar} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {},
  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
})
