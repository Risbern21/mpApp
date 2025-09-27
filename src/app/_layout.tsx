import { Slot } from "expo-router";
import "../../global.css";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";

export default function RootLayout() {
  return (
      <Slot />
  );
}
