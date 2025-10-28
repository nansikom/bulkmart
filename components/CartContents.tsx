import React, {createContext, useContext, useState, ReactNode, useMemo} from 'react';
// ur exporting these so u can use them later.
export type CartItem = {

    id: string;
    title: string;
    price: number;
    quantity: number;
    size: string;
    cover: string | number;
}

//actions that can be takes
// public api exposed by the context
type CartContextType = {
    items: CartItem[];
    addItem:(item: Omit<CartItem, 'quantity'>& { quantity?: number }) => void;
    removeItem:(id:string) => void;
    updateQuantity:(id:string, quantity:number) => void;
    clear:() => void;
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
const updateQuantity = (id:string, quantity:number) => 
    setItems (prev =>  prev.map(i=>(i.id ===id ? {...i, quantity} : i)).filter(i => i.quantity > 0));
//return new array where the matching item is replaced by a shallow copy with quantity set to the new value coz ur updating from 5 to 4
// remove the item from the cart
const clear = () => setItems([]);
const total = useMemo(() => items.reduce((s, it)=> s + it.price * it.quantity, 0), [items]);
    return (
        <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clear: clear, total}}>
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


 

        