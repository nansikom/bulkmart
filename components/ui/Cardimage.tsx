import React, {useState} from 'react';
import { useRouter } from 'expo-router';
import { useCart } from '@/components/CartContents';
import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import products from '@/data/products.json';

interface CreateCardProps {
  title: string;
  cover: string | number; // Adjusted to accept both string URLs and local image references
  sizes:ProductSize[];
  onPress?: () => void;

}
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

const CreateCardImage: React.FC<CreateCardProps> = ({ title,cover,sizes,onPress }) => {
  const router = useRouter();
  const { addItem } = useCart();
  const [currentPrice, setCurrentPrice] = useState(sizes ?  sizes[0].price : 10000); //Default price
  const [selectedWeight, setSelectedWeight] = useState(sizes ? sizes[0].size : '1kg'); //Default weight
  
  const handleWeightSelect = (weight:'string') => {
    if (!sizes) return;
    const selected = sizes.find((s) => s.size === weight);
    if (selected){
    setSelectedWeight(selected.size);
    setCurrentPrice(selected.price);
    }
  };
  const handleAddToCart = () => {
    const id = `${title}-${selectedWeight}`;
    addItem(
      {
        id,
        title,
        price: currentPrice,
        size: selectedWeight,
        cover: typeof cover === 'string' ? cover: '',
        quantity: 1
      }
    );
    //pushes to add to cart screen
    router.push({ pathname:'/screens/addtocartscreen',
          params:{
            title:title,
            price:currentPrice.toString(),
            size:selectedWeight,
            cover:typeof cover === 'string' ? cover: ''
          }
        });};
  
  
  return (
    <Card style={styles.container} onPress={onPress} >
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: typeof cover === 'string' ? cover : '' }} 
      style={styles.cover}
      resizeMode='cover'
      />

      
      <Text style ={styles.price}>
        UGX {currentPrice.toLocaleString()}
      </Text>
      <Card.Actions>
        {sizes?.map((s)=>(
          <Button key ={s.size}style={styles.addToCartButton} onPress={() => handleWeightSelect(s.size)}>{s.size}</Button>
            
        ))}
        </Card.Actions>
      <Card.Actions>
        <Button style = {styles.addToCartButton} textColor='white' onPress={handleAddToCart}>Add to Cart</Button>
      </Card.Actions>
     
    </Card>
  );
};
export default CreateCardImage;
interface Styles {
  container: ViewStyle;
  cover: ImageStyle; // Add this line
  button: ViewStyle; // Add this line
  description: TextStyle;
  price:TextStyle;
  addToCartButton: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    alignContent: 'center',
    margin: 37,
    width:400,
    height:400

  },
  cover:{
    height:200,
    width:'90%',
  },
  description:{
    textAlign: 'left',
    color:'white'
  },
  button:{
    backgroundColor:'yellow',
    flex:1,
    marginHorizontal:4,
  },
  addToCartButton:{
    backgroundColor:'green',
    flex: 1,
  },
  price: {
    textAlign:'left',
    color:'black',
    fontSize:24,
    fontWeight:'bold',
    marginTop:8
  }
});