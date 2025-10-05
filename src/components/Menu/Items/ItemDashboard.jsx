import React from 'react';
import { useLocation } from 'react-router-dom';
import MenuCSS from '../Menu.module.css'
import { PanelMenu } from 'primereact/panelmenu';
import { Link } from 'react-router-dom';

export default function Menu() {
  
  const itemSimple = (item) => {
    const location = useLocation();
    const isActive = location.pathname === item.path;
    return(
      <Link
        to={item.path}
        className={`
          flex 
          align-items-center 
          px-3 
          py-2 
          cursor-pointer 
          no-underline 
          border-round-md 
          text-white 
          ${isActive ? MenuCSS.hoverItemMenuActive : ''}
          ${MenuCSS.hoverItemMenu}
        `}
      >
        
        <span className='text-white'>
          <span 
            className={`${item.icon} text-primary`}
          />
        </span>
        <span className={`mx-2 ${item.items && 'font-semibold'} text-white`}>{item.label}</span>
      </Link>
      )
  }
    
  const items = [
    {
        label: 'Dashboard',
        icon: 'pi pi-chart-bar',
        template: itemSimple,
        path: '/dashboard',
    },
];

  return (
    <div className="card flex flex-column justify-content-center">
        <p className='pl-3'>Dashboard</p>
        <div 
        className={`
            border-round-md 
            `}
        >
        <PanelMenu model={items} unstyled/>
        </div>
    </div>
  );
}

