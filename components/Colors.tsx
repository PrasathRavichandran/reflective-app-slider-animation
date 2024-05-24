import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated,{ SharedValue, useAnimatedStyle } from "react-native-reanimated";

interface Colors {
  colors: {
    top: string;
    bottom: string;
  };
  index: number;
  translateX: SharedValue<number>;
}

const { width } = Dimensions.get("window");
const RADIUS = 45;
export const COLOR_WIDTH = width / 3;

const styles = StyleSheet.create({
  container: {
    width: COLOR_WIDTH,
    alignItems: "center",
  },
  gradient: {
    borderRadius: RADIUS,
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderWidth: 6,
    borderColor: "white",
  },
});

const Colors: React.FC<Colors> = ({
  colors: { top, bottom },
  index,
  translateX,
}) => {
  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  return (
    <Animated.View style={[styles.container,style]}>
      <LinearGradient colors={[top, bottom]} style={styles.gradient} />
    </Animated.View>
  );
};

export default Colors;
