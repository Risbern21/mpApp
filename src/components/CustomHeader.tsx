import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomHeader = ({ title }: { title: string }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="p-4 flex-row justify-between items-center gap-4"
      style={{
        backgroundColor: "#0EA5E9",
        height: insets.top + 45,
        paddingTop: insets.top + 10,
        paddingLeft: insets.left + 10,
        flexDirection: "row",
        gap: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "#B3CEE5",
          padding: 5,
          borderRadius: 140,
          width: 30,
          height: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="chevron-back" size={20} color="white" />
      </View>

      <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
        {title}
      </Text>
    </View>
  );
};

export default CustomHeader;
