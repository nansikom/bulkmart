import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card } from 'react-native-paper';
export default function LoginScreen() {
    const[firstlastName, setFirstName] = useState('');
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [hoveered, setHovered] = useState(false);
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("buyer"); // Default to buyer
    const handleLogin = () => {
        if (role === "buyer"){
            router.push('/screens/buyerscreen');
        } else if (role === "seller"){
            router.replace("/screens/sellerdashboard");
        }
};
//login screen using cards
    return (
        <Card style={styles.card}>
        <ScrollView contentContainerStyle = {styles.container}>
            <Text style= {styles.label}> Welcome to BulkMart </Text>
            <Text style= {styles.label}> Sign into your Account </Text>
            <View style={styles.fieldContainer}>
            <Text style= {styles.labels}> Full Name</Text>
            </View>
            <View style={styles.fieldContainer}>
            <TextInput style={styles.input} placeholder="First Name" value={firstlastName} onChangeText={setFirstName} />
            </View>
            <View style={styles.fieldContainer}>
            <Text style= {styles.labels}>Email</Text>
            
            <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} />
            </View>
            <View style={styles.fieldContainer}>
             <Text style= {styles.labels}>Password</Text>

            <TextInput style={styles.input} placeholder="1234" value={password} onChangeText={setPassword} />
             </View>
            <View style={styles.fieldContainer}>
             <Text style= {styles.labels}>Role</Text>
             <View style={styles.roleContainer}>
                 <Pressable onPress={() => setRole("buyer")} style={[styles.roleButton, role === "buyer" && styles.selectedRole]}>
                     <Text style={[styles.roleText, role === "buyer" && styles.selectedRoleText]}>Buyer</Text>
                 </Pressable>
                 <Pressable onPress={() => setRole("seller")} style={[styles.roleButton, role === "seller" && styles.selectedRole]}>
                     <Text style={[styles.roleText, role === "seller" && styles.selectedRoleText]}>Seller</Text>
                 </Pressable>
             </View>
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
        borderWidth: 2,
        borderColor:'#4f46e5',
        borderRadius: 15,
        padding:15,
        marginTop:5,
        backgroundColor:'white',
        width:'70%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
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
        backgroundColor:'white',
        alignSelf:'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
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
      borderRadius:25,
      alignItems:'center',
      width:'40%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    roleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%',
        marginTop: 5,
    },
    roleButton: {
        backgroundColor: '#e0e0e0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    selectedRole: {
        backgroundColor: '#4f46e5',
        borderColor: '#4f46e5',
    },
    roleText: {
        fontSize: 16,
        color: '#333',
        fontFamily: 'Inter',
    },
    selectedRoleText: {
        color: 'white',
    },
});
    

