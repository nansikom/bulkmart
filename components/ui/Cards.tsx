import React from 'react';
import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
interface CreateCardProps {
  title: string;
  description: string;
  cover: string | number; // Adjusted to accept both string URLs and local image references
  onPress?: () => void; // Optional onPress prop for button action
}

const CreateCard: React.FC<CreateCardProps> = ({ title, description, cover, onPress }) => {
  return (
    <Card style={styles.container} onPress={onPress}>
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
      </Card.Content>
      <Card.Cover source={typeof cover === 'string' ? { uri: cover } : cover} 
      style={styles.cover}
      resizeMode='cover'
      />

      <Card.Content>
        <Text variant="bodyMedium">{description}</Text>
      </Card.Content>
      <Card.Actions>
        <Button style={styles.button}>Add To Favourite</Button>

      </Card.Actions>
    </Card>
  );
};

export default CreateCard;

interface Styles {
  container: ViewStyle;
  cover: ImageStyle; // Add this line
  button: ViewStyle; // Add this line
}

const styles = StyleSheet.create<Styles>({
  container: {
    alignContent: 'center',
    margin: 37,
    width:250,

  },
  cover:{
    height:140,
    width:'100%',
  },
  button:{
  }
});
