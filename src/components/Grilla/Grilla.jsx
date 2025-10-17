import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { Dropdown } from 'primereact/dropdown';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext'; 


// 👇 1. Recibimos un único objeto 'props'.
export default function Grilla(props) {
    const [selectExport, setSelectExport] = useState(null);
    const exports = [
        { name: 'PDF', code: 'PDF' },
        { name: 'Excel', code: 'Excel' }
    ];
    
    // Contenido del Toolbar (botón para agregar)
    const leftButtonAdd = () => {
        return (
            <div className='flex gap-3'>
                <Button label={props.btnTitle} icon="pi pi-plus" className="bg__buttons border-none text-white outline__color--buttons" onClick={() => props.addMachinaryDialog()}/>
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

    return (
        <div>
            <Toolbar className="mb-4 bg-transparent border-none pt-0" start={leftButtonAdd} end={endFilter}></Toolbar>
            
            <DataTable 
                value={props.data} 
                dataKey="id" 
                paginator 
                rows={10} 
                rowClassName={'bg-transparent'} 
                paginatorClassName='bg-transparent border-none mt-4'
                emptyMessage="No hay datos cargados."
            >
               {props.configColumnsGrilla.map((col) => (
                    <Column 
                        key={col.key}
                        headerClassName='bg-transparent'
                        field={col.field}
                        header={col.header}
                        sortable
                        body={col.body}
                        exportable={col.exportable}
                    />
                ))}
            </DataTable>
       </div>
    )
}