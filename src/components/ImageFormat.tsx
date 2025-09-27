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
    <Pressable>
      <View
        style={{
          backgroundColor: "#1591EA",
          borderRadius: 10,
          elevation: 3,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
          padding: 10,
          width: 300,
          height:200,
          alignItems: "center",
          marginVertical: 8,
          alignSelf:"center"
        }}
      >
        <Image
          source={{ uri: "react-logo@2x.png" }}
          style={{ width: 200, height: 120, borderRadius: 8 }}
          resizeMode="cover"
        />
        <View style={{ marginTop: 8, alignItems: "center" }}>
          <Text style={{color:"#fff", fontWeight: "bold", fontSize: 16 }}>
            {image.title}
          </Text>
          <Text style={{ color: "#fff", fontSize: 13 }}>{image.location}</Text>
          <Text style={{ color: "#fff", fontSize: 12, marginTop: 2 }}>
            {image.date}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ImageFormat;
