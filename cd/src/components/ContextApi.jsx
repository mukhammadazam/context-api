import axios from "axios";
import { useState, useEffect, createContext } from "react";
export const MyContext = createContext();

export const Myprovayder = ({ children }) => {
  const [data, setData] = useState([]);

  const getFun = async () => {
    try {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFun();
  }, []);
  return <MyContext.Provider value={{ data }}>{children}</MyContext.Provider>;
};
