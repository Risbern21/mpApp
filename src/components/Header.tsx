import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../constants";

const HomeHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="p-4 flex-row justify-between items-center gap-4"
      style={{
        paddingLeft: insets.left + 20,
      }}
    >
      {/* <Image source={require("../../assets/logo.png")} style={{ width: 250, height: 32}}/> */}
      <Text style={{ color: colors.text2, fontWeight: "900", fontSize: 25 }}>
        PlasticPulse
      </Text>
    </View>
  );
};

export default HomeHeader;
