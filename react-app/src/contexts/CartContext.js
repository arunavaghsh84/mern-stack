import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, initialCart);

    return (
        <CartContext.Provider value={cart}>
            <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

export function useCartDispatch() {
    return useContext(CartDispatchContext);
}

function cartReducer(cart, action) {
    switch (action.type) {
        case 'added':
            return [...cart, action.payload];
        case 'changed':
            return cart.map((item) => (item._id === action.payload._id ? action.payload : item));
        case 'deleted':
            return cart.filter((item) => item._id !== action.payload._id);
        case 'cleared':
            return [];
        default:
            throw new Error('Unknown action: ' + action.type);
    }
}

const initialCart = [];
