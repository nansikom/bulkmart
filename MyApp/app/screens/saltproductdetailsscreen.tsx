import Hero from '@/components/ui/Circle';
import Hero2 from '@/components/ui/othercircle';
import { Platform, StyleSheet, View,Text } from 'react-native';
import { ScrollView } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useRouter } from 'expo-router';
import { Plus as PlusIcon } from 'lucide-react-native';
import { Minus as MinusIcon } from 'lucide-react-native';
import CreateCardImage from '@/components/ui/Cardimage';
//screen to detail salt products
interface ProductSize {
  size: string;
  price: number;
  stock: number;
  id?: number;
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
    const [loading, setLoading] = useState(true);
    useEffect(() => {
       const fetchProducts = async () => {
      try {
         const response = await fetch('http://localhost:5000/products/category/Salt');
         const data = await response.json();
         //this is where we set the fetched data to state
         setCardData(data)
         console.log('Fetched products:', data);
         
    } catch (error) {
      console.error('Error fetching products:', error); 
    } finally {
      setLoading(false);
    }
};
fetchProducts();
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
                    productId={item.id}
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

