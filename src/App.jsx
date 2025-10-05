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
    <div className = "flex " >
      <CSSTransition
        in={menuVisible}
        timeout={300}
        classNames="slide-menu"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <Menu/>
        </div>
      </CSSTransition>
        
        <div 
          className={`flex-1 content-area ${menuVisible ? "expanded" : "collapsed"}`}
        >
          <Header toggleMenu={() => setMenuVisible(prev => !prev)} />
          <div className='px-4 pt-3'>
            <BreadCrumbRoute />
          </div>
          <div className=" p-4 h-screen overflow-auto">
            <Outlet />
          </div>
          <Footer />
        </div >
      </div>
  )
}

export default App;
