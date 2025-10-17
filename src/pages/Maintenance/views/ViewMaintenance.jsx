import React from 'react'
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function PromptView(props) {
    if (!props.maquina) {
        return null; //si no hay nada no renderiza nadad 
    }

    const mantenimientosFiltrados = props.mantenimientos.filter(m => m.maquinariaId === props.maquina.id);

  return (
    <div>
        <Dialog 
            header={`Historial de Mantenimiento - ${props.maquina.nombre}`} 
            visible={props.visible} 
            style={{ width: '60vw' }} 
            onHide={props.onHide}
        >
            <DataTable value={mantenimientosFiltrados}>
                <Column field="fecha" header="Fecha" body={(rowData) => new Date(rowData.fecha).toLocaleDateString()}></Column>
                <Column field="tipo" header="Tipo"></Column>
                <Column field="descripcion" header="Descripción"></Column>
                <Column field="responsable" header="Responsable"></Column>
                <Column field="costo" header="Costo" body={(rowData) => `$${rowData.costo.toLocaleString()}`}></Column>
            </DataTable>
        </Dialog>
    </div>
  )
}
