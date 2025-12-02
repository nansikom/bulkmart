import CreateCard from '@/components/ui/Cards';
import { Platform, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
// screen utilised materials ui design components

const SaltDetailsScreen = () => {
    const router = useRouter();
    
    return (
        <ScrollView  contentContainerStyle={styles.scrollContainer}
                   showsVerticalScrollIndicator={false}>
          <CreateCard
          title="Iodized  Salt"
          description="Fortified salt for healthy living"
          cover = "https://i5.walmartimages.com/asr/82e4bea9-1168-49fa-8341-c309a1163ca4.2dd8c9eb5f7923d6c11b9754a8bd2e78.jpeg"
          onPress={() => router.push('/screens/saltproductdetailsscreen')}
           />
          <CreateCard
          title="Kay Salt"
          description="Refined, fine salt for everyday use"
          cover= "https://greenspoon.co.ke/wp-content/uploads/2024/07/greenspoon-kaysalt-1-of-1.jpg"
          onPress={() => router.push('/screens/saltproductdetailsscreen')}
           />
          <CreateCard
            title="Kampala Salt"
            description="Locally mined, coarse salt"
            cover = "https://d6scj24zvfbbo.cloudfront.net/6326288c847382186ffb11779d56045f/200000094-62b7962b7c/crystals-shallow-salt%20-%20Copy%20Compress.jpg?ph=065bd71dad"
            onPress={() => router.push('/screens/saltproductdetailsscreen')}
            />
         
</ScrollView>
);
}
export default SaltDetailsScreen;
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



