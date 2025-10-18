import React, { useState, useRef } from "react";
import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'
import BreadCrumbRoute from "./components/BreadCrumbRoute/BreadCrumbRoute";
import { CSSTransition } from "react-transition-group";

function App() {
  const [menuVisible, setMenuVisible] = useState(true);
  
  return (
    <div className="flex min-h-screen">
      
      <div className={`menu-container ${!menuVisible ? 'menu-hidden' : ''}`}>
        <Menu />
      </div>
      
      <div className="flex flex-column flex-1 min-h-screen overflow-x-hidden">
        <Header toggleMenu={() => setMenuVisible(prev => !prev)} />
        <div className='px-5 pt-3'>
          <BreadCrumbRoute />
        </div>
        <div className="p-5 flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default App;