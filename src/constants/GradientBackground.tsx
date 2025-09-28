import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet } from "react-native";
import { colors } from ".";

const GradientBackground = ({ children }: { children: ReactNode }) => {
  return (
    <LinearGradient
      colors={[colors.grad1, colors.grad2]}
      style={styles.gradient}
      start={{ x: 0, y: 0.9 }} 
      end={{ x: 1, y: 0.6 }} 
    >
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default GradientBackground;
