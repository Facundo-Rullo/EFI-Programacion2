import React, {useState, useEffect} from 'react';
import AddData from '../../components/AddData/AddData'
import Grilla from '../../components/Grilla/Grilla'
import StockMovements from './Views/StockMovements';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Dialog } from 'primereact/dialog';

import { stockData } from '../../Data/mockData';

export default function Stock() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isHistoryVisible, setIsHistoryVisible] = useState(false);

    const openHistory = (product) => {
        setSelectedProduct(product);
        setIsHistoryVisible(true);
    }

    const [stock, setStock] = useState([]);
    useEffect(() => {
        // Simulamos la carga de datos desde una api pero los cargamos desde el js
        setStock(stockData); 
    }, []);

    const [visible, setVisible] = useState(false);
    const addStockDialog = () => {
        setVisible(true);
    };

    const dataCard = [
        { key: 'card1', class: 'pi pi-dollar', backgroundCard: 'var(--success)', color: 'var(--white_900)', title: 'Valor Total', number: '$1.250.000', description: ''},
        { key: 'card2', class: 'pi pi-exclamation-triangle', backgroundCard: 'var(--warning)', color: 'var(--white_900)', title: 'Bajo Stock Mínimo', number: '4', description: 'Productos'},
        { key: 'card3', class: 'pi pi-exclamation-circle', backgroundCard: 'var(--violet_500)', color: 'var(--white_900)', title: 'Cantidad Total', number: '450', description: 'Items'}
    ];

    const configInputs = [
        { id: 'sku', name: 'sku', label: 'SKU', type: 'text'},
        { id: 'producto', name: 'producto', label: 'Producto', type: 'text'},
        { id: 'categoria', name: 'categoria', label: 'Categoria', type: 'text'},
        { id: 'ubicacion', name: 'ubicacion', label: 'Ubicacion', type: 'text'},
        { id: 'cantidadActual', name: 'cantidadActual', label: 'Cantidad Actual', type: 'text'},
        { id: 'stockMinimo', name: 'stockMinimo', label: 'Stock Minimo', type: 'text'},
    ];

    // Template para la columna de acciones
    const accionesBodyTemplate = (rowData) => {
        return (
            <div className="flex gap-2">
                <Button icon="pi pi-wave-pulse" className="" tooltip="Gestionar Stock" />
                <Button icon="pi pi-wrench" className="p-button-info" tooltip="Ver Movimientos" onClick={() => openHistory(rowData)}/>
                <Button icon="pi pi-pencil" className="p-button-warning" tooltip="Editar" />
                <Button icon="pi pi-trash" className="p-button-danger" tooltip="Eliminar" />
            </div> 
        );
    };
    
    // Template para la columna de estado
    const estadoBodyTemplate = (rowData) => {
        return <Tag value={rowData.estado} severity={getSeverity(rowData.estado)} />;
    };

    // Función para obtener el color del Tag según el estado
    const getSeverity = (estado) => {
        switch (estado) {
            case 'En Stock':
                return 'success';
            case 'Bajo Stock':
                return 'warning';
            case 'Agotado':
                return 'danger';
            default:
                return null;
        }
    };

    const configColumnsGrilla = [
        { key: 'acciones', field: 'acciones',  header: 'Acciones', body: accionesBodyTemplate, exportable: false },
        { key: 'skuProducto', field: 'producto',  header: 'Producto' },
        { key: 'skuUbicacion', field: 'ubicacion',  header: 'Ubicacion' },
        { key: 'skuCantActual', field: 'cantidadActual',  header: 'Cantidad Actual' },
        { key: 'skuStockMinimo', field: 'stockMinimo',  header: 'Stock Minimo'},
        { key: 'skuEstado', field: 'estado',  header: 'Estado', body: estadoBodyTemplate, exportable: false},
    ]


  return (
    <div>
        <section className='flex flex-wrap justify-content-around align-items-center gap-5 w-full'>
            {dataCard.map((card) => (
                <Card key={card.key} className=" flex-1 " style={{ background: card.backgroundCard }}>
                    <div className='flex gap-5 ml-3'>
                        <i className={`${card.class} text-4xl text-white line-height-2`} style={{ color: card.color }}></i>
                        <div className='flex-1'>
                            <h4 className='m-0 font-semibold text-3xl text-white'>{card.title}</h4>
                            <div className='mt-3'>
                                <span className='text-2xl font-bold text-white'>{card.number}</span>
                                <span className='ml-2 text-white font-bold text-2xl'>{card.description}</span>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </section>
        <Card className='mt-6 bg__card'>
            <AddData 
                visible={visible} 
                setVisible={setVisible}
                configInputs={configInputs}
                title={'Agregar Nuevo Producto'}
            />
            <Grilla
                addDialog={addStockDialog}
                configColumnsGrilla={configColumnsGrilla}
                btnTitle={'Nuevo Producto'}
                data={stock}
            />
        </Card>
        <Dialog 
            header={`Historial de Movimientos: ${selectedProduct?.producto}`} 
            visible={isHistoryVisible} 
            onHide={() => setIsHistoryVisible(false)}
            style={{ width: '75vw' }}
            maximizable
        >
            {selectedProduct && <StockMovements productId={selectedProduct.id} />}
        </Dialog>
    </div>
  );
}



    
