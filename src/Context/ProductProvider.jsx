import axios from "axios";
import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const onGetData = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=1`);
      setList(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider value={{ list, onGetData }}>
      {children}
    </ProductContext.Provider>
  );
};
