import React, { createContext, useState, useEffect } from "react";
// create new context for products
export const ProductContext = createContext();
// define the provider for the products context
const ProductProvidor = ({ children }) => {
// intializing state to store products
  const [products, setProducts] = useState([]);

// useEffect to fetch the products when the components mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // fetch the data from fakestore API
        let res = await fetch("https://fakestoreapi.com/products");
        // check if response is succesfull
        if (res.ok) {
          // parse the JSON response
          let data = await res.json();
          // update the product state with the fetched data
          setProducts(data);
        } else {
          // throw an error if response is not ok
          throw new Error("Connection Lost");
        }
      } catch (error) {
        // throw more specific error message if the theres an issue with API
        throw new Error("Issue with API link");
      }
    };
    // call the fetch products function
    fetchProducts();
  }, []); // empty dependency array means this effect runs once on mount

  // provide the product data to the context
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvidor;
