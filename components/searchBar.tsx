import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Keyboard,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import { Octicons } from "@expo/vector-icons";
import useThemeColors from "@/hooks/useThemeColor";
const { width } = Dimensions.get("window");
const SearchBar = () => {
  const colors = useThemeColors();
  useEffect(() => {
    return () => {
      Keyboard.dismiss();
    };
  }, []);

  return (
    <View
      style={[
        styles.search,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <View
        style={{
          width: 40,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.4,
        }}
      >
        <Octicons name="search" size={25} color={colors.icon} />
      </View>
      <TextInput
        keyboardType="default"
        placeholder="Search..."
        placeholderTextColor={colors.text}
        returnKeyType="search"
        style={[
          styles.input,
          {
            color: colors.text,
          },
        ]}
        cursorColor={colors.text}
        blurOnSubmit
        onBlur={() => {
          Keyboard.dismiss();
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search: {
    width: "100%",
    height: 45,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 12,
    // shadowColor: "#333",
    // shadowOffset: {
    //   width: 3,
    //   height: 3,
    // },
    // shadowRadius: 5,
    // shadowOpacity: 0.2,
    // elevation: 5,
  },
  input: {
    width: width - 60,
    height: 45,
    padding: 10,
    fontFamily: "regular",
  },
});
