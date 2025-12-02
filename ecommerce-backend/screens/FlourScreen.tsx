import React from 'react';
import { FlatList, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import CreateCardImage from '@/components/ui/Cardimage';
import flourProducts from '@/data/flour.json';

export default function FlourScreen() {
  return (
    <ThemedView style={{ flex: 1, paddingVertical: 16 }}>
      <ThemedText style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 }}>
        Flour Products
      </ThemedText>

      <FlatList
        data={flourProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CreateCardImage
            product={item}
          />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </ThemedView>
  );
}