import React from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import { useCart } from '@/components/CartContents';

export default function CheckoutScreen() {
    // reads totals from all that it has gathered
    const {items, total, updateQuantity, removeItem, clear } = useCart();
    return (
        <View style ={styles.container}>
            <FlatList
                 data={items}
                 keyExtractor= {i => i.id}
                 renderItem={({ item }) => (
                    <View style = {styles.row}>
                    <Text style={styles.title}>{item.title} ({item.size})</Text>
                    <Text> UGX={item.price.toLocaleString()} * {item.quantity.toLocaleString()}</Text>
                    <Text> = UGX {(item.price * item.quantity).toLocaleString()}</Text>
                    <View style={styles.controls}>
                        <Button title="+" onPress={() => updateQuantity(item.id, item.quantity + 1)} />
                        <Button title="-" onPress={() => updateQuantity(item.id, item.quantity - 1)} />
                        <Button title="Remove" onPress={() => removeItem(item.id)} />
                    </View>
                </View>
                 )}
            />
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
    title: {
        fontWeight: 'bold'},
    controls: {
        flexDirection: 'row',
        gap:8,
        marginTop:8},
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16}
    
});
