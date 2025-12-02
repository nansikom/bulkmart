import CreateCard from '@/components/ui/Cards';
import { ScrollView } from 'react-native';
import products from '@/data/oil.json';
import { useRouter } from 'expo-router';
import React, {useEffect, useState} from 'react';
import CreateCardImage from '@/components/ui/Cardimage';
import { Platform, StyleSheet, View,Text } from 'react-native';
interface ProductSize {
  size: string;
  price: number;
  stock: number;
}
interface Product {
  id: number;
  name: string;
  description: string;
  cover: string;
  sizes:ProductSize[]
}
const OilDetailsScreen  = () => {
    const router = useRouter();
    const [cardData, setCardData] = useState<Product[]>([]);
    useEffect(() => {
      setCardData(products);
    }, []);
     
    return (
        <ScrollView  contentContainerStyle={styles.scrollContainer}
                  showsVerticalScrollIndicator={false}>
           
          
            {/* Grid of Cards */}
            <View style = {styles.gridContainer}>
              {cardData.map((item)=>(
                <View key ={item.id} style={styles.cardWrapper}>
                     
                  <CreateCardImage
                    title = {item.name}
                    cover = {item.cover}
                    sizes = {item.sizes}
              />
              
            </View>
          ))}
            </View>
         </ScrollView>
            );
}

export default OilDetailsScreen;
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




