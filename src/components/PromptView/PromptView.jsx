import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';

export default function PromptView({historialVisible, setHistorialVisible}) {
    const [maquinaSeleccionada, setMaquinaSeleccionada] = useState(null);

  return (
    <div>
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
    </div>
  )
}
