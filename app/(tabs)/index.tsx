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
        <HomeButton
          iconName="beaker"
          label="Rate Master"
          navRoute="../rateMaster"
        />
        <HomeButton iconName="flame" label="Sales" navRoute="../sales" />
        <HomeButton
          iconName="credit-card"
          label="Credits"
          navRoute="../credits"
        />
        <HomeButton iconName="log" label="Reports" navRoute="../reports" />
        <HomeButton
          iconName="arrow-switch"
          label="Expenses"
          navRoute="../expenses"
        />
        <HomeButton
          iconName="calendar"
          label="Attendance"
          navRoute="../attendance"
        />
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
});
