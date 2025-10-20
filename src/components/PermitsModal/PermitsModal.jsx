import React, { useState, useRef } from 'react'
import AddData from '../AddData/AddData';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

function AssignANewPassword({visible, onHide}) {
    const [visibleAdd, setVisibleAdd] = useState(false);
    // const addUserDialog = () => {
    //     setVisible(true);
    // };

    // Contenido del Toolbar (botón para agregar)
    
  return (
    <div>
        <Dialog header="Asignar Permiso" visible={visible} style={{ width: '50vw' }} onHide={onHide}>
            
        </Dialog>
    </div>
  )
}

export default AssignANewPassword
