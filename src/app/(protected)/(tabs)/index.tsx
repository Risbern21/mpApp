import HomeHeader from "@/src/components/Header";
import ImageFormat from "@/src/components/ImageFormat";
import GradientBackground from "@/src/constants/GradientBackground";
import images from "@/src/dummyData";
import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <GradientBackground>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: "transparent" }}
      >
        <FlatList
          data={images}
          renderItem={({ item }) => <ImageFormat image={item} />}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => <HomeHeader />}
          contentContainerStyle={{ backgroundColor: "transparent" }}
        />
      </SafeAreaView>
    </GradientBackground>
  );
};

export default HomeScreen;
