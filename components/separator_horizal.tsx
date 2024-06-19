import { StyleSheet, View } from "react-native";
import React from "react";
import useThemeColors from "@/hooks/useThemeColor";
const SeparatorHorizontal = () => {
  const colors = useThemeColors();
  return (
    <View
      style={{
        width: "100%",
        height: 1,
        backgroundColor: colors.text,
        opacity: 0.1,
      }}
    ></View>
  );
};

export default SeparatorHorizontal;
