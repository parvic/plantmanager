import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome() {
	return (
		<SafeAreaView style={style.container}>
			<Text style={style.title}>
				Gerencie {'\n'} 
				suas plantas de  {'\n'} 
				forma fácil
			</Text>

			<Image source={wateringImg} style={style.image}/>
	
			<Text style={style.subtitle}>
				Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
sempre que precisar.
			</Text>

      <TouchableOpacity 
        style={style.button}
        activeOpacity={0.7}>
				<Text style={style.buttonText}>
					>
				</Text>
			</TouchableOpacity>
    </SafeAreaView>
	);
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading
  },
  image: {
    width: 292,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.heading
  },
  button: {
    width: 56,
    height: 56,
    marginBottom: 10,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
})
