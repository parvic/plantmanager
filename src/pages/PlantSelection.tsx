import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { EnvironmentButton } from "../components/EnvironmentButton";

import { Header } from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function PlantSelection() {

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text style={styles.subtitle}>
          Você quer deixar sua planta?
        </Text>

      </View>
      <FlatList 
        data={[1, 2, 3, 4, 5]}
        renderItem={({ item }) => (
          <EnvironmentButton title="Cozinha" />
          )}
          
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.environmentList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingTop: 50,
  },
  header: {

  },
  title:{
    fontSize: 17,
    fontFamily: fonts.heading,
    color: colors.body_dark,
    paddingTop: 50,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.body_dark,
  },
  environmentList: {

  }
});