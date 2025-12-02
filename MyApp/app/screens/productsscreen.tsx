import Hero from '@/components/ui/Circle';
import Hero2 from '@/components/ui/othercircle';
import { Platform, StyleSheet, View,Text } from 'react-native';
import { ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Plus as PlusIcon } from 'lucide-react-native';
import { Minus as MinusIcon } from 'lucide-react-native';
import CreateCardImage from '@/components/ui/Cardimage';
import Card from '@/components/ui/Cards';
// screen to show all product categories based on title ,cover and descriptions
// screen utilised materials ui design components

const SaltProductDetailsScreen = () => {
    const router = useRouter();
    const cardData = [
      {
        title: "Salt Products Category",
        description:"Highly quality iodized salt",
        cover: "https://greenspoon.co.ke/wp-content/uploads/2024/07/greenspoon-kaysalt-1-of-1.jpg",
        onPress:() => router.push('/screens/saltproductdetailsscreen'),
      },
      {
        title: "Sugar Category",
        description:"Natural rock salts",
        onPress:() => router.push('/screens/SugarDetailsScreen'),
        cover: "https://ug.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/60004/1.jpg?1989"
        },
      {
            title: "Soap Category",
            description: "Pure sea salt flakes",
            cover: "https://europeansoaps.com/cdn/shop/products/612082761894_16.jpg?v=1666984536",
            onPress:() => router.push('/screens/SoapDetailsScreen'),
      },
      {
            title: "Oil",
            description: "Cooking oil categories",
            cover: require('../../assets/images/oilwes.png'),
            onPress:() => router.push('/screens/OilDetailsScreen'),
      },
      {
            title: "Scholastic materials",
            description: "Coarse cooking salt",
            cover: "https://www.bcanet.org.uk/images/our-focus/education/5.png",
            onPress:() => router.push('/screens/BooksDetailsScreen'),
       
      },{
            title: "Water",
            description: "Fine table salt",
            cover: "https://c8.alamy.com/comp/RD6546/large-stacks-of-bottles-of-water-in-plastic-bottles-for-sale-in-costco-wholesale-RD6546.jpg"
       
      }

    ]
    return (
        <ScrollView  contentContainerStyle={styles.scrollContainer}
                  showsVerticalScrollIndicator={false}>
            
            {/* Grid of Cards */}
            <View style = {styles.gridContainer}>
              {cardData.map((item,index)=>(
                <View key ={index} style={styles.cardWrapper}>
                  <Text>Card {index}: {item.title}</Text>
                  <Card
                    title = {item.title}
                    description={item.description}
                    cover= {item.cover}
                    onPress={item.onPress}
                    />
            </View>
          ))}
            </View>
         </ScrollView>
            );
}
export default SaltProductDetailsScreen;
const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'column',
  },
  gridContainer: {
    flexDirection: 'row', // Arranges children horizontally (left to right)
    flexWrap: 'wrap', // Allows items to wrap to next row when they dont fit
    justifyContent:'space-between', // Distributes items evenly with space between the
    paddingHorizontal: 16,// ad
    width: '100%'// take full width of parent container 
  },
  cardWrapper: {
    width: '30%', // 3 items per row (30% each with some margin)
    marginBottom: 16,
  }
});
