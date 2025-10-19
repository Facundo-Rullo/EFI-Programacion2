import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';

import { movementsData } from '../../../Data/mockData';

export default function StockMovements({ productId }) {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const productMovements = movementsData.filter(m => m.productId === productId);
    setMovements(productMovements);
  }, [productId]);

  const getSeverityForType = (type) => {
    if (type.toLowerCase().includes('ingreso') || type.toLowerCase().includes('positivo')) {
      return 'success'; 
    }
    if (type.toLowerCase().includes('salida') || type.toLowerCase().includes('negativo')) {
      return 'warning'; 
    }
    if (type.toLowerCase().includes('pérdida')) {
      return 'danger'; 
    }
    return 'info'; 
  };

  const typeBodyTemplate = (rowData) => {
    return <Tag value={rowData.type} severity={getSeverityForType(rowData.type)} />;
  };

  const quantityBodyTemplate = (rowData) => {
    const isPositive = rowData.quantity > 0;
    const color = isPositive ? 'var(--green-500)' : 'var(--red-500)';
    const sign = isPositive ? '+' : '';
    return <span style={{ color: color, fontWeight: 'bold' }}>{`${sign}${rowData.quantity}`}</span>;
  };

  return (
    <div className="card">
      <DataTable 
        value={movements} 
        emptyMessage="Este producto no tiene movimientos registrados."
      >
        <Column field="date" header="Fecha" sortable style={{ minWidth: '120px' }} />
        <Column header="Tipo de Movimiento" body={typeBodyTemplate} style={{ minWidth: '200px' }} />
        <Column header="Cantidad" body={quantityBodyTemplate} style={{ minWidth: '100px' }} />
        <Column field="user" header="Usuario" style={{ minWidth: '100px' }} />
        <Column field="notes" header="Notas" style={{ minWidth: '250px' }} />
      </DataTable>
    </div>
  );
}