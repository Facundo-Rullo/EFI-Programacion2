import React, { useRef } from 'react';
import PopupUserCSS from './PopupUser.module.css'
import { Link } from 'react-router-dom';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Avatar } from "primereact/avatar";
        
    
export default function PopupUser() {
    const op = useRef(null);
    const roles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const items = [
        {
            label: 'Cambiar Foto',
            icon: 'pi pi-user',
            path: '/dashboard'           
        },
        {
            label: 'Informacion',
            icon: 'pi pi-id-card',
            path: '/dashboard'
        },
        {
            label: 'Cambiar Contraseña',
            icon: 'pi pi-key',
            path: '/dashboard'
        },
        {
            label: 'Cerrar Sesion',
            icon: 'pi pi-sign-out',
            path: '/login'
        }
    ];
    return (
        <div className="card flex justify-content-center">
            <Avatar 
                image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} 
                label="JY" 
                size="large" 
                shape="circle"
                className="cursor-pointer" 
                onClick={(e) => op.current.toggle(e)}
            />
            <OverlayPanel 
                ref={op}
                pt={{
                    content: { className: 'p-0' } 
                  }}
            >
                <div className={`
                        flex 
                        p-2
                        flex-column 
                        justify-content-center 
                        align-items-center
                        border-round-top-sm
                        ${PopupUserCSS.backgroundCard}
                    `}>
                    <Avatar 
                        image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} 
                        size="xlarge" 
                        shape='square'
                        className='mt-3'
                    />
                    <p className='text-xl font-medium'>Facundo Rullo</p>
                    <div className='flex flex-wrap justify-content-center gap-2 w-15rem max-h-10rem overflow-y-auto'>
                        {roles.map((r) => (
                            <span key={r}>Rol{r} </span>
                        ))}
                    </div>
                </div>
                <div className='flex flex-column justify-content-center'>
                    {items.map(i => (
                        <div>
                            <Link 
                                to={i.path}
                                className={`
                                    flex 
                                    aling-items-center 
                                    gap-3 
                                    p-3 
                                    no-underline 
                                    text-white 
                                    ${PopupUserCSS.backgroundCardOptions}
                                `}
                            >
                                <i className={`${i.icon} line-height-3`}></i>
                                {i.label}
                            </Link> 
                        </div>
                    ))}
                </div>
            </OverlayPanel>
        </div>
    );
}
        