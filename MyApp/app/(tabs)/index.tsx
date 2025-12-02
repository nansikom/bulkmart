import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import HeroSection from "@/components/Herosection";
import Features from "@/components/Features";
import LoginScreen from  "@/components/login";
import { ThemeProvider } from '@mui/material/styles';

export default function Home() {
  return (
      <ScrollView contentContainerStyle={styles.container}>
          <LoginScreen/>
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