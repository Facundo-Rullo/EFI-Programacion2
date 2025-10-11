import React from "react";
import HeaderCSS from './Header.module.css'
import { Button } from "primereact/button";
import PopupUser from '../PopupUser/PopupUser'
import UserCustomizations from '../UserCustomizations/UserCustomizations'
import NotificationsHeader from '../NotificationsIconHeader/NotificationsIconHeader'


export default function Header({ toggleMenu }) {
  
  return (
    <div className="flex justify-content-between align-items-center px-5 py-4 text-white ">
      <div className="flex gap-4 text-lg font-semibold align-items-center">
        <Button
          icon={
            <span className={`pi pi-align-left `} 
            style={{ fontSize: "1.5rem" }} />
          }
          className={`bg-transparent text-white border-none ${HeaderCSS.outlineColor} `} 
          onClick={toggleMenu}
        />
      </div>

      <div className="flex gap-3 align-items-center">
        <NotificationsHeader/>
        <UserCustomizations/>
        <PopupUser/>
      </div>
    </div>
  );
}


    