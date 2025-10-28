import React, {useState} from 'react';
import { useRouter } from 'expo-router';
import { useCart } from '@/components/CartContents';
import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
interface CreateCardProps {
  title: string;
  cover: string | number; // Adjusted to accept both string URLs and local image references
  onPress?: () => void;
}

const CreateCardImage: React.FC<CreateCardProps> = ({ title,cover,onPress }) => {
  const router = useRouter();
  const { addItem } = useCart();
  const [currentPrice, setCurrentPrice] = useState(30000); //Default price
  const [selectedWeight, setSelectedWeight] = useState<'1kg'|'2.5kg'| 'sackets'>('1kg'); //Default weight
  const priceMap: { [key in '1kg' | '2.5kg' | 'sackets']: number } = {
    '1kg': 10000,
    '2.5kg': 20000,
    'sackets': 30000
  };
  
  const handleWeightSelect = (weight:'1kg'|'2.5kg'|'sackets') => {
    setSelectedWeight(weight);
    setCurrentPrice(priceMap[weight]);
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
      <Card.Cover source={typeof cover === 'string' ? { uri: cover } : cover} 
      style={styles.cover}
      resizeMode='cover'
      />

      
      <Text style ={styles.price}>
        UGX {currentPrice.toLocaleString()}
      </Text>
      <Card.Actions>
        <Button style={styles.addToCartButton} onPress={() => router.push({ pathname:'/screens/addtocartscreen',
          params:{
            title:title,
            price:currentPrice.toString(),
            size:selectedWeight,
            cover:typeof cover === 'string' ? cover: ''
          }
        })}>Add To Cart</Button>
        <Button style = {styles.addToCartButton} textColor='white' onPress={handleAddToCart}>Add to Cart</Button>
      </Card.Actions>
      <Card.Actions>
        <Button style={styles.button} textColor='black' onPress={()=> handleWeightSelect('1kg')}>1kg</Button>
        <Button style={styles.button} textColor='black' onPress={()=> handleWeightSelect('2.5kg')}>2.5kg</Button>
        <Button style={styles.button} textColor='black' onPress={()=> handleWeightSelect('sackets')}>sackets</Button>
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
