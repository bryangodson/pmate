import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const useThemeColors = () => {
  const colorScheme = useColorScheme(); // 'light' or 'dark'
  return Colors[colorScheme ?? "light"];
};

export default useThemeColors;
