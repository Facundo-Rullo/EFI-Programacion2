import React, { useEffect, useState } from 'react'
import AddData from '../../components/AddData/AddData'
import Grilla from '../../components/Grilla/Grilla'
import LotesMovements from './views/LotesMovements';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Dialog } from 'primereact/dialog';

import { historialLotesData, lotesData } from '../../Data/mockData';

export default function Lotes() {
    const [selectedLote, setSelectedLote] = useState(null);
    const [isHistoryVisible, setIsHistoryVisible] = useState(false);

    const openHistory = (lote) => {
    setSelectedLote(lote);
    setIsHistoryVisible(true);
    }

    const [visible, setVisible] = useState(false);

    const addLotesDialog = () => {
        setVisible(true);
    };

    const [lotes, setLotes] = useState([]);
    useEffect(() => {
        // Simulamos la carga de datos desde una api pero los cargamos desde el js
        setLotes(lotesData); 
    }, []);

    // Template para la columna de estado
    const estadoBodyTemplate = (rowData) => {
        return <Tag value={rowData.estado} severity={getSeverity(rowData.estado)} />;
    };

    // Función para obtener el color del Tag según el estado
    const getSeverity = (estado) => {
        switch (estado) {
            case 'Siembra':
                return 'success';
            case 'Crecimiento / Vegetativo':
                return 'warning';
            case 'Libre':
                return 'info';
            default:
                return null;
        }
    };

    const configInputs = [
        { id: 'nombre', name: 'Nombre', label: 'Nombre', type: 'text'},
        { id: 'establecimiento', name: 'Establecimiento', label: 'Establecimiento', type: 'text'},
        { id: 'hectarea', name: 'Hectarea', label: 'Hectárea', type: 'number'},
        { id: 'cultivoActual', name: 'CultivoActial', label: 'Cultivo Actual', type: 'text'},
        { id: 'estado', name: 'Estado', label: 'Estado', type: 'text'},
        { id: 'fechaSiembra', name: 'fechaSiembra', label: 'Fecha Siembra', type: 'date'},
        { id: 'ultimoRendimiento', name: 'ultimoRendimiento', label: 'Ultimo Rendimiento', type: 'number'},
    ];

    // Template para la columna de acciones
    const accionesBodyTemplate = (rowData) => {
        return (
            <div className="flex gap-2">
                <Button icon="pi pi-wrench" className="p-button-info" tooltip="Ver Historial" onClick={() => openHistory(rowData)}/>
                <Button icon="pi pi-pencil" className="p-button-warning" tooltip="Editar" />
                <Button icon="pi pi-trash" className="p-button-danger" tooltip="Eliminar" />
            </div>
        );
    };

    const configColumnsGrilla = [
        { key: 'acciones', field: 'acciones',  header: 'Acciones', body: accionesBodyTemplate, exportable: false },
        { key: 'id', field: 'id',  header: 'ID'},
        { key: 'nombre', field: 'nombre',  header: 'Nombre'},
        { key: 'establecimiento', field: 'establecimiento',  header: 'Establecimiento', },
        { key: 'hectareas', field: 'hectareas',  header: 'Hectáreas', },
        { key: 'cultivoActual', field: 'cultivoActual',  header: 'Cultivo Actual',},
        { key: 'estado', field: 'estado',  header: 'Estado', body: estadoBodyTemplate, exportable: false},
        { key: 'fechaTrabajo', field: 'fechaTrabajo',  header: 'Fecha Trabajo'},
        { key: 'ultimoRendimiento', field: 'ultimoRendimiento',  header: 'Ultimo Rendimiento'},
    ]

  return (
    <div>
      <Card className="bg__card">
            
            <AddData 
                visible={visible} 
                setVisible={setVisible}
                configInputs={configInputs}
                title={'Agregar Nuevo Lote'}
            />
            <Grilla
                addDialog={addLotesDialog}
                configColumnsGrilla={configColumnsGrilla}
                btnTitle={'Nuevo Lote'}
                data={lotes}
            />
            
        </Card>
        <Dialog 
            header={`Historial de Actividades: ${selectedLote?.nombre}`} 
            visible={isHistoryVisible} 
            onHide={() => setIsHistoryVisible(false)}
            style={{ width: '85vw' }} // Un poco más ancho por la cantidad de info
            maximizable
            >
            {/* Se renderiza solo si hay un lote seleccionado */}
            {selectedLote && <LotesMovements loteId={selectedLote.id} />}
        </Dialog>
    </div>
  )
}
