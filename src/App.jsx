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
  const nodeRef = useRef(null);

  return (
    <div className="flex min-h-screen">
      
      <CSSTransition
        in={menuVisible}
        timeout={300}
        classNames="slide-menu"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div
          ref={nodeRef}
          className="flex-shrink-0 h-screen" 
          style={{ width: "17.5rem" }} 
        >
          <Menu />
        </div>
      </CSSTransition>
      
      <div className={`flex flex-column flex-1 min-h-screen overflow-x-hidden ${menuVisible ? "expanded" : "collapsed"}`}>
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