import { EvilIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export type ImageProps = {
  url: string;
  title: string;
  location: string;
  date: string;
  id: string;
};

const ImageFormat = ({ image }: { image: ImageProps }) => {
  return (
    <Link href={`/details/${image.id}`} asChild>
      <Pressable
        style={{
          backgroundColor: "#ffffff",
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
              color: "#000",
              fontWeight: "bold",
              fontSize: 14,
              flexWrap: "wrap",
            }}
          >
            {image.title}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <EvilIcons name="location" size={20} color="#898989" />
            <Text style={{ color: "#898989", fontSize: 13, flexWrap: "wrap" }}>
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
            <EvilIcons name="calendar" size={20} color="#898989" />
            <Text
              style={{
                color: "#898989",
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
              backgroundColor: "#007AFF",
              borderRadius: 70,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 12,
                fontWeight: "600",
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
            >
              23 Particles
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default ImageFormat;
