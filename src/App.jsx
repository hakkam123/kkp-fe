import React from 'react';
import Navbar from './components/Navbar';
import { NavbarProvider } from './context/NavbarContext';
import './App.css';
import Homepage from './components/home/Homepage';
import Footer from './components/ui/Footer';
import './maskscroll.css';

function App() {
  return (
    <NavbarProvider>
      <Navbar />
      <Homepage />
      <Footer />
    </NavbarProvider>
  );
}

export default App;