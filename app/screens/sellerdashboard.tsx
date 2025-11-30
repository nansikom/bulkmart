import { style } from '@mui/system';
import React, {useState} from 'react';
import { Card } from 'react-native-paper';
import {useRouter} from 'expo-router';
import {View, Text, TextInput, Button,Switch, StyleSheet, Alert, ScrollView} from 'react-native';
import {useLocalSearchParams } from 'expo-router';

const SellerDashboard = () => {
    const router = useRouter();
    const {shippingdata} = useLocalSearchParams();
    // Parse the shipping data from the URL parameters if there multiple values return of values else take the first value if its  a single one
    const[firstlastName, setFirstName] = useState('');
    const[cvc, setCvc] = useState('');
    const[expiry, setExpiry] = useState('');
    const[cardnumber, setCardnumber] = useState('');
    const handleSubmit = () => {
        const shippingInfo = {
            firstlastName,
            cardnumber,
            cvc,
            expiry,
        };
        const orderNumber = Math.floor(Math.random() * 1000000);
        // Cast to any to bypass the strict generated route union types for dynamic navigation
        router.push({ pathname: '/checkout/success', params: { orderNumber, shippingdata } } as any);
    };
    return (
        <Card style={styles.card}>
        <ScrollView contentContainerStyle = {styles.container}>
            <Text style= {styles.label}> Full Name*</Text>
            <TextInput style={styles.input} placeholder="First Name" value={firstlastName} onChangeText={setFirstName} />
            <Text style= {styles.label}>Card Number*</Text>
            <TextInput style={styles.input} placeholder="212345452244522" value={cardnumber} onChangeText={setCardnumber} />
             <Text style= {styles.label}>CVC*</Text>
            <TextInput style={styles.input} placeholder="256" value={cvc} onChangeText={setCvc} />
            <Text style= {styles.label}>Expiry Date*</Text>
            <TextInput style={styles.input} placeholder = "MM/YY"value={expiry} onChangeText={setExpiry} />
            
  
            <Button title="Submit" onPress={handleSubmit} />
        </ScrollView>
        {/*ScrollView to hold multiple elements*/}
          </Card>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label:{
        fontWeight: 'bold',
        marginTop: 15,
        color:'black'
    },
    input:{
        borderWidth: 1,
        borderColor:'#ccc',
        borderRadius: 15,
        padding:15,
        marginTop:5,
        backgroundColor:'white'
    },
    switchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    card:{
        padding:20,
        margin:10,
        borderRadius:8,
        backgroundColor:'white',
        alignSelf: 'center', // Center the card
        width: '50%'
    }

});
export default SellerDashboard;
    

