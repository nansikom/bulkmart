import { StyleSheet, TouchableOpacity, View,ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import { Text, useColorScheme } from 'react-native';
import  Container from '@/components/Container';
export default function Features() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const textColor = colorScheme === 'dark' ? '#D1D5DB' : '#4B5563';


    return(
        <Container>
        <View style={styles.featuresSection}>
        <ThemedText style={styles.featuresSectionTitle}>
          Where wholesale businesses meets technology—{'\n'}
          Reshaping bulk commerce in Uganda.
        </ThemedText>
        <ThemedText style={[{ color: textColor, marginBottom: 30 }]}>
          Affordable, reliable supplies for schools, homes, and businesses. {'\n'}From salt and sugar to soap and scholastic materials, we deliver everyday essentials in bulk—without the markup.
        </ThemedText>
        
        <View style={styles.featuresGrid}>
          <View style={styles.featureCard}>
            <ThemedText style={styles.featureCardTitle}>
              🍚 Different categories in Bulk
            </ThemedText>
            <ThemedText style={styles.featureCardDesc}>
              White, brown, and specialty grades to suit every need. Packaged for convenience, priced for value
            </ThemedText>
            <TouchableOpacity onPress={() => router.push('/screens/productsscreen')}>
              <ThemedText style={styles.readMore}>Click here for Sugar Products</ThemedText>
            </TouchableOpacity>
          </View>
          <View style={styles.featureCard}>
            <ThemedText style={styles.featureCardTitle}>
              🍚 Sugar in Bulk
            </ThemedText>
            <ThemedText style={styles.featureCardDesc}>
              White, brown, and specialty grades to suit every need. Packaged for convenience, priced for value
            </ThemedText>
            <TouchableOpacity onPress={() => router.push('/screens/SugarDetailsScreen')}>
              <ThemedText style={styles.readMore}>Click here for Sugar Products</ThemedText>
            </TouchableOpacity>
          </View>

          <View style={styles.featureCard}>
            <ThemedText style={styles.featureCardTitle}>
              🧂 Salt in Bulk
            </ThemedText>
            <ThemedText style={styles.featureCardDesc}>
              Fine, coarse, and iodized varieties to meet every kitchen and industrial need. Packaged for durability, priced for smart bulk buying.
            </ThemedText>
            <TouchableOpacity onPress={() => router.push('/screens/SaltDetailsScreen')}>
              <ThemedText style={styles.readMore}>Click here for Salt Products</ThemedText>
            </TouchableOpacity>
          </View>

          <View style={styles.featureCard}>
            <ThemedText style={styles.featureCardTitle}>
              🧼 Soap in Bulk
            </ThemedText>
            <ThemedText style={styles.featureCardDesc}>
              Quality soaps for every purpose. From laundry to personal care, bulk savings without compromise.
            </ThemedText>
            <TouchableOpacity onPress={() => router.push('/screens/SoapDetailsScreen')}>
              <ThemedText style={styles.readMore}>Click here for Soap</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </Container>
    )
}
const styles = StyleSheet.create({
    featuresSection: {
        paddingVertical: 24,
        marginTop: -28,
      },
      featuresSectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 16,
      },
      featuresSectionDesc: {
        color: '#6B7280',
        marginBottom: 24,
      },
      featuresGrid: {
        gap: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      featureCard: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        flex: 1,
        minWidth: 200,
        marginRight:20,
      },
      featureCardTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 8,
      },
      featureCardDesc: {
        color: '#6B7280',
        marginBottom: 16,
      },
      readMore: {
        color: '#007AFF',
        fontSize: 14,
      },
})