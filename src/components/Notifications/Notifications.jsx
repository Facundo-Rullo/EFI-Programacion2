import React, { useRef } from 'react';
import NotificationsCSS from './Notifications.module.css'
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
    
export default function BasicDemo() {
    const op = useRef(null);

    return (
        <div className="card flex justify-content-center">
            <Button 
                type="button" 
                icon={<span className="pi pi-bell" style={{ fontSize: "1.5rem" }} />} 
                className="p-button-rounded p-button-text text-white"
                onClick={(e) => op.current.toggle(e)} 
            />
            <OverlayPanel ref={op}>
                <p>No tienes notificaciones nuevas</p>
                <Divider />
                <Button
                    label="Ver todas las notificaciones"
                    className={`border-none text-white ${NotificationsCSS.colorBoton}`}
                />
            </OverlayPanel>
        </div>
    );
}
        