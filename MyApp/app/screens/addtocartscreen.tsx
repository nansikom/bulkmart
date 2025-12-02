import React, {useState} from 'react';
import {useLocalSearchParams, useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import {View, Text, FlatList, StyleSheet,TouchableOpacity, Button,Pressable, Image} from 'react-native';
import { Card } from 'react-native-paper';

//screen to add items to cart set quantity annd price and total based on quantity and price
const AddToCartScreen = () => {
    const router = useRouter();
    // Get the parameters passed from the previous screen
    const params = useLocalSearchParams();
    const {
        title= 'No title',
        price='0',
        size='No size',
        cover =''
    } = params;
    const [quantity, setQuantity ] = useState<number>(1);
    const decrement = () => setQuantity(q => Math.max(1, q-1));
    const increment = () => setQuantity(q => (q+1));
    const unitPrice = parseInt(price as string || '0', 10);
    const totalPrice = (unitPrice * quantity);
    const formattedTotal = totalPrice.toLocaleString(); // string like "1,200"
 

    return (
        <View style ={styles.container}>
            <Text style={styles.header}>Products Details</Text>
            <Card style={styles.card}>
            {/* Product Image */}
            {cover && (
                <Image 
                source={{uri: cover as string}}
                style={styles.productImage}
                resizeMode='cover'
                />
            )}
            </Card>
            {/* Product Info */}
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Product Name</Text>
                <Text style={styles.label}>{title}</Text>
                <Text style ={styles.label}>Selected Size:</Text>
                <Text style={styles.value}>{size}</Text>
                <Text style ={styles.label}>Price:</Text>
                <Text style ={styles.priceValue}>UGX {parseInt(price as string).toLocaleString()}</Text>
            </View>
            <View style={styles.infContainer}>
            {/* Add to Cart Button */}
            <TouchableOpacity style={[styles.button,styles.backButton]} onPress={() => router.back()} >
                <Text>Back to products</Text>
            </TouchableOpacity>
            <TouchableOpacity  style ={[styles.button,styles.checkButton]} onPress={() => router.push('/screens/checkoutscreen' as any)}>
                 <Text>Checkout</Text>
            </TouchableOpacity>
            </View>
            <View style = {styles.quantityContainer}>
                <TouchableOpacity onPress ={decrement} style={styles.qtyIconButton}>
                    <Text style={styles.qtyIconText}>-</Text>
                </TouchableOpacity>
                <View style ={styles.qtyValueBox}>
                    <Text style={styles.qtyValueText}>{quantity}</Text>
                </View>
                 <TouchableOpacity onPress ={increment} style={styles.qtyIconButton}>
                    <Text style={styles.qtyIconText}>+</Text>
                </TouchableOpacity>
            
            </View>
          
            

        </View>
    );
};
    

const styles =StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333',
        textAlign: 'center',
    },
    productImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 30,
    },
    infoContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
    },
    infContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:30
    },
    label: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
        marginTop:15,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    priceValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 10,
    },
    card:{
        padding:50,
        margin:10,
        borderRadius:8,
        alignSelf: 'center', // Center the card
        width: '60%',
        backgroundColor:'white',
        alignSelf:'center'
    },
    backButton: {
        backgroundColor: '#08b0f8ff',
        paddingVertical: 10,
        width:'40%',
        alignItems:'center',
    },
    checkButton: {
        backgroundColor: '#9551d4ff',
        paddingVertical: 15,
        width:'40%',
        alignItems:'center',
        justifyContent:'flex-end',

    },
    quantityButton: {
        backgroundColor: '#61239bff',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#08b0f8ff',
        paddingVertical:5,
        paddingHorizontal:10,   
        borderRadius:4,
        alignSelf:'center',
        marginTop:20,
    },
    qtyIconButton:{
        paddingHorizontal:8,
        paddingVertical: 6,

    },
    qtyIconText:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
    },
    qtyValueBox:{
        minWidth:36,
        alignItems:'center',
        justifyContent:'center',
    },
    qtyValueText:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
    },
    buttonText:{
        color:'white',
        fontSize:16,
    },
    button:{
        paddingVertical:15,
        paddingHorizontal:20,
        borderRadius:8,
        alignItems:'center',
    }
    
});

export default AddToCartScreen;
   