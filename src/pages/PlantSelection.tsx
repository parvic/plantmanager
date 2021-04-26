import React, { useEffect, useState } from "react";
import { SafeAreaView, 
  View, 
  Text, 
  ActivityIndicator,
  StyleSheet 
} from 'react-native';
import { FlatList } from "react-native-gesture-handler";

import { EnvironmentButton } from "../components/EnvironmentButton";
import { Header } from "../components/Header";
import { Load } from "../components/Load";
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
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  const [page, setPage] = useState(1);

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    const filtered = plants.filter(plant => plant.environments.includes(environment));
    setFilteredPlants(filtered);
  }

  async function fetchPlants() {
    const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
    if(!data)
      return setLoading(true);
    
    if(page > 1) {
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }
    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number) {
    if(distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  }

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

    fetchPlants();
  },[]);

  if(loading)
    return <Load />

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
            <EnvironmentButton 
              title={item.title} 
              key={item.key} 
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentFlatList}
        />
      </View>

      <View style={styles.plantsList}>
        <FlatList 
          data={ environmentSelected === 'all' ? plants : filteredPlants }
          renderItem={({ item }) => (
            <PlantCard data={item} key={item.id} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({distanceFromEnd}) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
          }
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
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});