import { Tabs } from "expo-router";
import { Feather, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { colors } from "@/src/constants";

export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.ternary,
      }}
    >
      <Tabs.Screen
        name="details/[id]"
        options={{
          title: "Details",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="microscope" size={size} color={color} />
          ),
        }}
      />
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
        name="upload"
        options={{
          title: "Upload",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="upload" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
