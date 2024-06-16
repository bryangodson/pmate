import * as React from "react";
import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native";
import useThemeColors from "@/hooks/useThemeColor";
import SearchBar from "@/components/searchBar";
import Date from "@/components/date";
import TableHead from "@/components/tableHead";
const { width, height } = Dimensions.get("window");
const RateMaster = () => {
  const colors = useThemeColors();
  const DATA = [
    {
      description: "2T OIL",
      pl_rate: "0.00",
    },
    {
      description: "2T OIL",
      pl_rate: "0.00",
    },
    {
      description: "2T OIL",
      pl_rate: "0.00",
    },
    {
      description: "2T OIL",
      pl_rate: "0.00",
    },
    {
      description: "2T OIL",
      pl_rate: "0.00",
    },
    {
      description: "2T OIL",
      pl_rate: "0.00",
    },
    {
      description: "2T OIL",
      pl_rate: "0.00",
    },
    {
      description: "2T OIL",
      pl_rate: "0.00",
    },
    {
      description: "2T OIL",
      pl_rate: "0.00",
    },
    {
      description: "2T OIL",
      pl_rate: "0.00",
    },
    {
      description: "2T OIL",
      pl_rate: "0.00",
    },
    {
      description: "last item",
      pl_rate: "0.00",
    },
  ];
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.lists}>
        <Date />
        <TableHead leftLabel="Description" RightLabel="PL Rate" />
        <View
          style={[
            styles.flat,
            {
              backgroundColor: colors.background,
            },
          ]}
        >
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TableHead
                leftLabel={item.description}
                RightLabel={item.pl_rate}
                isItem
              />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: "100%",
                  height: 1,
                  backgroundColor: colors.text,
                  opacity: 0.05,
                }}
              ></View>
            )}
          />
        </View>
      </View>
      {/* bottom */}
      <View style={styles.bottom}>
        <View
          style={[
            styles.bottomButton,
            {
              backgroundColor: colors.background,
            },
          ]}
        >
          <Text
            style={[
              styles.text,
              {
                color: "#2b3b68",
              },
            ]}
          >
            Old Rate List
          </Text>
        </View>
        <View
          style={[
            styles.bottomButton,
            {
              backgroundColor: "#2b3b68",
            },
          ]}
        >
          <Text
            style={[
              styles.text,
              {
                color: "white",
              },
            ]}
          >
            New Price List
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RateMaster;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 0,
    flex: 1,
  },
  lists: {
    marginTop: 14,
    padding: 5,
  },
  flat: {
    height: height * 0.59,
    borderRadius: 12,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    position: "absolute",
    bottom: 0,
    width,
  },
  bottomButton: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    fontSize: 18,
    fontFamily: "ft",
    textAlign: "center",
  },
});
