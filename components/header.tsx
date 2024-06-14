import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import useThemeColors from "@/hooks/useThemeColor";
import { Octicons } from "@expo/vector-icons";
import { HelloWave } from "@/components/HelloWave";
export default function Header() {
  const colors = useThemeColors();
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View style={styles.header}>
      <View style={styles.user}>
        <Image
          source="https://picsum.photos/seed/696/3000/2000"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
          style={styles.image}
        />
        <View>
          <Text
            style={[
              styles.greetings,
              {
                color: colors.text,
              },
            ]}
          >
            Good Morning
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={[
                styles.name,
                {
                  color: colors.text,
                },
              ]}
            >
              Bryan Benson
            </Text>
            <HelloWave />
          </View>
        </View>
      </View>
      <View style={[styles.icon, { backgroundColor: colors.background }]}>
        <Octicons name="search" size={24} color={colors.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    marginBottom: 25,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 24,
    marginRight: 8,
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "ft",
  },
  greetings: {
    fontSize: 10,
    fontFamily: "ft",
  },
  icon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
