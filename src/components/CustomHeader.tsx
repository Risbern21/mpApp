import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../constants";

const CustomHeader = ({ title }: { title: string }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="p-4 flex-row justify-between items-center gap-4"
      style={{
        height: insets.top + 45,
        paddingTop: insets.top + 10,
        paddingLeft: insets.left + 10,
        marginBottom:5,
        flexDirection: "row",
        gap: 10,
      }}
    >
      <View
        style={{
          padding: 5,
          borderRadius: 140,
          width: 30,
          height: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="chevron-back" size={20} color={colors.text2} />
      </View>

      <Text style={{ color:colors.text2, fontSize: 20, fontWeight: "500" }}>
        {title}
      </Text>
    </View>
  );
};

export default CustomHeader;
