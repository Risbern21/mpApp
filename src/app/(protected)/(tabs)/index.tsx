import HomeHeader from "@/src/components/Header";
import ImageFormat from "@/src/components/ImageFormat";
import images from "@/src/dummyData";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView edges={["top", "bottom"]} style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={images}
        renderItem={({ item }) => <ImageFormat image={item} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
