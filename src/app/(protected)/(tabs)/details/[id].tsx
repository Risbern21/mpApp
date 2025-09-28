import CustomHeader from "@/src/components/CustomHeader";
import React, { useState } from "react";
import { View, Image, Text, Pressable, ScrollView } from "react-native";
import images from "@/src/dummyData";
import { ImageProps } from "@/src/components/ImageFormat";
import { useLocalSearchParams } from "expo-router";
import { AntDesign, Entypo, EvilIcons, Ionicons } from "@expo/vector-icons";
import { colors } from "@/src/constants";
import GradientBackground from "@/src/constants/GradientBackground";

function getImage(id: string): ImageProps | null {
  for (let i = 0; i < images.length; i++) {
    if (images[i].id === id) {
      return images[i];
    }
  }
  return null;
}

const Details = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [image] = useState(getImage(id));

  if (image === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>Error:no image id passed</Text>
      </View>
    );
  }

  return (
    <GradientBackground>
      <CustomHeader title="Image Details" />
      <ScrollView>
        <Image
          source={
            typeof image.url === "string"
              ? { uri: image.url } // remote
              : image.url // local require
          }
          style={{ width: "100%", height: 400, resizeMode: "cover" }}
        />
        <View style={{ padding: 20, gap: 15 }}>
          <Text style={{ fontSize: 18 }}>{image.title}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              gap: 5,
            }}
          >
            <EvilIcons name="location" size={24} color="#898989" />
            <Text style={{ fontSize: 16, color: "#898989" }}>
              {image.location}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              gap: 5,
            }}
          >
            <EvilIcons name="calendar" size={24} color="#898989" />
            <Text style={{ fontSize: 16, color: "#898989" }}>{image.date}</Text>
          </View>
          <View
            style={{
              backgroundColor: colors.secondary,
              borderWidth:1,
              borderColor:colors.ternary,
              padding: 10,
              gap: 10,
              borderRadius: 10,
              elevation: 3,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 4,
              shadowOffset: { width: 0, height: 2 },
            }}
          >
            <Text style={{ color: colors.text2 }}>Detection Results</Text>
            <View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Ionicons name="analytics" size={24} color={colors.text2}  />
                <Text style={{ color:colors.text2 }}>23</Text>
              </View>
              <Text style={{ color: colors.text2 }}>
                Microplastics Particles Detected
              </Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Pressable
              style={{
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: colors.secondary,
                borderWidth: 1,
                borderColor: colors.ternary,
                padding: 10,
                width: 100,
              }}
            >
              <AntDesign name="reload" size={24} color={colors.text2} />
              <Text style={{ color: colors.text2 }}>Re-Analyze</Text>
            </Pressable>
            <Pressable
              style={{
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: colors.secondary,
                borderWidth: 1,
                borderColor: colors.ternary,
                padding: 10,
                width: 100,
              }}
            >
              <Entypo name="share" size={24} color={colors.text2} />
              <Text style={{ color: colors.text2 }}>Share</Text>
            </Pressable>
            <Pressable
              style={{
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: colors.secondary,
                borderWidth: 1,
                borderColor: colors.ternary,
                padding: 10,
                width: 100,
              }}
            >
              <AntDesign name="delete" size={24} color={colors.text2} />
              <Text style={{ color: colors.text2 }}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default Details;
