import React, { useState, useEffect } from 'react'
import AddData from '../../components/AddData/AddData'
import Grilla from '../../components/Grilla/Grilla'
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Card } from 'primereact/card';

import { mockEmpleados } from '../../Data/mockData';

export default function Employees() {

  const [employeesData, setEmployyesData] = useState([]);
    useEffect(() => {
        // Simulamos la carga de datos desde una api pero los cargamos desde el js
        setEmployyesData(mockEmpleados); 
    }, []);


  const [visible, setVisible] = useState(false);
    const addMachinaryDialog = () => {
        setVisible(true);
    };

  const configInputs = [
    { id: 'dni', name: 'DNI', label: 'DNI', type: 'text'},
    { id: 'nombre', name: 'Nombre', label: 'Nombre', type: 'text'},
    { id: 'apellido', name: 'Apellido', label: 'Apellido', type: 'text'},
    { id: 'telefono', name: 'Telefono', label: 'Telefono', type: 'text'},
    { id: 'legajo', name: 'Legajo', label: 'Legajo', type: 'text'},
    { id: 'puesto', name: 'Puesto', label: 'Puesto', type: 'text'},
    { id: 'area', name: 'Area', label: 'Area', type: 'text'},
    { id: 'estado', name: 'Estado', label: 'Estado', type: 'text'},
  ];

  // Función para obtener el color del Tag según el estado
  const getSeverity = (estado) => {
    switch (estado) {
        case 'Activo':
            return 'success';
        case 'Inactivo':
            return 'danger';
        default:
            return null;
    }
};

  const estadoBodyTemplate = (rowData) => {
    return <Tag value={rowData.estado} severity={getSeverity(rowData.estado)} />;
  }; 
  
  // Template para la columna de acciones
  const accionesBodyTemplate = () => {
    return (
        <div className="flex gap-2">
            <Button icon="pi pi-pencil" className="p-button-warning" tooltip="Editar" />
            <Button icon="pi pi-ban" className="p-button-danger" tooltip="Desactivar" />
        </div>
    );
  };

  const configColumnsGrilla = [
      { key: 'acciones', field: 'acciones',  header: 'Acciones', body: accionesBodyTemplate, exportable: false },
      { key: 'nombre', field: 'nombre',  header: 'Nombre'},
      { key: 'apellido', field: 'apellido',  header: 'Apellido'},
      { key: 'dni', field: 'dni',  header: 'DNI'},
      { key: 'puesto', field: 'puesto',  header: 'Puesto'},
      { key: 'area', field: 'area',  header: 'Area'},
      { key: 'telefono', field: 'telefono',  header: 'Telefono'},
      { key: 'estado', field: 'estado',  header: 'Estado', body: estadoBodyTemplate, exportable: false},
  ]
  return (
    <Card className='bg__card'>
      <AddData 
          visible={visible} 
          setVisible={setVisible}
          configInputs={configInputs}
          title={'Agregar Nuevo Empleado'}
      />
      <Grilla
        addDialog={addMachinaryDialog}
        configColumnsGrilla={configColumnsGrilla}
        btnTitle={'Nuevo Empleado'}
        data={employeesData}
      />
    </Card>
  )
}
