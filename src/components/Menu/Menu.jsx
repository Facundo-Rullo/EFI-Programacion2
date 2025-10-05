import React from 'react';
import MenuCSS from './Menu.module.css'
import Logo from '../../assets/light/LogoRightText.png'
import { Image } from 'primereact/image';
import { Link } from 'react-router-dom';
import { Divider } from 'primereact/divider';
import ItemDashboard from './Items/ItemDashboard'

export default function Menu() {
  return (
      <div className='flex flex-column p-4'>
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

        <div className={`text-white w-15rem overflow-y-auto ${MenuCSS.heightMenu}`}>
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
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