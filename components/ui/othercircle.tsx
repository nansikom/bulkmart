import { Background } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

interface HeroProps {
    title?: string;
    height?: number;
    backgroundColor?: string;
    ovalIcon?: React.ReactNode; // Accept any React element
    image?: { uri: string };
}

const Hero2: React.FC<HeroProps> = ({ title, height, ovalIcon,image }) => (
  <View style={[styles.hero, {height, backgroundColor: 'white' }]}>
        {title && <Text style ={styles.title}> {title}</Text>}
        {image && <Image source={image} style={styles.image} />}
        <TouchableOpacity style={styles.oval}>
            {ovalIcon
            }
            <Text style={styles.ovalText}>Qunatity</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    hero: {
        width: '100%',
        height: '40%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
        margin: 10,
        flexDirection: 'row',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 20,
    },
    title:{
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 0,
        textAlign: 'left',
        flex: 1,
        marginTop: -50,      // Move up by 8 pixels (adjust as needed)
        marginLeft: 54,
    },
    oval:{
        width: 100,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderColor: 'black',
        borderWidth: 2,
    },
    ovalText:{
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'gray',
        fontSize: 16,
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: 12,
        width: 120, // or whatever size you want
        height: 120,
    }
});
export default Hero2;