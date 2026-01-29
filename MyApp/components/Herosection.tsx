import Container from '@/components/Container';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';


export default function HeroSection() {
  const router = useRouter();
  return (
    <Container>
    <ScrollView style={styles.container}>
       <View style={styles.buttonContainer}>
            <TouchableOpacity 
              onPress={() => router.push('/screens/SaltDetailsScreen')}>
              <ThemedText style={styles.secondaryButtonText}>Bulk essentials</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => router.push('/screens/about')}>
              <ThemedText style={styles.secondaryButtonText}>Industries served</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => router.push('/screens/Reviews')}>
              <ThemedText style={styles.secondaryButtonText}>Reviews</ThemedText>
            </TouchableOpacity>
          </View>
      <View style={styles.heroSection}>
        <View style={styles.gradientOverlay}>
          {/* Gradient effect can be achieved with a LinearGradient component */}
        </View>
        
        <View style={styles.contentContainer}>
          <ThemedText style={styles.title}>
            Bulk Mart: Where Volume Meets Value
          </ThemedText>
          
          <ThemedText style={styles.subtitle}>
            Bulk pricing on salt, sugar, soap, and scholastic supplies. Your one-stop shop for everyday bulk needs. Reliable supply. Honest pricing. Delivered.
          </ThemedText>

         

          <View style={styles.featuresContainer}>
            <View style={styles.featureItem}>
              <ThemedText style={styles.featureTitle}> Buy The lowest price</ThemedText>
              <ThemedText style={styles.featureDesc}>🤝Fair Deals Every Buyer</ThemedText>
            </View>
            <View style={styles.featureItem}>
              <ThemedText style={styles.featureTitle}>🏃‍♂️Fastest on the market</ThemedText>
              <ThemedText style={styles.featureDesc}>Speed That Delivers</ThemedText>
            </View>
            <View style={styles.featureItem}>
              <ThemedText style={styles.featureTitle}>❤️Buy from The most loved</ThemedText>
              <ThemedText style={styles.featureDesc}>Trusted for Quality</ThemedText>
            </View>
          </View>
        </View>
      </View>

      {/* Your existing product cards can go here */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Your existing CreateCard components */}
      </ScrollView>
    </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroSection: {
    position: 'relative',
    padding: 20,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    opacity: 0.4,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: '#4f46e5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#4f46e5',
    fontWeight: '600',
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 24,
    marginTop: 32,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  featureItem: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 8,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: 'white',
  },
  featureDesc: {
    fontSize: 14,
    color: '#6B7280',
  },
  scrollContainer: {
    paddingVertical: 16,
    alignItems: 'center',
  },
});




