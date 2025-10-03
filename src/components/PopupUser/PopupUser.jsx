
import React, { useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { Avatar } from "primereact/avatar";


export default function PopupUser() {
    const menu = useRef(null);
    const items = [
        {
            label: 'Cambiar Avatar',
            icon: 'pi pi-user'            
        },
        {
            label: 'Informacion',
            icon: 'pi pi-id-card',
            items: [
                {
                    label: 'Ver información',
                    icon: 'pi pi-eye'
                },
                {
                    label: 'Editar Información',
                    icon: 'pi pi-user-edit'
                }
            ]
        },
        {
            label: 'Cambiar Contraseña',
            icon: 'pi pi-key'
        },
        {
            separator: true
        },
        {
            label: 'Cerrar Sesion',
            icon: 'pi pi-sign-out',
        }
    ];

    return (
        <div>
          <TieredMenu model={items} popup ref={menu} breakpoint="767px" className='w-15rem'/>
          <Avatar 
            image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} 
            label="JY" 
            size="large" 
            shape="circle"
            className="cursor-pointer" 
            onClick={(e) => menu.current.toggle(e)}
          />
        </div>
    )
}
        