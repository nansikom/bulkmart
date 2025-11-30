import CreateCard from '@/components/ui/Cards';
import { Platform, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import React from 'react';

const BooksDetailsScreen = () => (
    <ScrollView  contentContainerStyle={styles.scrollContainer}
                   showsVerticalScrollIndicator={false}>
          <CreateCard
          title="Salt"
          description="Salt categories"
          cover={require('@/assets/images/salt.jpg')}
           />
          <CreateCard
          title="Sugar"
          description="Sweet sugar"
          cover={require('@/assets/images/sugar.jpg')}
           />
          <CreateCard
          title="Oil"
            description="Cooking oil"
            cover={require('@/assets/images/oil.png')}
            />
</ScrollView>
);
export default BooksDetailsScreen;
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'column',
  },
});




