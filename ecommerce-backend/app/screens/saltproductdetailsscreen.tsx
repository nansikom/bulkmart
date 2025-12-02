import Hero from '@/components/ui/Circle';
import Hero2 from '@/components/ui/othercircle';
import { Platform, StyleSheet, View,Text } from 'react-native';
import { ScrollView  } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useRouter } from 'expo-router';
import { Plus as PlusIcon } from 'lucide-react-native';
import { Minus as MinusIcon } from 'lucide-react-native';
import CreateCardImage from '@/components/ui/Cardimage';
import products from '@/data/products.json';

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
const SaltProductDetailsScreen = () => {
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
