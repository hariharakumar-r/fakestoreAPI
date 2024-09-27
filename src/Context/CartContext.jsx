import React, { createContext, useState, useEffect } from "react";
// create a context for cart related state and functions
export const CartContext = createContext();

// define the cartProvider component
const CartProvidor = ({ children }) => {
  // intialize state to store cart items
  const [cart, setCart] = useState([]);
  // intialize state to track the total number of items in the cart
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);
  // Effect to update the total price whenever the cart changes
  useEffect(() => {
    // Calculate the total price of all items in the cart
    const total = cart.reduce((accumulator, currentItem) => {
      // For each item, multiply its price by its amount and add to the accumulator
      return accumulator + currentItem.price * currentItem.amount;
    }, 0); // Start with an initial value of 0

    // Update the total state with the calculated value
    setTotal(total);
  }, [cart]); // This effect runs whenever the cart state changes

  // Effect to update the total item amount whenever the cart changes
  useEffect(() => {
    // Check if the cart exists (is not null or undefined)
    if (cart) {
      // Calculate the total number of items in the cart
      const amount = cart.reduce((accumulator, currentItem) => {
        // For each item, add its amount to the accumulator
        return accumulator + currentItem.amount;
      }, 0); // Start with an initial value of 0

      // Update the itemAmount state with the calculated value
      setItemAmount(amount);
    }
  }, [cart]); // This effect runs whenever the cart state changes
  
  // Function to add an item to the cart
  const addToCart = (product, id) => {
    // Create a new item object with the product details and initial amount of 1
    const newItem = { ...product, amount: 1 };

    // Check if the item already exists in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    // If the item is already in the cart
    if (cartItem) {
      // Create a new cart array with the updated item amount
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          // Increase the amount of the existing item by 1
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          // Return other items unchanged
          return item;
        }
      });
      // Update the cart state with the new cart array
      setCart(newCart);
    } else {
      // If the item is not in the cart, add it as a new item
      setCart([...cart, newItem]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    // Create a new cart array without the item to be removed
    const newCart = cart.filter((x) => {
      return x.id !== id;
    });
    // Update the cart state with the new cart array
    setCart(newCart);
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    // Set the cart to an empty array
    setCart([]);
  };

  // Function to increase the amount of an item in the cart
  const increaseAmount = (id) => {
    // Find the item in the cart
    const item = cart.find((item) => item.id === id);
    // Call addToCart with the found item, which will increase its amount
    addToCart(item, id);
  };

  // Function to decrease the amount of an item in the cart
  const decreaseAmount = (id) => {
    // Find the item in the cart
    const item = cart.find((x) => {
      return x.id === id;
    });

    // If the item exists
    if (item) {
      // Create a new cart array with the updated item amount
      const newCart = cart.map((item) => {
        if (item.id === id) {
          // Decrease the amount of the item by 1
          return { ...item, amount: item.amount - 1 };
        } else {
          // Return other items unchanged
          return item;
        }
      });
      // Update the cart state with the new cart array
      setCart(newCart);
    }

    // If the item's amount becomes less than 2, remove it from the cart
    if (item.amount < 2) {
      removeFromCart(id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvidor;
