import "react-native-gesture-handler";

import * as React from "react";
import { StyleSheet } from "react-native";
import Colors from "./components/Colors";
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, { useSharedValue } from "react-native-reanimated";

type colors = {
  id: string;
  top: string;
  bottom: string;
};

const COLORS: colors[] = [
  {
    id: "1",
    top: "#55efc4",
    bottom: "#00b894",
  },
  {
    id: "2",
    top: "#81ecec",
    bottom: "#00cec9",
  },
  {
    id: "3",
    top: "#74b9ff",
    bottom: "#0984e3",
  },
  {
    id: "4",
    top: "#a29bfe",
    bottom: "#6c5ce7",
  },
  {
    id: "5",
    top: "#ffeaa7",
    bottom: "#fdcb6e",
  },
  {
    id: "6",
    top: "#fab1a0",
    bottom: "#e17055",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f1f2f6",
  },
});

export default function App() {
  const translateX = useSharedValue(0);
  const prevTranslateX = useSharedValue(0);

  const onGestureEvent = Gesture.Pan()
    .onStart(() => {
      prevTranslateX.value = translateX.value;
    })
    .onUpdate((event) => {
      translateX.value = prevTranslateX.value + event.translationX;
    })
    .runOnJS(true);

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={onGestureEvent}>
        <Animated.View style={styles.container}>
          {COLORS.map((colors, index) => {
            return (
              <Colors
                colors={colors}
                index={index}
                key={index}
                translateX={translateX}
              />
            );
          })}
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
