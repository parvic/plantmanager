import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {

  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

	return (
		<SafeAreaView style={style.container}>
      <View style={style.wrapper}>
        <Text style={style.title}>
          Gerencie {'\n'} 
          suas plantas de  {'\n'} 
          forma fácil
        </Text>

        <Image source={wateringImg} style={style.image}/>
    
        <Text style={style.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity style={style.button} activeOpacity={0.7} onPress={handleStart}>
          <Feather name="chevron-right" style={style.buttonIcon}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
	);
}

const style = StyleSheet.create({
	container: {
		flex:1,
	},
	wrapper: {
		height: '100%',
		paddingHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	title: {
		fontSize: 32,
		fontFamily: fonts.heading,
		fontWeight: 'bold',
		textAlign: 'center',
		color: colors.heading,
		marginTop: 38
	},
	image: {
		width: 292,
		height: 284,
	},
	subtitle: {
		fontSize: 18,
		fontFamily: fonts.heading,
		textAlign: 'center',
		paddingHorizontal: 20,
		color: colors.heading
	},
	button: {
		height: 56,
    width: 56,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.green,
		borderRadius: 16,
    marginBottom: 10,
	},
	buttonIcon: {
		color: colors.white,
		fontSize: 24
	}
})