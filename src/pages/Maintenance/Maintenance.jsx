import React, { useState, useEffect} from 'react'
import AddData from '../../components/AddData/AddData'
import Grilla from '../../components/Grilla/Grilla'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

import { mockMantenimientos } from '../../Data/mockData'

export default function Maintenance() {
    const [visible, setVisible] = useState(false);

    const [maquinas, setMaquinas] = useState([]);
    useEffect(() => {
        // Simulamos la carga de datos desde una api pero los cargamos desde el js
        setMaquinas(mockMantenimientos); 
    }, []);

    const addMintenanceDialog = () => {
        setVisible(true);
    };
    
    const configInputs = [
        { id: 'fecha', name: 'Fecha', label: 'Fecha', type: 'date'},
        { id: 'type', name: 'Tipo', label: 'Tipo', type: 'text'},
        { id: 'description', name: 'Description', label: 'Descripcion', type: 'textarea'},
        { id: 'responsable', name: 'Responsable', label: 'Responsable', type: 'text'},
        { id: 'costo', name: 'Costo', label: 'Costo', type: 'number'},
    ];

    // Template para la columna de acciones
    const accionesBodyTemplate = () => {
        return (
            <div className="flex gap-2">
                <Button icon="pi pi-pencil" className="p-button-warning" tooltip="Editar" />
                {/* <Button icon="pi pi-trash" className="p-button-danger" tooltip="Eliminar" /> */}
            </div>
        );
    };

    const configColumnsGrilla = [
        { key: 'acciones', field: 'acciones',  header: 'Acciones', body: accionesBodyTemplate, exportable: false },
        { key: 'fecha', field: 'fecha',  header: 'Fecha'},
        { key: 'tipo', field: 'tipo',  header: 'Tipo'},
        { key: 'descripcion', field: 'descripcion',  header: 'Descripcion', },
        { key: 'responsable', field: 'responsable',  header: 'Responsable', },
        { key: 'costo', field: 'costo',  header: 'Costo',},
    ]

  return (
    <div>
      <Card className="bg__card">
            
            <AddData 
                visible={visible} 
                setVisible={setVisible}
                configInputs={configInputs}
                title={'Agregar Nuevo Mantenimiento'}
            />
            <Grilla
                addDialog={addMintenanceDialog}
                configColumnsGrilla={configColumnsGrilla}
                btnTitle={'Nuevo Mantenimiento'}
                data={maquinas}
            />
            
        </Card>
    </div>
  )
}
