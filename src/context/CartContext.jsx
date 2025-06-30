import { createContext, useState } from "react";
import Swal from "sweetalert2";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);

    const addToCart = (product) => {
        if (cartItem.some((item) => item.id === product.id)) {
            // alert('Products alredy added to cart.')
            Swal.fire({
                icon: "error",
                title: "Oops...🤣",
                text: "Product Alredy Added!",
            });
        } else {
            setCartItem(prevItem => [...prevItem, product])
            Swal.fire({
                icon: "success",
                title: "OKK...👏",
                text: "Product added in your cart.",
            });
        }

    }
    const cartCount = cartItem.length;

    return (
        <CartContext.Provider value={{ cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    )

}