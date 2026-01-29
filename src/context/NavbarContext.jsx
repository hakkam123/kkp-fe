/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within NavbarProvider');
  }
  return context;
};

export function NavbarProvider({ children }) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [logoVariant, setLogoVariant] = useState('normal'); 
  
  const [isLogoVisible, setIsLogoVisible] = useState(true); 

  return (
    <NavbarContext.Provider value={{ 
      isNavbarVisible, setIsNavbarVisible, 
      logoVariant, setLogoVariant,
      isLogoVisible, setIsLogoVisible
    }}>
      {children}
    </NavbarContext.Provider>
  );
}