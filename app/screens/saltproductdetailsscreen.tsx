import Hero from '@/components/ui/Circle';
import Hero2 from '@/components/ui/othercircle';
import { Platform, StyleSheet, View,Text } from 'react-native';
import { ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Plus as PlusIcon } from 'lucide-react-native';
import { Minus as MinusIcon } from 'lucide-react-native';
import CreateCardImage from '@/components/ui/Cardimage';

const SaltProductDetailsScreen = () => {
    const router = useRouter();
    const cardData = [
      {
        title: "Kay salt",
        description:"Highly quality iodized salt",
        cover: "https://greenspoon.co.ke/wp-content/uploads/2024/07/greenspoon-kaysalt-1-of-1.jpg",
      },
      {
        title: "Kampala salt",
        description:"Natural rock salts",
        cover: "https://d6scj24zvfbbo.cloudfront.net/6326288c847382186ffb11779d56045f/200000094-62b7962b7c/crystals-shallow-salt%20-%20Copy%20Compress.jpg?ph=065bd71dad",

        },
      {
            title: "Iodized salt",
            description: "Pure sea salt flakes",
            cover: "https://m.media-amazon.com/images/I/81VAOKqWIBS.jpg",
 
      },
      {
            title: "Habari salt",
            description: "Pink Himalayan salt",
            cover: "https://d6scj24zvfbbo.cloudfront.net/6326288c847382186ffb11779d56045f/200000094-62b7962b7c/crystals-shallow-salt%20-%20Copy%20Compress.jpg?ph=065bd71dad",
      },
      {
            title: "Katwe Salt",
            description: "Coarse cooking salt",
            cover: "https://greenspoon.co.ke/wp-content/uploads/2024/07/greenspoon-kaysalt-1-of-1.jpg",

       
      }, 
       {
            title: "Katwe Salt",
            description: "Coarse cooking salt",
            cover: "https://greenspoon.co.ke/wp-content/uploads/2024/07/greenspoon-kaysalt-1-of-1.jpg",

       
      }
    ]
    return (
        <ScrollView  contentContainerStyle={styles.scrollContainer}
                  showsVerticalScrollIndicator={false}>
           
          
            {/* Grid of Cards */}
            <View style = {styles.gridContainer}>
              {cardData.map((item,index)=>(
                <View key ={index} style={styles.cardWrapper}>
                     
                  <CreateCardImage
                    title = {item.title}
                    cover= {item.cover}
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
    width: '90%',// take full width of parent container 
    height:'50%'
  },
  cardWrapper: {
    width: '30%', // 3 items per row (30% each with some margin)
    marginBottom: 16,
    padding:8,
    marginVertical:30,
    marginHorizontal:20
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
