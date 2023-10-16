import axios from "axios";
import { useState, useEffect, createContext } from "react";
export const MyContext = createContext();

export const Myprovayder = ({ children }) => {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/playlist/videos/",
    params: { id: "PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr", hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Key": "70e8ccfcc0msh604e3f8cbec63fdp1bbdc8jsn411ce9f9cf7f",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  const getFun = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data.contents);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFun();
  }, []);
  return <MyContext.Provider value={{ data }}>{children}</MyContext.Provider>;
};
