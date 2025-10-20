import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

function AssignANewPassword({visible, onHide}) {
  const navigate = useNavigate()
  const irADashboard = () => {
    navigate('/dashboard')
  }

  const [cuit, setCuit] = useState('99-99999999-9');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');


  return (
    <div>
        <Dialog header="Asignar Nueva Contraseña" visible={visible} style={{ width: '50vw' }} onHide={onHide}>
            <form className='flex flex-column gap-3'>
                <div className="flex flex-column gap-2 w-full">
                    <label htmlFor="username">Cuit</label>
                    <InputText 
                        id="username" 
                        value={cuit} 
                        onChange={(e) => setCuit(e.target.value)}
                        readOnly  
                        className={`bg-transparent outline__color--inputs`}
                    />
                </div>
                <div className="flex flex-column gap-2">
                    <label htmlFor="username">Nueva Contraseña</label>
                    <Password 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                        toggleMask 
                        className="static block"
                        inputClassName={`bg-transparent text-white w-full outline__color--inputs`}
                    />
                </div>
                <div className="flex flex-column gap-2">
                    <label htmlFor="username">Comfirmar Contraseña</label>
                    <Password 
                        value={confirmNewPassword} 
                        onChange={(e) => setConfirmNewPassword(e.target.value)} 
                        toggleMask 
                        className="static block"
                        inputClassName={`bg-transparent text-white w-full outline__color--inputs`}
                    />
                </div>
                <div className='flex gap-3 mt-3 '>
                    <Button 
                    type='submit' 
                    label="Confirmar" 
                    className='
                        bg__buttons 
                        text-white 
                        border-none 
                        outline__color--buttons
                    ' 
                    />
                    <Button 
                    type='button' 
                    label="Cancelar" 
                    className='
                        bg__buttons 
                        text-white 
                        border-none 
                        outline__color--buttons
                    ' 
                    onClick={onHide}
                    />
                </div>
            </form>
        </Dialog>
    </div>
  )
}

export default AssignANewPassword
