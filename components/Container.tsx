import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';

const Container = ({ children }) => {
    const colorScheme = useColorScheme();
    const backgroundColor = colorScheme === 'dark' ? '#000' : '#fff';
    return(
        <View style={[styles.container,{backgroundColor}]}>
        {children}
        </View>
    );
};


const styles = StyleSheet.create({
  container: {
    //maximum it can grow so it doesnt go above 1280px
    maxWidth: 1280, // 7xl in Tailwind (in px)
    alignSelf: 'center', // mx-auto
    paddingHorizontal: 24, // px-6 (1.5rem * 16)
    //takes up the full width of its container
    width: '100%',
  },
});

export default Container;