// LoadingContext.js
import React, { createContext, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
const LoadingContext = createContext();


export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [showModelDetail, setShowModelDetail] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleWhatsTrendingClick = () => {
    console.log("clicked");
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setShowModelDetail(true);
      // Navigate to a different route after setting the state
      return <Navigate to="/explore" />;
    }, 2500);
  };

  return (
    <LoadingContext.Provider value={{ showModelDetail, showLoading, handleWhatsTrendingClick }}>
      {children}
    </LoadingContext.Provider>
  );
};
