import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import useThemeColors from "@/hooks/useThemeColor";
import { Octicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
interface HomeButtonProps {
  iconName: any;
  label: string;
}
export default function HomeButton({ iconName, label }: HomeButtonProps) {
  const colors = useThemeColors();

  return (
    <View
      style={[
        styles.homeBtn,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <View>
        <Octicons name={iconName} size={20} color={colors.icon} />
      </View>
      <Text
        style={[
          styles.btnText,
          {
            color: colors.text,
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  homeBtn: {
    width: width * 0.25,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
  },
  btnText: {
    textAlign: "center",
    marginTop: 5,
    fontFamily: "ft",
  },
});
