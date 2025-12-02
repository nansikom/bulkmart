import React from 'react';
import {View, Text, FlatList, StyleSheet, Button,Pressable, Image} from 'react-native';
import { useCart } from '@/components/CartContents';
import { ThemedText } from '@/components/ThemedText';
import products from '@/data/products.json';
import {useLocalSearchParams, useRouter } from 'expo-router';

export default function CheckoutScreen() {
    // reads totals from all that it has gathered
    const router = useRouter();

    
    const {items, total, updateQuantity, removeItem, clear, reduceStock } = useCart();
    const handleConfirmPurchase = async () => {
        try{
            await reduceStock(items);
        
         const totalsSting = total.toString();
                            router.push({
                                pathname:'/checkout/shipping',
                                params:{
                                    totals: totalsSting,
                                } as any
                            })
                            clear();
                        } catch (error) {
                            console.error('Error during checkout:', error);
                        }
    };

    return (
        <View style ={styles.container}>
            <FlatList
                 data={items}
                 keyExtractor= {i => i.id}
                 renderItem={({ item }) => (
                    <View style = {styles.row}>
                    <Text style={styles.title}>{item.title} ({item.size})</Text>
                    <Text style={styles.title}> UGX={item.price.toLocaleString()} * {item.quantity.toLocaleString()}</Text>
                    <Text style={styles.title}> = UGX {(item.price * item.quantity).toLocaleString()} </Text>
                    <View style={styles.controls}>
                        <Button title="+" onPress={() => updateQuantity(item.id, item.quantity + 1)} />
                        <Button title="-" onPress={() => updateQuantity(item.id, item.quantity - 1)} />
                        <Button title="Remove" onPress={() => removeItem(item.id)} />
                                 
                    </View>   
                </View>
                 )}
            />
             <ThemedText style={styles.title}> Click Button Below to Provide Payement Information </ThemedText>
            <Button title="Confirm Purchase" onPress={handleConfirmPurchase} />
            <Button title="Proceed to Payment" onPress={() => router.push('/screens/payementscreen')} />


            <Text style={styles.total}> Total: UGX {total.toLocaleString()}</Text>
                <Button title="Clear Cart" onPress={() => clear()} />
            </View>
        
    );
}
const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 16},
    row: {
        marginBottom: 12,
        padding:16 },
  
    controls: {
        flexDirection: 'row',
        gap:8,
        marginTop:8},
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16},
     title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: 'white',
  },
    iconRow:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
    marginTop:10
    },
    icon:{
    width:40,
    height:40,
    resizeMode:'contain'
    }
    
});
