import { View, Text, TouchableOpacity } from 'react-native';
import { Plus as PlusIcon, Minus as MinusIcon } from 'lucide-react-native';

export default function Plus() {
  return (
 <View style={{ width: 256, backgroundColor: 'pink', padding: 16 }}>
    <TouchableOpacity>
        <PlusIcon size={24} color="black" />
    </TouchableOpacity>
  <Text>Quantity</Text>
    <TouchableOpacity>
        <MinusIcon size={24} color="black" />
    </TouchableOpacity>
</View>
  );
}