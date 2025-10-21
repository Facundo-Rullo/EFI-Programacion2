import React, { useEffect, useState} from 'react'
import AddData from '../../../components/AddData/AddData';
import Grilla from '../../../components/Grilla/Grilla';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { mockPermissions } from '../../../Data/mockData';

export default function Permits() {
  const navigate = useNavigate()
  const irAAssignPermitsUser = () => {
    navigate('/assignPermitsUser')
  }
  const irAAssignRolesUser = () => {
    navigate('/assignRoles')
  }

  const [permits, setPermits] = useState([]);
    useEffect(() => {
        // Simulamos la carga de datos desde una api pero los cargamos desde el js
        setPermits(mockPermissions); 
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
                title={'Crear Nuevo Permiso'}
            />
            <Grilla
                addDialog={addMachinaryDialog}
                configColumnsGrilla={configColumnsGrilla}
                btnTitle={'Crear Nuevo Permiso'}
                data={permits}
            />
        </Card>
    </div>
  )
}
