import React, { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import CustomBreadCrumb from '../BreadCrumb/BreadCrumb';
import HeadlessDemo from '../Menu/Menu'; // Este es tu Sidebar

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="flex justify-content-between align-items-center p-3 bg-gray-800 text-white shadow-2">
      <div className="flex gap-4 text-lg font-semibold align-items-center">
        {/* 🔥 Botón accesible que abre el menú */}
        <Button
          icon="pi pi-align-left"
          onClick={() => setMenuVisible(true)}
          aria-controls="sidebar"
          aria-expanded={menuVisible}
        />

        <CustomBreadCrumb />
      </div>

      <div className="flex gap-3 align-items-center">
        <Button icon="pi pi-bell" className="p-button-rounded p-button-text text-white" />
        <Button icon="pi pi-cog" className="p-button-rounded p-button-text text-white" />
        <Avatar label="JY" size="large" shape="circle" />
      </div>

      {/* 🔥 Sidebar controlado desde el header */}
      <HeadlessDemo visible={menuVisible} onHide={() => setMenuVisible(false)} />
    </div>
  );
}
