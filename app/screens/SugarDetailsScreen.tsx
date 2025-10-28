import Hero from '@/components/ui/Circle';
import Hero2 from '@/components/ui/othercircle';
import { Platform, StyleSheet, View,Text } from 'react-native';
import { ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Plus as PlusIcon } from 'lucide-react-native';
import { Minus as MinusIcon } from 'lucide-react-native';
import CreateCardImage from '@/components/ui/Cardimage';

const SugarDetailsScreen = () => {
    const router = useRouter();
    const cardData = [
      {
          title:"Kakira",
          description:" Kakira Sugar categories",
          cover:"https://ug.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/60004/1.jpg?1989"
      },
      {
          title:"Mayuge",
          description:"Mayuge Sweet sugar",
          cover:"https://www.mpgroupofindustries.com/img/sugar-25kg.jpg"
        },
      {
            title:"Kinyara",
            description:"Kinyara Sugar",
            cover:"https://seromaltd.com/wp-content/uploads/2020/01/DkzGl57XoAA-dKx.jpg",
      },
    ]
    return (
        <ScrollView  contentContainerStyle={styles.scrollContainer}
                  showsVerticalScrollIndicator={false}>
           
          
            {/* Grid of Cards */}
            <View style = {styles.gridContainer}>
              {cardData.map((item,index)=>(
                <View key ={index} style={styles.cardWrapper}>
                     
                  <CreateCardImage
                    title = {item.title}
                    cover= {item.cover}
              />
              
            </View>
          ))}
            </View>
         </ScrollView>
            );
}
export default SugarDetailsScreen;
const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'column',
  },
  gridContainer: {
    flexDirection: 'row', // Arranges children horizontally (left to right)
    flexWrap: 'wrap', // Allows items to wrap to next row when they dont fit
    justifyContent:'space-between', // Distributes items evenly with space between the
    paddingHorizontal: 16,// ad
    width: '90%',// take full width of parent container 
    height:'50%'
  },
  cardWrapper: {
    width: '30%', // 3 items per row (30% each with some margin)
    marginBottom: 16,
    padding:8,
    marginVertical:30,
    marginHorizontal:20
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});

