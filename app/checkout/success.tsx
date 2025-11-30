import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SearchParams, useRouter, useLocalSearchParams } from 'expo-router';

const Success = () => {
    const router = useRouter();
    const { orderNumber, shippingdata } = useLocalSearchParams();
    console.log('Params:', orderNumber, shippingdata);
    const shippingDataStr = Array.isArray(shippingdata) ? shippingdata[0] : shippingdata ?? '';

    let shipping: Record<string, any> = {};
    try {
        shipping = shippingDataStr ? JSON.parse(shippingDataStr) : {};
    } catch (e) {
        console.warn('Failed to parse shipping data', e);
        shipping = {};
    }
    const totals = shipping.totals;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Order Successful!</Text>
            <Text style={styles.orderNumber}>Your order number is: {orderNumber}</Text>
            <View style={styles.shippingInfo}>
                <Text style={styles.sectionTitle}>Shipping Information:</Text>
                <Text>Name: {shipping.firstName} {shipping.lastName}</Text>
                <Text>Address Line 1: {shipping.address1}</Text>
                <Text>Address Line 2: {shipping.address2}</Text>
                <Text>City: {shipping.city}</Text>
                <Text>State: {shipping.state}</Text>
                <Text>Zip: {shipping.zip}</Text>
                <Text>Country: {shipping.country}</Text>
                <Text>Total Paid: ${totals}</Text>
                <Text style={styles.sectionTitle}>Total Paid: UGX {totals}</Text>

            </View>
            <Button title="Back to Home" onPress={() => router.push('/')} />
        </View>
    );
}
export default Success;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'  // Set background color to black
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color:'black'

    },
    orderNumber: {
        fontSize: 18,
        marginBottom: 20,
        color:'black'

    },
    shippingInfo: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
        color:'white',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'green'
    },
});