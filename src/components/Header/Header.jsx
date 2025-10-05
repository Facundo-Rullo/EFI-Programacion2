import React from "react";
import HeaderCSS from './Header.module.css'
import { Button } from "primereact/button";
import PopupUser from '../PopupUser/PopupUser'
import UserCustomizations from '../UserCustomizations/UserCustomizations'
import Notifications from '../Notifications/Notifications'


export default function Header({ toggleMenu }) {
  
  return (
    <div className="flex justify-content-between align-items-center p-4 text-white shadow-2">
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
        <Notifications/>
        <UserCustomizations/>
        <PopupUser/>
      </div>
    </div>
  );
}


    