import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../constants";

const HomeHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingLeft: insets.left + 20,
        flexDirection: "row",
      }}
    >
      <Text style={{ color: colors.text2, fontWeight: "900", fontSize: 25 }}>
        Plastic
      </Text>
      <Text style={{ color: colors.ternary, fontWeight: "900", fontSize: 25 }}>
        Pulse
      </Text>
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 40, height: 40 }}
      />
    </View>
  );
};

export default HomeHeader;
