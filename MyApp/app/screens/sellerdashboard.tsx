import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import HeroSection from "@/components/Herosection";
import Features from "@/components/Features";
import OrdersTable from  "@/components/dashboard/table";
import SellerDashboard from "@/components/dashboard/bargraph";

export default function Home() {
  return (
      <ScrollView contentContainerStyle={styles.container}>
        <SellerDashboard />
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