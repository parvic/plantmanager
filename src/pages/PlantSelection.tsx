import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { FlatList } from "react-native-gesture-handler";

import { EnvironmentButton } from "../components/EnvironmentButton";
import { Header } from "../components/Header";
import { PlantCard } from "../components/PlantCard";
import api from "../services/api";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantProps {
	id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export function PlantSelection() {

  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc');
      setEnvironments([
        {
          title: 'Todos',
          key: 'all'
        }
        ,...data]);
    }

    fetchEnvironment();
  },[]);

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get('plants?_sort=name&_order=asc');
      setPlants(data);
    }

    fetchPlants();
  },[]);

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
      
      <View style={styles.environmentList} >
        <FlatList 
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton title={item.title} key={item.key} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentFlatList}
        />
      </View>

      <View style={styles.plantsList}>
        <FlatList 
          data={plants}
          renderItem={({ item }) => (
            <PlantCard data={item} key={item.id} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          // contentContainerStyle={styles.plantList}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title:{
    marginTop: 50,
    lineHeight:20,
    fontSize: 17,
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  environmentList: {
    marginVertical: 32,
    marginHorizontal: 30,
  },
  environmentFlatList:{
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
  },
  plantsList: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
});