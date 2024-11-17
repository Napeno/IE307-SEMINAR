import React, { useState } from "react";
import {
  Canvas,
  Fill,
  Image,
  BackdropBlur,
  useImage,
  Blur
} from "@shopify/react-native-skia";
import { View} from "react-native";
import styles from '../../styles/index';
import SliderComponent from "../../components/SliderComponent";

const Filter = () => {
  const image = useImage(require("../../constants/oslo.jpg"));

  const [blurValue, setBlurValue] = useState(0);
  const [backdropBlurValue, setBackdropBlurValue] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={styles.canva}>
        <Image image={image} x={0} y={0} width={420} height={850} fit="cover" />
        {blurValue > 0 && <Blur blur={blurValue}  />}
        {backdropBlurValue > 0 && (
          <BackdropBlur blur={backdropBlurValue} clip={{ x: 0, y: 208, width: 256, height: 128 }}>
            <Fill color="rgba(0, 0, 0, 0.1)" />
          </BackdropBlur>
        )}
      </Canvas>

      <SliderComponent 
        style={styles.sliderContainerA}
        title="Blur Effect"
        value={blurValue}
        onValueChange={setBlurValue}
      />

      <SliderComponent 
        style={styles.sliderContainerB}
        title="BackdropBlur Effect"
        value={backdropBlurValue}
        onValueChange={setBackdropBlurValue}
      />
    </View>
  );
};

export default Filter;
