import { Tabs } from "expo-router";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Details",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="microscope" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
