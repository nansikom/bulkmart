import React, {useState} from 'react';
import { useRouter } from 'expo-router';
import { useCart } from '@/components/CartContents';
import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { Card, Button, Text,useTheme } from 'react-native-paper';
//create card image component to be used in all product detail categories
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
  id?: number;
}
interface Product {
  id: number;
  name: string;
  description: string;
  cover: string;
  sizes:ProductSize[]
}

const CreateCardImage: React.FC<CreateCardProps> = ({ title,cover,sizes, id, onPress }) => {
  const router = useRouter();
  const theme = useTheme();
  
  const { addItem } = useCart();
  const [currentPrice, setCurrentPrice] = useState(sizes ?  sizes[0].price : 10000); //Default price
  const [selectedWeight, setSelectedWeight] = useState(sizes ? sizes[0].size : '1kg'); //Default weight
  
  const handleWeightSelect = (weight:string) => {
    if (!sizes) return;
    const selected = sizes.find((s) => s.size === weight);
    if (selected){
    setSelectedWeight(selected.size);
    setCurrentPrice(selected.price);
    }
  };
  const handleAddToCart = () => {
    const selectedSize = sizes.find((s) => s.size === selectedWeight);
    if (!selectedSize) return;
    const cartid = `${selectedSize.id}-${selectedWeight}`;
    console.log('Adding to cart:', {
      id: cartid,
      title,
      price: currentPrice,
      size: selectedWeight,
    });
    addItem(
      {
        id: cartid,
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
      <Card style={[styles.container, {backgroundColor: theme.colors.surface, shadowColor: theme.colors.backdrop}]} onPress={onPress}>
        <Card.Content style ={styles.content}>
                <Text variant="titleLarge" style={styles.title}>{title}</Text>
          </Card.Content>
       <Card.Cover
               source={typeof cover === 'string' ? { uri: cover } : cover}
               style={styles.cover}
               resizeMode='cover'
             /> 
         
          <Card.Content>
              <Text style ={styles.price}>
                UGX {currentPrice.toLocaleString()}
              </Text>
          </Card.Content>
      <Card.Actions style={styles.actions}>
        {sizes?.map((s)=>(
          <Button key ={s.size}
                  mode={selectedWeight === s.size ? 'contained' : 'outlined'}
                  buttonColor={selectedWeight == s.size ? theme.colors.primary: undefined}
                  textColor={selectedWeight == s.size ? '#fff': theme.colors.primary}
                  style={styles.weightButton}
                  onPress ={() => handleWeightSelect(s.size)}>
            {s.size}
          </Button>  
        ))}
        </Card.Actions>
        <Card.Actions style={styles.actions}>
          <Button 
                  mode='contained'
                  buttonColor= {theme.colors.primary}
                  textColor='#fff'
                  style={styles.addToCartButton}
                  onPress ={handleAddToCart}>
            Add to Cart
          </Button>  
        
        </Card.Actions>
    
    </Card>
  );
};
export default CreateCardImage;
interface Styles {
  container: ViewStyle;
  cover: ImageStyle; // Add this line
  price:TextStyle;
  content:ViewStyle;
  title:TextStyle;
  actions: ViewStyle;
  weightButton: ViewStyle;
  addToCartButton: ViewStyle;
}
const styles = StyleSheet.create<Styles>({
  container: {
    margin: 16,    //space around the card outside its border
    borderRadius:16,
    overflow:'hidden',  //ensure child content respects border radius
    elevation: 6,  // Android shadow depth
    shadowColor: '#000',  // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.1, // iOS shadow transparency
    shadowRadius: 6, // iOS shadow blur
  },
 cover:{
    height:200,
    width:'100%',
  },
  content:{
    paddingVertical:12,//space inside the card above and below the text 
    paddingHorizontal:16,
  },
  title:{
    fontSize:18,
    fontWeight:'700',
    marginBottom:4, //space below  title and description
  },
  price: {
    textAlign:'left',
    color:'#000',
    fontSize:20,
    fontWeight:'bold',
    marginBottom:8
  },
 
  actions:{
    justifyContent:'flex-end', //aligns the buttons to the right 
    paddingHorizontal:16,  //adds horizonal space in the action container
    paddingBottom:12,  //space at the botton of the action container
  },  
  weightButton:{
    borderRadius:12,  // round corners
    paddingHorizontal:16, //adds horizonal space in the button
    marginRight:8,
    marginBottom:8,
  },
  addToCartButton:{
    flex:1,
    borderRadius:12,
    paddingVertical:6 //vertical space in the cards 
  },
  
});

