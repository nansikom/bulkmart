import CreateCard from '@/components/ui/Cards';
import { Platform, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import React from 'react';

const OilDetailsScreen = () => (
    <ScrollView  contentContainerStyle={styles.scrollContainer}
                   showsVerticalScrollIndicator={false}>

          <CreateCard
          title="1st Oil Category"
          description="Sunseed oil categories"
          cover="https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/742151/1.jpg?0512"
           />
          <CreateCard
          title="2nd Oil Category"
          description="Roki oil categories"
          cover="https://pictures-uganda.jijistatic.com/22136536_MzAwLTQwMC01YzE0MzQ0ZDcy.webp"
           />
          <CreateCard
          title="3rd Oil Category"
            description=" soyseed Cooking oil categrories"
            cover="https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/6078802/1.jpg?2578"
            />
</ScrollView>
);
export default OilDetailsScreen;
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




