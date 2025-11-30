import { style } from '@mui/system';
import React, {useState} from 'react';
import { Card } from 'react-native-paper';
import {useLocalSearchParams, useRouter} from 'expo-router';

import {View, Text, TextInput, Button,Switch, StyleSheet, Alert, ScrollView} from 'react-native';
const ShippingAddressForm = () => {
    const router = useRouter();
    const { totals } = useLocalSearchParams();
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[address1, setAddress] = useState('');
    const[address2, setAddress2] = useState('');
    const[city, setCity] = useState('');
    const[state, setState] = useState('');
    const[zip, setZip] = useState('');
    const[country, setCountry] = useState('');
    const[useForPayment, setUseForPayment] = useState(false);
    const handleSubmit = () => {
        const shippingInfo = {
            firstName,
            lastName,
            address1,
            address2,
            city,
            state,
            zip,
            country,
            useForPayment,
            totals
        };
        
        console.log('Shipping Info:', shippingInfo);
        const shippingdata = { firstName, lastName, address1, address2, city, state, zip, country, useForPayment, totals };
        router.push({ pathname: '/checkout/payment', params: { shippingdata: JSON.stringify(shippingdata) } } as any);
    };
    return (
        <Card style={styles.card}>
        <ScrollView contentContainerStyle = {styles.container}>
            <Text style= {styles.label}>First Name*</Text>
            <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
            <Text style= {styles.label}>Last Name*</Text>
            <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
            <Text style= {styles.label}>Address Line 1*</Text>
            <TextInput style={styles.input} placeholder = "Street Name and number"value={address1} onChangeText={setAddress} />
            <Text style= {styles.label}>Address Line 2</Text>
            <TextInput style={styles.input} placeholder = "Apartment suite number "value={address2} onChangeText={setAddress2} />
            <Text style= {styles.label}>City*</Text>
            <TextInput style={styles.input} placeholder = "New York"value={city} onChangeText={setCity} />
            <Text style= {styles.label}>State/Province/Region*</Text>
            <TextInput style={styles.input} placeholder = "OR"value={state} onChangeText={setState} />
            <Text style= {styles.label}>Zip / Postal code*</Text>
            <TextInput style={styles.input} placeholder = "97035"value={zip} onChangeText={setZip} />
            <Text style= {styles.label}>Country*</Text>
            <TextInput style={styles.input} placeholder ="UGA" value={country} onChangeText={setCountry} />
            <View style={styles.switchContainer}>
               <Text>Use this address for payement</Text>
               <Switch
               value={useForPayment}
               onValueChange={setUseForPayment}
                />
            </View>
            <Button title="Submit" onPress={handleSubmit} />
        </ScrollView>
        {/*ScrollView to hold multiple elements*/}
          </Card>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    label:{
        fontWeight: 'bold',
        marginTop: 15,
        color:'black'
    },
    input:{
        borderWidth: 1,
        borderColor:'#ccc',
        borderRadius: 12,
        padding:10,
        marginTop:5,
        backgroundColor:'white',
        width: '70%'
    },
    switchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    card:{
        padding:10,
        margin:10,
        borderRadius:8,
        backgroundColor:'white',
        width: '50%',
        alignSelf: 'center' // Center the card 
    }

});
export default ShippingAddressForm;
    

