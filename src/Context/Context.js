
import React, { createContext, useContext, useState, useEffect } from "react";

const ApiDataContext = createContext();

export const useApiDataContext = () => {
  return useContext(ApiDataContext);
};

export const ApiDataProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setApiData(data.products);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ApiDataContext.Provider value={{ apiData }}>
      {children}
    </ApiDataContext.Provider>
  );
};
