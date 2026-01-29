import { useCart } from '@/components/CartContents';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CheckoutScreen() {
    // reads totals from all that it has gathered
    const router = useRouter();

    
    const {items, total, updateQuantity, removeItem, clear, reduceStock } = useCart();
    if (items.length ===0) {
     
            console.log('Your cart is empty. Please add items to proceed to checkout.')
            return;
    }
    console.log('==checkout is starting');
    console.log('Items in cart:', items);
    console.log('Total amount:', items,length);
    console.log('Cart items:', items.map(item => ({
    id: item.id,
    numericId: parseInt(item.id.split('-')[0]),
    title: item.title,
    quantity: item.quantity
     })));
    const handleConfirmPurchase = async () => {
        try{
            await reduceStock(items);
         const totalsSting = total.toString();
                            router.push({
                                pathname:'/checkout/shipping',
                                params:{
                                    totals: totalsSting,
                                } as any
                            })
                            clear();
                        } catch (error:any) {
                            console.error('Error during checkout:', error);
                            alert('Error during checkout: ' + error.message ||'Please try again later.');
                        }
    };

    return (
        <View style ={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Your Cart</Text>
                <Text style={styles.headerSubtitle}>{items.length} {items.length === 1 ? 'item' : 'items'}</Text>
            </View>

            <FlatList
                 data={items}
                 keyExtractor= {i => i.id}
                 showsVerticalScrollIndicator={false}
                 numColumns={2}
                 contentContainerStyle={styles.listContent}
                 columnWrapperStyle={styles.columnWrapper}
                 renderItem={({ item }) => (
                    <View style = {styles.itemCard}>
                        <TouchableOpacity 
                            style={styles.removeButton} 
                            onPress={() => removeItem(item.id)}
                        >
                            <Text style={styles.removeButtonText}>✕</Text>
                        </TouchableOpacity>
                        
                        <View style={styles.cardContent}>
                            <View style={styles.productIcon}>
                                <Text style={styles.iconText}>📦</Text>
                            </View>
                            
                            <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>
                            <Text style={styles.itemSize}>{item.size}</Text>
                            
                            <View style={styles.divider} />
                            
                            <View style={styles.priceSection}>
                                <Text style={styles.priceLabel}>Price</Text>
                                <Text style={styles.priceValue}>UGX {item.price.toLocaleString()}</Text>
                            </View>
                            
                            <View style={styles.divider} />
                            
                            <View style={styles.quantitySection}>
                                <Text style={styles.quantityLabel}>Quantity</Text>
                                <View style={styles.controls}>
                                    <TouchableOpacity 
                                        style={styles.quantityButton} 
                                        onPress={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        <Text style={styles.quantityButtonText}>−</Text>
                                    </TouchableOpacity>
                                    <View style={styles.quantityDisplay}>
                                        <Text style={styles.quantityText}>{item.quantity}</Text>
                                    </View>
                                    <TouchableOpacity 
                                        style={styles.quantityButton} 
                                        onPress={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        <Text style={styles.quantityButtonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                            <View style={styles.divider} />
                            
                            <View style={styles.subtotalSection}>
                                <Text style={styles.subtotalLabel}>Total</Text>
                                <Text style={styles.subtotalValue}>UGX {(item.price * item.quantity).toLocaleString()}</Text>
                            </View>
                        </View>
                    </View>
                 )}
            />

            <View style={styles.footer}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalLabel}>Total Amount</Text>
                    <Text style={styles.totalValue}>UGX {total.toLocaleString()}</Text>
                </View>

                <TouchableOpacity 
                    style={styles.primaryButton} 
                    onPress={handleConfirmPurchase}
                >
                    <Text style={styles.primaryButtonText}>Confirm Purchase</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.secondaryButton} 
                    onPress={() => router.push('/screens/payementscreen')}
                >
                    <Text style={styles.secondaryButtonText}>Proceed to Payment</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.clearButton} 
                    onPress={() => clear()}
                >
                    <Text style={styles.clearButtonText}>Clear Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}
const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        backgroundColor: '#61239bff',
        paddingTop: 36,
        paddingBottom: 16,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 8,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 4,
    },
    headerSubtitle: {
        fontSize: 13,
        color: '#e0d4f7',
        fontWeight: '500',
    },
    listContent: {
        padding: 12,
        paddingBottom: 20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    itemCard: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 16,
        marginBottom: 12,
        width: '48%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
        position: 'relative',
    },
    removeButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#ffe5e5',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    removeButtonText: {
        fontSize: 16,
        color: '#d63031',
        fontWeight: '600',
    },
    cardContent: {
        alignItems: 'center',
    },
    productIcon: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#f3e5f5',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    iconText: {
        fontSize: 36,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2d3436',
        marginBottom: 4,
        textAlign: 'center',
    },
    itemSize: {
        fontSize: 12,
        color: '#636e72',
        marginBottom: 12,
        textAlign: 'center',
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#f1f3f5',
        marginVertical: 12,
    },
    priceSection: {
        alignItems: 'center',
        width: '100%',
    },
    priceLabel: {
        fontSize: 12,
        color: '#636e72',
        marginBottom: 4,
    },
    priceValue: {
        fontSize: 15,
        fontWeight: '600',
        color: '#2d3436',
    },
    quantitySection: {
        alignItems: 'center',
        width: '100%',
    },
    quantityLabel: {
        fontSize: 12,
        color: '#636e72',
        marginBottom: 8,
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    quantityButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#61239bff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityButtonText: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: '600',
    },
    quantityDisplay: {
        minWidth: 36,
        alignItems: 'center',
    },
    quantityText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2d3436',
    },
    subtotalSection: {
        alignItems: 'center',
        width: '100%',
    },
    subtotalLabel: {
        fontSize: 12,
        color: '#636e72',
        marginBottom: 4,
    },
    subtotalValue: {
        fontSize: 17,
        fontWeight: '700',
        color: '#61239bff',
    },
    footer: {
        backgroundColor: '#ffffff',
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 10,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: '#f8f9fa',
        borderRadius: 12,
        marginBottom: 12,
    },
    totalLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#636e72',
    },
    totalValue: {
        fontSize: 20,
        fontWeight: '700',
        color: '#61239bff',
    },
    primaryButton: {
        backgroundColor: '#61239bff',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 8,
        shadowColor: '#61239bff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    primaryButtonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '700',
    },
    secondaryButton: {
        backgroundColor: '#ffffff',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 8,
        borderWidth: 2,
        borderColor: '#61239bff',
    },
    secondaryButtonText: {
        color: '#61239bff',
        fontSize: 15,
        fontWeight: '700',
    },
    clearButton: {
        backgroundColor: 'transparent',
        paddingVertical: 10,
        borderRadius: 12,
        alignItems: 'center',
    },
    clearButtonText: {
        color: '#d63031',
        fontSize: 14,
        fontWeight: '600',
    },
});
