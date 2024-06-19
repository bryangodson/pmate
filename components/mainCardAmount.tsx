import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import useThemeColors from "@/hooks/useThemeColor";
import { Octicons } from "@expo/vector-icons";
interface HomeAmountProps {
  label: string;
  amount: string;
  dotColor: string;
  hasIcon: boolean;
  icon?: any;
}
export default function MainCardAmount({
  label,
  amount,
  dotColor,
  hasIcon,
  icon,
}: HomeAmountProps) {
  const colors = useThemeColors();

  return (
    <View style={styles.amount}>
      {!hasIcon ? (
        <View
          style={[
            styles.dot,
            {
              backgroundColor: dotColor,
            },
          ]}
        ></View>
      ) : (
        <View
          style={{
            marginRight: 5,
            padding: 10,
            borderRadius: 25,
          }}
        >
          <Octicons name={icon} size={15} color={dotColor} />
        </View>
      )}
      <View>
        <Text
          style={[
            styles.amountLabel,
            {
              color: colors.text,
            },
          ]}
        >
          {label}
        </Text>
        <Text
          style={[
            styles.amountFigure,
            {
              color: colors.text,
            },
          ]}
        >
          {"₹" + amount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  amount: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginRight: 10,
  },
  amountLabel: {
    fontFamily: "regular",
  },
  amountFigure: {
    fontSize: 18,
    fontFamily: "bold",
  },
});
