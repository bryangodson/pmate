import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useThemeColors from "@/hooks/useThemeColor";
import { Octicons } from "@expo/vector-icons";
const Date = () => {
  const colors = useThemeColors();
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Octicons name="calendar" size={18} color={colors.icon} />
      <Text
        style={{
          fontFamily: "regular",
          color: colors.text,
          marginLeft: 8,
          opacity: 0.7,
        }}
      >
        23/04/2424 - 23/04/2424
      </Text>
    </View>
  );
};

export default Date;
