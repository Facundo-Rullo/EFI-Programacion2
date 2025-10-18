import React from 'react';
import MenuCSS from './Menu.module.css'
import Logo from '../../assets/light/LogoRightText.png'
import { Image } from 'primereact/image';
import { Link } from 'react-router-dom';
import { Divider } from 'primereact/divider';
import ItemDashboard from './Items/ItemDashboard'
import ItemMachinery from './Items/ItemMachinery';
import ItemMaintenance from './Items/ItemMaintenance';
import ItemEmployees from './Items/ItemEmployees';
import ItemInsumos from './Items/ItemInsumos';
import ItemUsers from './Items/ItemUsers';
import ItemRoles from './Items/ItemRoles';

export default function Menu() {
  return (
      <div className='flex flex-column pt-4 pl-4 pb-4'>
        <div className="text-xl font-bold flex justify-content-center align-items-center">
          <Link to={'dashboard'}>
            <Image 
              src={Logo} 
              alt="Logo" 
              width="210"
            />
          </Link>
        </div>

        <Divider />

        <div className={`flex flex-column text-white w-16rem pr-4 overflow-y-auto ${MenuCSS.heightMenu}`}>
          <ItemDashboard />
          <div className='flex flex-column gap-2 mt-4'>
            <ItemMachinery /> 
            <ItemMaintenance /> 
          </div>
          <div className='mt-4'>
            <ItemEmployees/>
          </div>
          <div className='mt-4'>
            <ItemInsumos/>
          </div>
          <div className='mt-4'>
            <ItemUsers/>
            <ItemRoles/>
          </div>
        </div>
      </div>
  );
}

// items: [
//   {
//       label: 'Compose',
//       icon: 'pi pi-file-edit',
//       template: itemRenderer,
//     path: '/dashboadrd',

//   },
//   {
//       label: 'Inbox',
//       icon: 'pi pi-inbox',
//       template: itemRenderer
//   },
//   {
//       label: 'Sent',
//       icon: 'pi pi-send',
//       template: itemRenderer
//   },
//   {
//       label: 'Trash',
//       icon: 'pi pi-trash',
//       template: itemRenderer
//   }
// ]