import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
	return (
		<SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          "=)"
        </Text>

        <Text style={styles.title}>
          Prontinho!
        </Text>

        <Text style={styles.subtitle}>
            Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button title="Começar"/>
        </View>
      </View>
		</SafeAreaView>			
	);
}

const styles = StyleSheet.create({
	container: {
		flex:1,
  },
  content: {
		flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 54,
	},
	emoji: {
		fontSize: 44
	},
	title: {
		fontSize: 24,
		lineHeight: 32,
		fontFamily: fonts.heading,
		textAlign: 'center',
		color: colors.heading,
		marginTop: 20
  },
  subtitle: {
		fontSize: 18,
		fontFamily: fonts.text,
		textAlign: 'center',
		paddingVertical: 20,
    
		color: colors.heading
	},
	footer: {
		width: '100%',
		paddingHorizontal: 20,
		marginTop: 40
	}
});