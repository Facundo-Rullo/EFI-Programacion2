import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AddData from '../../../components/AddData/AddData';
import Grilla from '../../../components/Grilla/Grilla';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { mockRoles } from '../../../Data/mockData';

export default function Roles() {
  const navigate = useNavigate()
  const irAAssignPermitsUser = () => {
    navigate('/assignPermitsUser')
  }
  const irAAssignRolesUser = () => {
    navigate('/assignRoles')
  }

  const [roles, setRoles] = useState([]);
    useEffect(() => {
        // Simulamos la carga de datos desde una api pero los cargamos desde el js
        setRoles(mockRoles); 
    }, []);

  const [visible, setVisible] = useState(false);
  const addMachinaryDialog = () => {
      setVisible(true);
  };

  const configInputs = [
    { id: 'GUID', name: 'GUID', label: 'GUID', type: 'text'},
    { id: 'nombre', name: 'Nombre', label: 'Nombre', type: 'text'},
    { id: 'descripcion', name: 'Descripcion', label: 'Descripción', type: 'text'},
  ];

  const accionesBodyTemplate = () => {
    return (
        <div className="flex gap-2">
            <Button icon="pi pi-pencil" className="p-button-warning" tooltip="Editar" />
            <Button icon="pi pi-trash" className="p-button-danger" tooltip="Eliminar" />
            <Button icon="pi pi-cog" className="" tooltip="Roles Hijos" onClick={() => irAAssignRolesUser()}/>
            <Button icon="pi pi-lock" className="p-button-info" tooltip="Permisos" onClick={() => irAAssignPermitsUser()}/>
            <Button icon="pi pi-copy" className="p-button-success" tooltip="Copiar Rol" />
        </div>
    );
  };

  const configColumnsGrilla = [
    { key: 'acciones', field: 'acciones',  header: 'Acciones', body: accionesBodyTemplate, exportable: false },
    { key: 'id', field: 'id',  header: 'ID'},
    { key: 'nombre', field: 'nombre',  header: 'Nombre'},
    { key: 'descripcion', field: 'descripcion',  header: 'Descripcion'},
  ] 

  return (
    <div>
      <Card className="bg__card">
            <AddData 
                visible={visible} 
                setVisible={setVisible}
                configInputs={configInputs}
                title={'Crear Nuevo Rol'}
            />
            <Grilla
                addDialog={addMachinaryDialog}
                configColumnsGrilla={configColumnsGrilla}
                btnTitle={'Crear Nuevo Rol'}
                data={roles}
            />
        </Card>
    </div>
  )
}
