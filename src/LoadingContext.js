// LoadingContext.js
import React, { createContext, useState, useContext } from 'react';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [showModelDetail, setShowModelDetail] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleWhatsTrendingClick = () => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setShowModelDetail(true);
    }, 2500);
  };

  return (
    <LoadingContext.Provider value={{ showModelDetail, showLoading, handleWhatsTrendingClick }}>
      {children}
    </LoadingContext.Provider>
  );
};
