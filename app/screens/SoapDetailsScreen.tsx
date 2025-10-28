import CreateCard from '@/components/ui/Cards';
import { Platform, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import React from 'react';

const SoapDetailsScreen = () => (
    <ScrollView  contentContainerStyle={styles.scrollContainer}
                   showsVerticalScrollIndicator={false}>

          <CreateCard
          title="1st Soap category"
          description="Soap categories"
          cover="https://ug.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/76/807901/1.jpg?2899"
           />
          <CreateCard
          title="2nd Soap category"
          description="Dettol Soap categories"
          cover="https://www.indiastudychannel.com/attachments/Resources/156595-62625-Dettol-soap-varities.jpg"
           />
          <CreateCard
          title="3rd soap category"
            description="Geisha Soap"
            cover="https://lumbasioholman.wordpress.com/wp-content/uploads/2021/08/geisha-soap-12.jpg"
            />
</ScrollView>
);
export default SoapDetailsScreen;
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




