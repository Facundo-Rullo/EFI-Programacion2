import React, { useState } from 'react'
import UserCustomizationsCSS from './UserCustomizations.module.css'
import { Sidebar } from 'primereact/sidebar';
import { Button } from "primereact/button";
import { Avatar } from 'primereact/avatar';
import { Divider } from 'primereact/divider';
import { SelectButton } from 'primereact/selectbutton';

function UserCustomizations() {
  const options = ['Oscuro', 'Claro'];
  const [value, setValue] = useState(options[0]);
  const [visibleRight, setVisibleRight] = useState(false);
  const themes = [
    '#2196F3', // Azul
    '#00C853', // Verde
    '#E91E63', // Rosa fuerte
    '#FF9800', // Naranja
    '#9C27B0', // Violeta
    '#F44336', // Rojo
    '#00BCD4', // Cian
    '#FFEB3B', // Amarillo
    '#3F51B5', // Azul índigo
    '#4CAF50', // Verde medio
    '#FF5722', // Naranja rojizo
    '#673AB7', // Violeta profundo
  ];
  return (
    <div>
      <Button
          icon={<span className="pi pi-cog" 
          style={{ fontSize: "1.5rem" }} />}
          className="p-button-rounded p-button-text text-white"
          onClick={() => setVisibleRight(true)}
        />
      <Sidebar 
        visible={visibleRight} 
        position="right" 
        onHide={() => setVisibleRight(false)}
        className={`${UserCustomizationsCSS.background}`}
      >
              <h2>Temas</h2>
              <div className='flex justify-content-between flex-wrap gap-4'>
                {themes.map((color, i) => (
                  <Avatar
                    key={i} 
                    shape="circle" 
                    size="large" 
                    style={{
                      backgroundColor: color,
                      cursor: 'pointer',
                      border: '2px solid transparent',
                      transition: 'all 0.2s'
                    }}
                    onClick={() => console.log(`Seleccionaste ${color}`)}
                    className="hover:border-white"
                  />
                ))}
            </div>
            <Divider className='my-6'/>
            <h2>Fondo</h2>
            <div>
              <SelectButton 
                value={value} 
                onChange={(e) => setValue(e.value)} 
                options={options} 
                pt={{
                  button: (options) => ({
                    style: {
                      backgroundColor: options.context?.selected ? '#8A2BE2' : '#1f2937',
                      color: options.context?.selected ? '#fff' : 'rgba(255, 255, 255, 0.87)',
                      border: options.context?.selected ? '1px solid #8A2BE2' : '1px solid #8A2BE2',
                      outline: 'none',
                      boxShadow: 'none',
                    },
                  }),
                }}
              />
             
            </div>
      </Sidebar>
    </div>
  )
}

export default UserCustomizations
