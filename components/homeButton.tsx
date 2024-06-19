import React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { Link } from "expo-router";
import useThemeColors from "@/hooks/useThemeColor";
import { Octicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
interface HomeButtonProps {
  iconName: any;
  label: string;
  navRoute: string;
}
export default function HomeButton({
  iconName,
  label,
  navRoute,
}: HomeButtonProps) {
  const colors = useThemeColors();

  return (
    <Link href={navRoute} asChild>
      <Pressable>
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
      </Pressable>
    </Link>
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
    fontFamily: "regular",
  },
});
