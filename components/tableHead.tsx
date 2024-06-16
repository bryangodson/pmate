import { View, Text } from "react-native";
import React from "react";
import useThemeColors from "@/hooks/useThemeColor";
interface tableHeadInterface {
  leftLabel: string;
  RightLabel: string;
  isItem?: boolean;
}
export default function TableHead({
  leftLabel,
  RightLabel,
  isItem,
}: tableHeadInterface) {
  const colors = useThemeColors();
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: !isItem ? colors.background : "",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isItem ? 12 : 8,
        marginTop: !isItem ? 10 : 0,
        marginBottom: !isItem ? 5 : 0,
        borderRadius: 10,
        height: isItem ? 50 : 40,
      }}
    >
      <Text
        style={{
          color: colors.text,
          fontSize: 20,
          fontFamily: "ft",
        }}
      >
        {leftLabel}
      </Text>
      <Text
        style={{
          color: colors.text,
          fontSize: 20,
          fontFamily: "ft",
        }}
      >
        {RightLabel}
      </Text>
    </View>
  );
}
