import React, { useState } from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableWithoutFeedback, 
  Keyboard, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { useNavigation } from "@react-navigation/core";

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setisFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setisFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setisFilled(!!value);
    setName(value);
  }

  const navigation = useNavigation();

  function handleConfirmation() {
    navigation.navigate('Confirmation');
  }

	return (
		<SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.emoji}>
              "=)"
            </Text>

            <Text style={styles.title}>
              Como podemos {'\n'}
              chamar você?
            </Text>

            <TextInput 
              style={[styles.input,
              (isFocused || isFilled) && {borderColor: colors.green}]}
              placeholder="Digite seu nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />

            <View style={styles.footer}>
              <Button 
                title="Confirmar" 
                onPress={handleConfirmation} 
                disabled={!name} 
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex:1,
	},
	content: {
		flex: 1,
		width: '100%'
	},
	form: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 54,
		alignItems: 'center'
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
	input: {
		borderBottomWidth: 1,
		borderColor: colors.gray,
		color: colors.gray,
		width: '100%',
		fontSize: 18,
		marginTop: 50,
		padding: 10,
    textAlign: 'center',
	},
	footer: {
		width: '100%',
		paddingHorizontal: 20,
		marginTop: 40
	}
})