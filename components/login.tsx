import { style } from '@mui/system';
import React, {useState} from 'react';
import { Card } from 'react-native-paper';
import {useRouter} from 'expo-router';
import {View, Text, Pressable,TextInput,Platform, TouchableOpacity,Button,Switch, StyleSheet, Alert, ScrollView} from 'react-native';
import {useLocalSearchParams } from 'expo-router';
export default function LoginScreen() {
    const[firstlastName, setFirstName] = useState('');
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [hoveered, setHovered] = useState(false);
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        if (email.includes("buyer")){
            router.push('screens/buyerscreen');
        } else if (email.includes("seller")){
            router.replace("/screens/sellerdashboard");
        }
};
    return (
        <Card style={styles.card}>
        <ScrollView contentContainerStyle = {styles.container}>
            <Text style= {styles.label}> Sign into your Account</Text>
            <View style={styles.fieldContainer}>
            <Text style= {styles.labels}> Full Name</Text>
            </View>
            <View style={styles.fieldContainer}>
            <TextInput style={styles.input} placeholder="First Name" value={firstlastName} onChangeText={setFirstName} />
            </View>
            <View style={styles.fieldContainer}>
            <Text style= {styles.labels}>Email</Text>
            
            <TextInput style={styles.input} placeholder="johndoe@gmail.com" value={email} onChangeText={setEmail} />
            </View>
            <View style={styles.fieldContainer}>
             <Text style= {styles.labels}>Password</Text>
            
            <TextInput style={styles.input} placeholder="1234" value={password} onChangeText={setPassword} />
             </View>
             
            <Pressable onPress={handleLogin} 
            onHoverIn={() => Platform.OS==='web' && setHovered(true)}
            onHoverOut={() => Platform.OS==='web' && setHovered(false)} 
            style={{
              ...styles.button,
              backgroundColor: hoveered ?  '#1e1e76': '#2821a0ff' ,
            }}>
              <Text style={styles.buttonText}>Next</Text>
            </Pressable>
        </ScrollView>
        </Card>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 15,
        alignItems: 'center',

    },
    label:{
        fontWeight: 'bold',
        marginTop: 15,
        color:'#0d0d76ff',
        fontSize:30,
        fontFamily:'Inter',
        textAlign:'left',

    },
     labels:{
        fontWeight: 'bold',
        marginTop: 15,
        color:'#0d0d76ff',
        fontSize:20,
        fontFamily:'Inter',
        textAlign:'left',
        
    },
    input:{
        borderWidth: 1,
        borderColor:'#ccc',
        borderRadius: 10,
        padding:15,
        marginTop:5,
        backgroundColor:'white',
        width:'70%'
    },
    switchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    fieldContainer:{
        marginBottom: 15,
        width:'100%',
        alignItems:'flex-start'
    },
    card:{
        padding:50,
        margin:10,
        borderRadius:8,
        alignSelf: 'center', // Center the card
        width: '60%',
        backgroundColor:'#707ff5',
        alignSelf:'center'
    },
    buttonText:{
      color:'white',
      fontWeight:'bold',
      fontSize:16,
      width:'40%',
      alignItems: 'center',
      fontFamily:'Inter'

    },
    button:{
      marginTop:30,
      backgroundColor:'#4f46e5',
      paddingVertical:15,
      borderRadius:12,
      alignItems:'center',
      width:'40%'
    },   
});
    

