import { Outlet } from "react-router-dom";
import "./App.css";
import React from "react";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";

export const App = ()=> {
   return (
    <>      
      <Header />
      <Outlet />   
      <Main /> 
      <Footer />
      </>
  )
}

