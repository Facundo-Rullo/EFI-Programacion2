// Archivo: /components/LotesMovements.js

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';

// Importa el mock de datos del historial
import { historialLotesData } from '../../../Data/mockData';

// El componente recibe el ID del lote como una prop
export default function LotesMovements({ loteId }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Filtramos el historial para encontrar las actividades del lote seleccionado
    if (loteId) {
      const loteActivities = historialLotesData.filter(act => act.loteId === loteId);
      setActivities(loteActivities);
    }
  }, [loteId]); // Se ejecuta cada vez que el loteId cambia

  // Plantilla para formatear el costo como moneda
  const costoBodyTemplate = (rowData) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(rowData.costoTotal);
  };

  // Plantilla para mostrar la lista de insumos utilizados
  const insumosBodyTemplate = (rowData) => {
    if (!rowData.insumosUtilizados || rowData.insumosUtilizados.length === 0) {
      return <span>N/A</span>;
    }

    return (
      <ul>
        {rowData.insumosUtilizados.map((insumo, index) => (
          <li key={index}>
            {insumo.producto}: <strong>{insumo.cantidad}</strong>
          </li>
        ))}
      </ul>
    );
  };
  
  // Plantilla para dar color al tipo de actividad
  const actividadBodyTemplate = (rowData) => {
    let severity = 'info'; // Color por defecto
    const tipo = rowData.tipoActividad.toLowerCase();

    if (tipo.includes('siembra')) severity = 'success';
    if (tipo.includes('cosecha')) severity = 'warning';
    if (tipo.includes('fertilización') || tipo.includes('herbicida')) severity = 'primary';
    if (tipo.includes('plagas') || tipo.includes('análisis')) severity = 'help';
    
    return <Tag value={rowData.tipoActividad} severity={severity} />;
  }

  return (
    <div className="card">
      <DataTable
        value={activities}
        emptyMessage="Este lote no tiene actividades registradas."
      >
        <Column field="fecha" header="Fecha" sortable style={{ minWidth: '120px' }} />
        <Column header="Actividad" body={actividadBodyTemplate} style={{ minWidth: '150px' }} />
        <Column field="descripcion" header="Descripción" style={{ minWidth: '250px' }} />
        <Column header="Insumos Utilizados" body={insumosBodyTemplate} style={{ minWidth: '250px' }} />
        <Column header="Costo Total" body={costoBodyTemplate} sortable style={{ minWidth: '120px' }} />
        <Column field="responsable" header="Responsable" style={{ minWidth: '120px' }} />
      </DataTable>
    </div>
  );
}