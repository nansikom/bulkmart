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
        cover: "https://d6scj24zvfbbo.cloudfront.net/6326288c847382186ffb11779d56045f/200000094-62b7962b7c/crystals-shallow-salt%20-%20Copy%20Compress.jpg?ph=065bd71dad",
        onPress:() => router.push('/screens/SugarDetailsScreen'),

        },

      {
            title: "Soap Category",
            description: "Pure sea salt flakes",
            cover: "https://m.media-amazon.com/images/I/81VAOKqWIBS.jpg",
            onPress:() => router.push('/screens/SoapDetailsScreen'),

      },
      {
            title: "Oil",
            description: "Pink Himalayan salt",
            cover: "https://keshwalagroup.com/wp-content/uploads/2023/03/96.jpg",
            onPress:() => router.push('/screens/OilDetailsScreen'),

      },
      {
            title: "Scholastic materials",
            description: "Coarse cooking salt",
            cover: "https://greenspoon.co.ke/wp-content/uploads/2024/07/greenspoon-kaysalt-1-of-1.jpg"
       
      },{
            title: "Water",
            description: "Fine table salt",
            cover: "https://media.dantty.com/imgs/uploads/Dantty_95770994_2022-05-31.jpg"
       
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
