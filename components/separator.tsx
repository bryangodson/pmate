import { StyleSheet, View } from "react-native";
import React from "react";
import useThemeColors from "@/hooks/useThemeColor";
const Separator = () => {
  const colors = useThemeColors();
  return (
    <View
      style={[
        styles.separator,
        {
          backgroundColor: colors.icon,
        },
      ]}
    ></View>
  );
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    width: 1,
    height: 18,
    opacity: 0.3,
  },
});
