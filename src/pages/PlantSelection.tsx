import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import { Header } from "../components/Header";

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {},
  title:{},
  subtitle: {},
});