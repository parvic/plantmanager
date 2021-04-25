import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

import colors from "../styles/colors";
import fonts from "../styles/fonts";


interface PlantCardProps {
  data: {
    name: string;
    photo: string;
  }
}

export function PlantCard({ data, ...rest }: PlantCardProps) {
  return(
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Text style={styles.text}>
        { data.name }
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    alignItems: 'center',
    paddingVertical: 10,
    margin: 10,
    backgroundColor: colors.shape,
    borderRadius: 20,
  },
  text: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16,
  }
})