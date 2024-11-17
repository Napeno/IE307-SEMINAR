import React from "react";
import { View, Text } from "react-native";
import Slider from '@react-native-community/slider';
import styles from '../styles/index';

const SliderComponent = ({ title, value, style, onValueChange }) => {
  return (
    <View style={style}>
      <Text>{title}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        step={0.1}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FF6347"
      />
    </View>
  );
};

export default SliderComponent;
