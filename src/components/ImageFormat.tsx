import { EvilIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { colors } from "../constants";

export type ImageProps = {
  url: string;
  title: string;
  location: string;
  date: string;
  id: string;
};

const ImageFormat = ({ image }: { image: ImageProps }) => {
  const numParticles = Math.floor(0 + Math.random() * 23);
  return (
    <Link href={`/details/${image.id}`} asChild>
      <Pressable
        style={{
          backgroundColor: colors.primary,
          borderRadius: 10,
          elevation: 3,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
          padding: 10,
          width: 320,
          height: 150,
          alignItems: "center",
          marginVertical: 8,
          alignSelf: "center",
          flexDirection: "row",
          gap: 5,
        }}
      >
        <Image
          source={
            typeof image.url === "string"
              ? { uri: image.url } // remote
              : image.url // local require
          }
          style={{
            width: 120,
            height: 130,
            borderRadius: 8,
            alignSelf: "flex-start",
          }}
          resizeMode="cover"
        />
        <View
          style={{
            alignItems: "flex-start",
            flex: 1,
            flexShrink: 1,
            alignSelf: "baseline",
          }}
        >
          <Text
            style={{
              color: colors.text2,
              fontWeight: "bold",
              fontSize: 14,
              flexWrap: "wrap",
            }}
          >
            {image.title}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <EvilIcons name="location" size={20} color={colors.text2} />
            <Text style={{ color: colors.text2, fontSize: 13, flexWrap: "wrap" }}>
              {image.location}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <EvilIcons name="calendar" size={20} color={colors.text2} />
            <Text
              style={{
                color: colors.text2,
                fontSize: 12,
                flexWrap: "wrap",
              }}
            >
              {image.date}
            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              backgroundColor: colors.secondary,
              borderRadius: 70,
              borderWidth:1,
              borderColor:colors.ternary,
            }}
          >
            <Text
              style={{
                color: colors.text1,
                fontSize: 12,
                fontWeight: "600",
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
            >
              {numParticles} {numParticles == 1 ? "Particle" : "Particles"}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default ImageFormat;
