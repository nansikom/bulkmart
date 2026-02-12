import React, { useState, useEffect } from 'react';
import { StyleSheet, ViewStyle, ImageStyle, TextStyle, ImageSourcePropType } from 'react-native';
import { Card, Button, Text ,useTheme} from 'react-native-paper';
interface CreateCardProps {
  title: string;
  description: string;
  cover: string | ImageSourcePropType; // Adjusted to accept both string URLs and local image references
  onPress?: () => void; // Optional onPress prop for button action
}
//create card image component to be used in all product detail categories
const CreateCard: React.FC<CreateCardProps> = ({ title, description, cover, onPress }) => {
  const theme = useTheme();
 
  return (
    <Card style={[styles.container, {backgroundColor: theme.colors.surface, shadowColor: theme.colors.backdrop}]} onPress={onPress}>
       <Card.Content style ={styles.content}>
        <Text variant="titleLarge" style={styles.title}>{title}</Text>
        <Text variant="bodyMedium" style={styles.description}>{description}</Text>
      </Card.Content>
      <Card.Cover
        source={typeof cover === 'string' ? { uri: cover } : cover}
        style={{width:"100%",height:400}}
        resizeMode='cover'
      />
      <Card.Actions style={styles.actions}>
        <Button style={styles.button} mode="contained" buttonColor={theme.colors.primary} textColor="#fff" onPress={onPress}>
          Click for Products
        </Button>
      </Card.Actions>
    </Card>
  );
};
export default CreateCard;

interface Styles {
  container: ViewStyle;
  cover: ImageStyle; // Add this line
  actions: ViewStyle; // Add this line
  content:ViewStyle;
  description:TextStyle;
  title:TextStyle;
  button:ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    margin: 16,    //space around the card outside its border
    borderRadius:16,
    overflow:'hidden',  //ensure child content respects border radius
    elevation: 6,  // Android shadow depth
    shadowColor: '#000',  // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.1, // iOS shadow transparency
    shadowRadius: 6, // iOS shadow blur
  },
 cover:{
    width:'100%',
    height:400,
   
  },
  content:{
    paddingVertical:12,//space inside the card above and below the text 
  },
  title:{
    fontSize:18,
    fontWeight:'700',
    marginBottom:4, //space below  title and description
  },
  description:{
    fontSize:14,
    color:'#666',
  },
  actions:{
    justifyContent:'flex-end', //aligns the buttons to the right 
    paddingHorizontal:16,  //adds horizonal space in the action container
    paddingBottom:12,  //space at the botton of the action container
  },  
  button:{
    borderRadius:12,  // round corners
    paddingHorizontal:16, //adds horizonal space in the button
  },
});
