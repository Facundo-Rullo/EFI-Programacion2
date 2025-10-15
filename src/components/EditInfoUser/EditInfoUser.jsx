import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

export default function EditInfoUser({visible, setVisible}) {
    const [date, setDate] = useState(new Date(2001, 5, 8));
    const [name, setName] = useState('Facundo Tómas');
    const [lastName, setLastName] = useState('Rullo Bogliani');
    const [email, setEmail] = useState('frullo@trigolimpio.com');
    const [phone, setPhone] = useState('+54 123 4567890');
    const [home, setHome] = useState('Calle 34');

    const footerContent = (
        <div>
            <Button 
                label="Cancelar" 
                icon="pi pi-times" 
                onClick={() => setVisible(false)} 
                className="bg-transparent outline__color--buttons text-white" 
                style={{borderColor: 'var(--violet_500)'}}
            />
            <Button 
                label="Actualizar" 
                icon="pi pi-check" 
                onClick={() => setVisible(false)} 
                className='outline__color--buttons bg__buttons border-none text-white' />
        </div>
    );

  return (
    <div className="card flex justify-content-center">
        
        <Dialog 
            header="Actualizar informacion de usuario" 
            visible={visible} 
            style={{ width: '50vw'}} 
            onHide={() => {if (!visible) return; setVisible(false); }} 
            footer={footerContent}
        >
        <section className='flex flex-column gap-3'>
            <div className="flex flex-column gap-2">
                <label htmlFor="username">Nombre</label>
                <InputText 
                    id="username" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className='outline__color--inputs bg-transparent'
                />
            </div>
            <div className="flex flex-column gap-2">
                <label htmlFor="lastName">Apellido</label>
                <InputText 
                    id="lastName" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)}
                    className='outline__color--inputs bg-transparent'
                />
            </div>
            <div className="flex flex-column gap-2">
                <label htmlFor="email">Correo electronico</label>
                <InputText 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className='outline__color--inputs bg-transparent'
                />
            </div>
            <div className="flex flex-column gap-2">
                <label htmlFor="phone">Telefono</label>
                <InputText 
                    id="phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    className='outline__color--inputs bg-transparent'
                />
            </div>
            <div className="flex flex-column gap-2">
                <label htmlFor="home">Domicilio</label>
                <InputText 
                    id="home" 
                    value={home} 
                    onChange={(e) => setHome(e.target.value)}
                    className='outline__color--inputs bg-transparent'
                />
            </div>
            <div className="flex flex-column gap-2">
                <label htmlFor="home">Fecha de nacimiento</label>
                <Calendar 
                    value={date} 
                    onChange={(e) => setDate(e.value)} 
                    inputClassName='outline__color--inputs bg-transparent'
                />
            </div>
        </section>
        </Dialog>
    </div>
  )
}
