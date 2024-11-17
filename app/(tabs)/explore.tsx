import React, { useState } from "react";
import {
  Canvas,
  Image,
  LinearGradient,
  Rect,
  vec,
  useImage,
} from "@shopify/react-native-skia";
import { View, Text, StyleSheet } from "react-native";
import SliderComponent from "../../components/SliderComponent";
import ColorWheel from 'react-native-wheel-color-picker';
import styles from '../../styles/index';

const Gradient = () => {
  const image = useImage(require("../../constants/oslo.jpg"));

  const [blurValue, setBlurValue] = useState(0);
  const [backdropBlurValue, setBackdropBlurValue] = useState(0);

  // State for storing the colors of the gradient
  const [startColor, setStartColor] = useState("blue");
  const [endColor, setEndColor] = useState("yellow");

  // Function to handle color changes
  const handleColorChange = (setColor: React.Dispatch<React.SetStateAction<string>>) => (color: string) => {
    setColor(color); // Directly set the color string
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Canvas rendering the background image and gradient */}
      <Canvas style={styles.canva}>
        <Image image={image} x={0} y={0} width={420} height={850} fit="cover" />
        <Rect x={75} y={200} width={256} height={256}>
          <LinearGradient
            start={vec(0, 256)}
            end={vec(256, 256)}
            colors={[startColor, endColor]} // Use dynamic colors
          />
        </Rect>
      </Canvas>

      {/* Absolute positioned color pickers */}
      <View style={[styles.colorPickerContainer, styles.startColorPicker]}>
        <ColorWheel
          color={startColor}
          onColorChange={handleColorChange(setStartColor)} // Update with correct color format
          discrete={false}
          row={false}
          sliderHidden={false}
          swatches={false}
        />

      </View>

      <View style={[styles.colorPickerContainer, styles.endColorPicker]}>
        <ColorWheel
          color={endColor}
          onColorChange={handleColorChange(setEndColor)}
          discrete={false}
          row={false}
          sliderHidden={false}
          swatches={false}

        />
      </View>
    </View>
  );
};

export default Gradient;
