import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext'; 
import { Toast } from 'primereact/toast';

import { mockPermissionsAdd, mockPermissionsAdded } from '../../../Data/mockData';

export default function AssignPermitsUser() {
    const toast = useRef(null);
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Permisos', detail: 'Los cambios se guardaron correctamente.' });
    };

    const navigate = useNavigate()
    const IrAUsuarios = () => {
        navigate('/users')
    }

    const [visible, setVisible] = useState(false);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(mockPermissionsAdd);
    }, []);

    const [productsAdded, setProductsAdded] = useState([]);
    useEffect(() => {
        setProductsAdded(mockPermissionsAdded);
    }, []);

    // Template para la columna de acciones
  const accionesBodyTemplateAdd = () => {
    return (
            <div className="flex gap-2">
                <Button icon="pi pi-check" className="p-button-info" tooltip="Seleccionar" />
            </div>
        );
    };

    const accionesBodyTemplateAdded = () => {
        return (
            <div className="flex gap-2">
                <Button icon="pi pi-times" className="p-button-danger" tooltip="Eliminar" />
            </div>
        );
    };

    return (
        <Card className='bg__card px-3'>
            <Toast ref={toast} />
            <div className='flex justify-content-between flex-wrap gap-3'>
                <div className='flex gap-3 flex-wrap'>
                    <Button 
                        label="Agregar" 
                        icon="pi pi-plus" 
                        onClick={() => setVisible(true)} 
                        className='bg__buttons border-none text-white outline__color--buttons'    
                    />
                    <Dialog 
                        header="Agregar Permiso" 
                        visible={visible} 
                        style={{ width: '50vw' }} 
                        onHide={() => {if (!visible) return; setVisible(false); }}
                    >
                        <DataTable 
                            value={products} 
                            dataKey="id" 
                            paginator 
                            rows={10} 
                            rowClassName={'bg-transparent'} 
                            paginatorClassName='bg-transparent border-none mt-4'
                            emptyMessage="No hay datos cargados."
                        >
                            <Column header="Acción" body={accionesBodyTemplateAdd}></Column>
                            <Column field="id" header="ID"></Column>
                            <Column field="nombre" header="Nombre"></Column>
                            <Column field="descripcion" header="Descrición"></Column>
                        </DataTable>
                    </Dialog>
                    <Button 
                        label="Vovler" 
                        icon="pi pi-arrow-left" 
                        onClick={() => IrAUsuarios()} 
                        className='bg__buttons border-none text-white outline__color--buttons'    
                    />
                    <Button 
                        label="Guardar Cambios" 
                        icon="pi pi-save" 
                        onClick={() => show()} 
                        className='bg__buttons border-none text-white outline__color--buttons'    
                    />
                </div>
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search"> </InputIcon>
                    <InputText placeholder="Buscar"  className='bg-transparent outline__color--inputs'/>
                </IconField>
            </div>

            <div className='mt-5'>
                <DataTable 
                    value={productsAdded} 
                    dataKey="id" 
                    paginator 
                    rows={10} 
                    rowClassName={'bg-transparent'} 
                    paginatorClassName='bg-transparent border-none mt-4'
                    emptyMessage="No hay datos cargados."
                >
                    <Column header="Acción" body={accionesBodyTemplateAdded} exportable={true} headerClassName='bg-transparent'></Column>
                    <Column field="id" header="ID" headerClassName='bg-transparent'></Column>
                    <Column field="nombre" header="Nombre" headerClassName='bg-transparent'></Column>
                    <Column field="descripcion" header="Descrición" headerClassName='bg-transparent'></Column>
                </DataTable>
            </div>
        </Card>
    )
}