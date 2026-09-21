import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";

interface accessButtonProps {
  backgroundColor: string;
  text: string;
  textColor: string;
  onPress?: () => void;
  disabled?: boolean;
}

export default function AccessButton({
  backgroundColor,
  text,
  textColor,
  onPress,
  disabled,
}: accessButtonProps) {
  const [colors, setColors] = useState({
    fromBg: backgroundColor,
    toBg: backgroundColor,
    fromText: textColor,
    toText: textColor,
  });
  const progress = useRef(new Animated.Value(1)).current;
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setColors((prev) => ({
      fromBg: prev.toBg,
      toBg: backgroundColor,
      fromText: prev.toText,
      toText: textColor,
    }));
    progress.setValue(0);
    Animated.timing(progress, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [backgroundColor, textColor, progress]);

  const animatedBg = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.fromBg, colors.toBg],
  });
  const animatedText = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.fromText, colors.toText],
  });

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Animated.View style={[styles.container, { backgroundColor: animatedBg }]}>
        <Animated.Text style={[styles.text, { color: animatedText }]}>
          {text}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: 354,
    width: "100%",
    height: 52,
    marginTop: 24.43,
    position: "absolute",
    bottom: 0,
  },
  container: {
    width: "100%",
    height: "100%",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Pretendard",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 700,
  },
});