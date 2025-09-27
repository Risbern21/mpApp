import React from "react";
import { Pressable, Text, View } from "react-native";

const Upload = () => {
  return (
    <Pressable
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: "#007AFF",
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <View
          style={{
            width: 36,
            height: 36,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              width: 36,
              height: 4,
              backgroundColor: "#fff",
              borderRadius: 2,
            }}
          />
          <View
            style={{
              position: "absolute",
              width: 4,
              height: 36,
              backgroundColor: "#fff",
              borderRadius: 2,
            }}
          />
        </View>
      </View>
      <Text style={{ color: "#898989" }}>
        Upload your custom image to be analyzed
      </Text>
    </Pressable>
  );
};

export default Upload;
