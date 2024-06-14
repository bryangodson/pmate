import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useThemeColors from "@/hooks/useThemeColor";
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
        <View style={styles.amount}>
          <View
            style={[
              styles.dot,
              {
                backgroundColor: "#c1817c",
              },
            ]}
          ></View>
          <View>
            <Text
              style={[
                styles.amountLabel,
                {
                  color: colors.text,
                },
              ]}
            >
              Spent
            </Text>
            <Text
              style={[
                styles.amountFigure,
                {
                  color: colors.text,
                },
              ]}
            >
              ₹344.00
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.amount,
            {
              justifyContent: "flex-end",
            },
          ]}
        >
          <View
            style={[
              styles.dot,
              {
                backgroundColor: "#00000090",
              },
            ]}
          ></View>
          <View>
            <Text
              style={[
                styles.amountLabel,
                {
                  color: colors.text,
                },
              ]}
            >
              Earned
            </Text>
            <Text
              style={[
                styles.amountFigure,
                {
                  color: colors.text,
                },
              ]}
            >
              ₹344.00
            </Text>
          </View>
        </View>
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
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  amount: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginRight: 10,
  },
  amountLabel: {
    fontFamily: "ft",
  },
  amountFigure: {
    fontSize: 20,
    fontWeight: "500",
  },
  spent: {
    marginTop: 20,
  },
  spentText: {
    fontFamily: "ft",
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
