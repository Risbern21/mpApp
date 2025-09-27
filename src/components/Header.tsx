import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="p-4 flex-row justify-between items-center gap-4"
      style={{
        backgroundColor: "#0EA5E9",
        height: insets.top + 45,
        paddingTop: insets.top + 10,
        paddingLeft: insets.left + 10,
      }}
    >
      <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
        PlasticPulse
      </Text>
    </View>
  );
};

export default HomeHeader;