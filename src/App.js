import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import { ToastContainer } from 'react-toastify';
import './App.css';

export default function App () {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Shop />
      <Footer />
    </div>
  );
}