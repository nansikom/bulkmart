import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import HeroSection from "@/components/Herosection";
import Features from "@/components/Features";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeroSection />
      <Features />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    paddingTop: 40,
    marginBottom: 40, // You may need to use marginBottom on each section instead
  },
});