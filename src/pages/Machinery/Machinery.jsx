import React, { useState, useEffect } from 'react';
import AddMachinery from '../../components/AddMachinery/AddMachinery';
import PromptView from '../../components/PromptView/PromptView';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Tag } from 'primereact/tag';
import { Card } from 'primereact/card';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext'; 
import { Image } from 'primereact/image';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';

import { mockMaquinaria, mockMantenimientos } from '../../Data/mockData';

export default function GestionMaquinaria() {
    const [maquinas, setMaquinas] = useState([]);
    const [maquinaSeleccionada, setMaquinaSeleccionada] = useState(null);
    const [historialVisible, setHistorialVisible] = useState(false);
    const [visible, setVisible] = useState(false);

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
    
/******************************************************* */

    useEffect(() => {
        // Simulamos la carga de datos desde una API
        setMaquinas(mockMaquinaria);
    }, []);

    const [selectExport, setSelectExport] = useState(null);
    const exports = [
        { name: 'PDF', code: 'PDF' },
        { name: 'Excel', code: 'Excel' }
    ];

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

    // Template para la columna de estado
    const estadoBodyTemplate = (rowData) => {
        return <Tag value={rowData.estado} severity={getSeverity(rowData.estado)} />;
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

    // Función para abrir el diálogo de historial
    const verHistorial = (maquina) => {
        setMaquinaSeleccionada(maquina);
        setHistorialVisible(true);
    };

    // Contenido del Toolbar (botón para agregar)
    const leftButtonAdd = () => {
        return (
            <div className='flex gap-3'>
                <Button label="Nueva Maquinaria" icon="pi pi-plus" className="bg__buttons border-none text-white outline__color--buttons" onClick={() => addMachinaryDialog()}/>
                <Dropdown 
                    value={selectExport} 
                    onChange={(e) => setSelectExport(e.value)} 
                    options={exports} 
                    optionLabel="name" 
                    placeholder="Exportar" 
                    className="w-full md:w-14rem bg__buttons font-medium border-none text-white outline__color--buttons" 
                    pt={{
                        input: {
                            // Usá una clase de color para el texto, por ejemplo 'text-gray-400'
                            className: 'text-white' 
                        }
                    }}
                />
            </div>
        )
    };
    
    
    const endFilter = () => {
      return (
        <div>
          <IconField iconPosition="left">
              <InputIcon className="pi pi-search"> </InputIcon>
              <InputText placeholder="Search"  className='bg-transparent outline__color--inputs'/>
          </IconField>
        </div>
      )
    };

    const imageBodyTemplate = (rowData) => {
      return <Image src={rowData.fotoUrl} zoomSrc={rowData.fotoUrl} alt={rowData.nombre} width="80" height="60" preview />
    };

    return (
        <Card className="bg__card">
            <Toolbar className="mb-4 bg-transparent border-none pt-0" start={leftButtonAdd} end={endFilter}></Toolbar>
            
            <DataTable 
                value={maquinas} 
                dataKey="id" 
                paginator 
                rows={10} 
                rowClassName={'bg-transparent'} 
                paginatorClassName='bg-transparent border-none mt-4'
            >
                <Column key="acciones" headerClassName='bg-transparent' field="acciones" header="Acciones" body={accionesBodyTemplate} exportable={false}></Column>
                <Column key="nombre" headerClassName='bg-transparent' field="nombre" header="Nombre" sortable style={{ minWidth: '16rem' }}></Column>
                <Column key="tipo" headerClassName='bg-transparent' field="tipo" header="Tipo" sortable></Column>
                <Column key="marca" headerClassName='bg-transparent' field="marca" header="Marca" sortable></Column>
                <Column key="modelo" headerClassName='bg-transparent' field="modelo" header="Modelo" sortable></Column>
                <Column key="estado" headerClassName='bg-transparent' field="estado" header="Estado" body={estadoBodyTemplate} sortable sortField="estado"></Column>
                <Column key="foto" headerClassName='bg-transparent' header="Image" field="foto" body={imageBodyTemplate}></Column>
            </DataTable>

            <Dialog 
                header={`Historial de Mantenimiento - ${maquinaSeleccionada?.nombre}`} 
                visible={historialVisible} 
                style={{ width: '60vw' }} 
                onHide={() => setHistorialVisible(false)}
            >
                {maquinaSeleccionada && (
                    <DataTable value={mockMantenimientos.filter(m => m.maquinariaId === maquinaSeleccionada.id)}>
                        <Column field="fecha" header="Fecha" body={(rowData) => new Date(rowData.fecha).toLocaleDateString()}></Column>
                        <Column field="tipo" header="Tipo"></Column>
                        <Column field="descripcion" header="Descripción"></Column>
                        <Column field="responsable" header="Responsable"></Column>
                        <Column field="costo" header="Costo" body={(rowData) => `$${rowData.costo.toLocaleString()}`}></Column>
                    </DataTable>
                )}
        </Dialog>
            <PromptView mockMantenimientos={mockMantenimientos} />
            <AddMachinery 
                visible={visible} 
                setVisible={setVisible}
                configInputsMachinary={configInputsMachinary}
            />
            
        </Card>
    );
}