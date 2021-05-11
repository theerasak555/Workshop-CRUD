import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  
    const [products, setProducts] = useState([
        {
            "Product_id": "IC6108-028",
            "Product_name": "HP DESKJET INK",
            "Unit": "UNT-06",
            "Store": "001",
            "Where_store": "01",
            "Quantity": "5",
            "Unit_Price": "3190.00",
            "Discount": "@50",
            "Price": "15700.00"
        },
        {
            "Product_id": "IC6108-029",
            "Product_name": "HP DESKJET INK",
            "Unit": "UNT-07",
            "Store": "001",
            "Where_store": "01",
            "Quantity": "5",
            "Unit_Price": "5290.00",
            "Discount": "200",
            "Price": "26250.00"
        }
  ]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};