import React, { useState, useEffect } from 'react';
import AddData from '../../components/AddData/AddData';
import ViewMaintenance from '../Maintenance/views/ViewMaintenance';
import Grilla from '../../components/Grilla/Grilla';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

import { mockMaquinaria, mockMantenimientos } from '../../Data/mockData';

export default function GestionMaquinaria() {
    const [maquinaSeleccionada, setMaquinaSeleccionada] = useState(null);
    const [historialVisible, setHistorialVisible] = useState(false);
    const [visible, setVisible] = useState(false);

    const [maquinas, setMaquinas] = useState([]);
    useEffect(() => {
        // Simulamos la carga de datos desde una api pero los cargamos desde el js
        setMaquinas(mockMaquinaria); 
    }, []);
    

    const addMachinaryDialog = () => {
        setVisible(true);
    };
    
    const configInputsMachinary = [
        { id: 'username', name: 'nombre', label: 'Nombre', type: 'text'},
        { id: 'type', name: 'Tipo', label: 'Tipo', type: 'text'},
        { id: 'marca', name: 'Marca', label: 'Marca', type: 'text'},
        { id: 'model', name: 'Modelo', label: 'Modelo', type: 'text'},
        { id: 'state', name: 'Estado', label: 'Estado', type: 'text'},
        { id: 'foto', label: 'Foto de la Máquina', type: 'file' }
    ];

    
    // Función para abrir el diálogo de historial
    const verHistorial = (maquina) => {
        setMaquinaSeleccionada(maquina);
        setHistorialVisible(true);
    };
    
    // Función para obtener el color del Tag según el estado
    const getSeverity = (estado) => {
        switch (estado) {
            case 'Operativa':
                return 'success';
            case 'En Mantenimiento':
                return 'warning';
            case 'Fuera de Servicio':
                return 'danger';
            default:
                return null;
        }
    };

    // Template para la columna de acciones
    const accionesBodyTemplate = (rowData) => {
        return (
            <div className="flex gap-2">
                <Button icon="pi pi-wrench" className="p-button-info" tooltip="Ver Mantenimientos" onClick={() => verHistorial(rowData)} />
                <Button icon="pi pi-pencil" className="p-button-warning" tooltip="Editar" />
                <Button icon="pi pi-trash" className="p-button-danger" tooltip="Eliminar" />
            </div>
        );
    };

    // Template para la columna de estado
    const estadoBodyTemplate = (rowData) => {
        return <Tag value={rowData.estado} severity={getSeverity(rowData.estado)} />;
    }; 

    const imageBodyTemplate = (rowData) => {
      return <Image src={rowData.fotoUrl} zoomSrc={rowData.fotoUrl} alt={rowData.nombre} width="80" height="60" preview />
    };

    const configColumnsGrilla = [
        { key: 'acciones', field: 'acciones',  header: 'Acciones', body: accionesBodyTemplate, exportable: false },
        { key: 'nombre', field: 'nombre',  header: 'Nombre'},
        { key: 'tipo', field: 'tipo',  header: 'Tipo', },
        { key: 'marca', field: 'marca',  header: 'Marca', },
        { key: 'modelo', field: 'modelo',  header: 'Modelo',},
        { key: 'estado', field: 'estado',  header: 'Estado', body: estadoBodyTemplate, exportable: false },
        { key: 'foto', field: 'foto',  header: 'Imagen', body: imageBodyTemplate, exportable: false },
    ]

    return (
        <Card className="bg__card">
            
            <AddData 
                visible={visible} 
                setVisible={setVisible}
                configInputsMachinary={configInputsMachinary}
            />
            <Grilla
                addDialog={addMachinaryDialog}
                configColumnsGrilla={configColumnsGrilla}
                btnTitle={'Nueva Maquinaria'}
                data={maquinas}
            />
            <ViewMaintenance
                visible={historialVisible}
                onHide={() => setHistorialVisible(false)}
                maquina={maquinaSeleccionada}
                mantenimientos={mockMantenimientos}
            />
            
        </Card>
    );
}