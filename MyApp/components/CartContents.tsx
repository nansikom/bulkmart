import React, {createContext, useContext, useState, ReactNode, useMemo} from 'react';
// ur exporting these so u can use them later.
import products from '@/data/products.json';
export type CartItem = {

    id: string;
    title: string;
    price: number;
    quantity: number;
    size: string;
    cover: string | number;
}

// actions that can be taken such as remove item, add item, update quantity, clear cart, reduce stock some based on backend api
// public api exposed by the context
type CartContextType = {
    //items is an array of CartItem Objects
    items: CartItem[];
    addItem:(item: Omit<CartItem, 'quantity'>& { quantity?: number }) => void;
    removeItem:(id:string) => void;
    updateQuantity:(id:string, quantity:number) => void;
    clear:() => void;
    // cartItems is and array of Cart items
    reduceStock:(cartItems: CartItem[])=> void;
    total:number;
};
// Conext 
const CartContext = createContext<CartContextType | null>(null);
export const CartProvider = ({ children }: {children: ReactNode}) =>{
    const [items, setItems] = useState<CartItem[]>([]);
    // accept quantity as number 
    const addItem = (incoming: Omit<CartItem, 'quantity'> & { quantity?: number}) => {
        // use the qunatity or default to 1
        const qty = incoming.quantity ?? 1;
        setItems(prev => {
            //set state allows the function form to get the latest state
            // find the id and size of the entry ur trying to find so each entry is treated separately
            const idx = prev.findIndex(i => i.id === incoming.id && i.size === incoming.size);
            if (idx >=0) {
                // checking of the item already exists in the cart 
                const copy = [...prev];
                copy[idx] = {...copy[idx], quantity: copy[idx].quantity + qty};
                return copy;
            }
           // else add the new item
            return [...prev, {...incoming, quantity: qty}];
        });
    };
// remove item by id if the id of the item matches the previous id 
const removeItem = (id: string) => setItems(prev=> prev.filter(i => i.id !== id));
//connect to backend to reduce stock
const reduceStock = async (cartItems: CartItem[]) => {
    try{
        console.log('cart items to send', cartItems);
        const response = await fetch ('http://localhost:5000/reduce-stock', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            //sending cart item key with values of id and quantity.
            body: JSON.stringify(cartItems.map(item => {
                const numericId = parseInt(item.id.split('-')[0]); // Extract numeric ID
                console.log(`Converting ${item.id} to numeric ID: ${numericId}`);
                return{
                    id: numericId,
                    quantity: item.quantity
                };
            })),     
        });
        if(!response.ok){
            const errorText = await response.text();
            console.error('Server responded with error:', errorText);
            throw new Error(`Server error: ${response.status}-${errorText}`);
        }
        const data = await response.json();
        if(data.success){
            console.log('Stock reduced successfully on server');
        }else{
            console.error('Failed to reduce stock on server');
        }
    } catch (error){
        console.error('Error reducing stock:', error);
    }
    // logic to reduce stock of item if it matches the id execute wats after ternary operator which is stock - quantity chosen if not jst return the item exactly as it is
};
// update quantity of item in cart
const updateQuantity = (id:string, quantity:number) => 
    setItems (prev =>  prev.map(i=>(i.id ===id ? {...i, quantity} : i)).filter(i => i.quantity > 0));
//return new array where the matching item is replaced by a shallow copy with quantity set to the new value coz ur updating from 5 to 4
// remove the item from the cart
const clear = () => setItems([]);
const total = useMemo(() => items.reduce((s, it)=> s + it.price * it.quantity, 0), [items]);
    return (
        <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, reduceStock, clear: clear, total}}>
            {children}
        </CartContext.Provider>
    );
};
export const useCart =(): CartContextType => {
    const ctx = useContext(CartContext);
    if (!ctx) 
    throw new Error('useCart must be used within a CartProvider');
    return ctx;
};


 

        