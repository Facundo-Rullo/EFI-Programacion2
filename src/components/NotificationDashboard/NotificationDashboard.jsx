import React from 'react'
import NotificationCSS from './NotificationDashboard.module.css'
import { Avatar } from 'primereact/avatar';
import { Link } from 'react-router-dom';

function NotificationDashboard() {
    const notifications = [
        {
            id: 1,
            icon: 'pi pi-bell',
            msg: 'Notifcaciones Nuevas',
            date: '30/10/2025 10:30:45'
        },
        {
            id: 2,
            icon: 'pi pi-bell',
            msg: 'Notifcaciones Nuevas',
            date: '30/10/2025 10:30:45'
        },
        {
            id: 3,
            icon: 'pi pi-bell',
            msg: 'Notifcaciones Nuevas',
            date: '30/10/2025 10:30:45'
        },
        {
            id: 4,
            icon: 'pi pi-bell',
            msg: 'Notifcaciones Nuevas',
            date: '30/10/2025 10:30:45'
        },
        {
            id: 5,
            icon: 'pi pi-bell',
            msg: 'Notifcaciones Nuevas',
            date: '30/10/2025 10:30:45'
        },
        {
            id: 6,
            icon: 'pi pi-bell',
            msg: 'Notifcaciones Nuevas',
            date: '30/10/2025 10:30:45'
        },
        {
            id: 7,
            icon: 'pi pi-bell',
            msg: 'Notifcaciones Nuevas',
            date: '30/10/2025 10:30:45'
        },
        {
            id: 8,
            icon: 'pi pi-bell',
            msg: 'Notifcaciones Nuevas',
            date: '30/10/2025 10:30:45'
        },
        {
            id: 9,
            icon: 'pi pi-bell',
            msg: 'Notifcaciones Nuevas',
            date: '30/10/2025 10:30:45'
        },
        {
            id: 10,
            icon: 'pi pi-bell',
            msg: 'Notifcaciones Nuevas',
            date: '30/10/2025 10:30:45'
        },
    ]
  return (
    <div>
        <div className='flex justify-content-between align-items-center h-1rem mb-4'>
            <p className=''>Tienes 20 nuevas notificaciones</p>
            <Link 
                to='/login'
                className='
                    text-white
                    no-underline
                    hover:underline
                '
            >Ver todas</Link>
        </div>
        {/* Agregar un boton de ver todas las notificaciones y agregar el scroll para terminar */}
        <div className={`flex gap-3 flex-column max-h-29rem overflow-x-auto pr-2`}>
            {notifications.map((n => (
                <div className={`
                        flex 
                        justify-content-between 
                        align-items-center 
                        p-2 
                        border-round-lg 
                        ${NotificationCSS.hoverNotification}
                    `}>
                    <div className='flex gap-5 align-items-center'>
                        <Avatar icon={n.icon} size="large" shape="circle" />
                        <span className='text-xl'>{n.msg}</span>
                    </div>
                    <span >{n.date}</span>
                </div>
            )))}
        </div>
    </div>
  )
}

export default NotificationDashboard
