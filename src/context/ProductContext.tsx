
import { useState } from "react";
import { createContext } from "react";
import productdata from "../data/productdata";

interface propType{
    children:any
}

type AppContextType = {};

export const ProductContext = createContext <AppContextType|any> (null);
export const ProductProvider = (props:propType) =>{

    const [product, setProduct] = useState <any[]>(productdata);
    return (
      <ProductContext.Provider value={[product, setProduct]}>
        {props.children}
      </ProductContext.Provider>
    );
}  