import React, { useState } from "react";
import { Button } from "primereact/button";
import HeadlessDemo from "../Menu/Menu"; // Este es tu Sidebar
import PopupUser from '../PopupUser/PopupUser'

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  
  return (
    <div className="flex justify-content-between align-items-center py-3 px-4 text-white shadow-2">
      <div className="flex gap-4 text-lg font-semibold align-items-center">
        <Button
          icon={
            <span className="pi pi-align-left" style={{ fontSize: "1.5rem" }} />
          }
          onClick={() => setMenuVisible(true)}
          aria-controls="sidebar"
          aria-expanded={menuVisible}
          className="bg-transparent text-white border-none"
        />
      </div>

      <div className="flex gap-3 align-items-center">
        <Button
          icon={<span className="pi pi-bell" style={{ fontSize: "1.5rem" }} />}
          className="p-button-rounded p-button-text text-white"
        />
        <Button
          icon={<span className="pi pi-cog" style={{ fontSize: "1.5rem" }} />}
          className="p-button-rounded p-button-text text-white"
        />
        <PopupUser/>
      </div>
        
      <HeadlessDemo
        visible={menuVisible}
        onHide={() => setMenuVisible(false)}
      />
    </div>
  );
}
