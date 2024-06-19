import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useThemeColors from "@/hooks/useThemeColor";
import MainCardAmount from "./mainCardAmount";

export default function MainCard() {
  const colors = useThemeColors();

  return (
    <View
      style={[
        styles.mainCard,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <View style={styles.top}>
        {/* top */}
        <MainCardAmount
          label="Spent"
          amount="344.00"
          dotColor="#c1817c"
          hasIcon={false}
        />
        <MainCardAmount
          label="Earned"
          amount="344.00"
          dotColor="#00000090"
          hasIcon={false}
        />
      </View>
      {/* middle */}
      <View style={styles.spent}>
        <Text
          style={[
            styles.spentText,
            {
              color: colors.text,
            },
          ]}
        >
          You spent $1,200 on dining out this month. Let's try and make it lower
        </Text>
      </View>
      {/* last item in card */}
      <View style={styles.last}>
        <Text
          style={[
            styles.spentText,
            {
              color: colors.text,
              fontWeight: "800",
            },
          ]}
        >
          Graph
        </Text>
        <Text
          style={[
            styles.spentText,
            {
              color: colors.text,
              fontWeight: "800",
            },
          ]}
        >
          List
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCard: {
    width: "100%",
    marginTop: 35,
    padding: 15,
    borderRadius: 20,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  spent: {
    marginTop: 20,
  },
  spentText: {
    fontFamily: "regular",
    fontSize: 16,
    lineHeight: 22.4,
  },
  last: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});
