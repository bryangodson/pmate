import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import useThemeColors from "@/hooks/useThemeColor";
import Header from "@/components/header";
import HomeButton from "@/components/homeButton";
import MainCard from "@/components/mainCard";
const { width } = Dimensions.get("window");
export default function Home() {
  const colors = useThemeColors();

  return (
    <View style={[styles.container]}>
      {/* header components */}
      <Header />
      {/* buttons */}
      <View style={styles.buttons}>
        <HomeButton iconName="beaker" label="Rate Master" />
        <HomeButton iconName="flame" label="Sales" />
        <HomeButton iconName="credit-card" label="Credits" />
        <HomeButton iconName="log" label="Reports" />
        <HomeButton iconName="arrow-switch" label="Expenses" />
        <HomeButton iconName="calendar" label="Attendance" />
      </View>
      {/* main card*/}
      <MainCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 30,
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    columnGap: 10,
    rowGap: 15,
  },
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
