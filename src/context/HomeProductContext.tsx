import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface propType {
  children: any;
}

type AppContextType = {};

export const ProductContext = createContext<AppContextType | any>(null);

export const HomeProductProvider = (props: propType) => {
  const [product, setProduct] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/79671bcf-2227-4130-ba13-11fa07bfb94c")
      .then((res: any) => {
        setProduct(res.data);
      });
  }, []);

  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
};
