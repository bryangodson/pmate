import { Text, View, Pressable } from "react-native";
import React from "react";
import useThemeColors from "@/hooks/useThemeColor";
import { Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
interface linkProps {
  label: string;
  icon: any;
  link: string;
  isSignOut?: boolean;
}
const ProfileLink = ({ label, icon, link, isSignOut }: linkProps) => {
  const colors = useThemeColors();
  return (
    <Link href={link} asChild>
      <Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 8,
            alignItems: "center",
            height: 55,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Octicons
              name={icon}
              color={isSignOut ? "#c1817c" : colors.coloredIcon}
              size={18}
            />
            <Text
              style={{
                color: isSignOut ? "#c1817c" : colors.text,
                fontSize: 16,
                marginLeft: 15,
                fontFamily: "regular",
              }}
            >
              {label}
            </Text>
          </View>
          <Octicons
            name="chevron-right"
            color={isSignOut ? "#c1817c" : colors.icon}
            size={20}
            style={{
              opacity: 0.6,
            }}
          />
        </View>
      </Pressable>
    </Link>
  );
};

export default ProfileLink;
