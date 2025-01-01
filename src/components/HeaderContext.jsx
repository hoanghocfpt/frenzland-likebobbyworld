'use client'
// HeaderContext.js
import React, { createContext, useState } from 'react';

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
  }
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => setPopupOpen(!isPopupOpen);

  return (
    <HeaderContext.Provider value={{ isPopupOpen, togglePopup }}>
      {children}
    </HeaderContext.Provider>
  );
};