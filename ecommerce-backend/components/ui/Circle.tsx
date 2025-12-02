import { Background } from '@react-navigation/elements';
import React from 'react';
import { ImageBackground, StyleSheet, View, Text, ImageSourcePropType, TouchableOpacity } from 'react-native';
interface HeroProps {
    title?: string;
    height?: number;
    backgroundColor?: string;
    image?: ImageSourcePropType ;
  
}

const Hero: React.FC<HeroProps> = ({ title, height, image }) => (
  <View style={[styles.hero, {height, backgroundColor: 'white' }]}>
        <ImageBackground
            source={image}
            style={{ width: '50%', height: '90%', borderRadius: '20%'}}
        ></ImageBackground>
        {title && <Text style ={styles.title}> {title}</Text>}
    </View>
);
const styles = StyleSheet.create({
    hero: {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        margin: 10,
        flexDirection: 'column',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 20,
    },
    title: {
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 16,
        textAlign: 'center',
    },
    price:{

    },
    size:{

    },
    Quantity:{

    }
});
export default Hero;