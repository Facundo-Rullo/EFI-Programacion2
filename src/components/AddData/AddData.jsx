import React, { useState, useEffect } from 'react'
import { FileUpload } from 'primereact/fileupload';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext'; 

export default function AddData(props) {
    //Sirve para reiniciar los campos del input cuando se cierra el modal
    useEffect(() => {
        if (!props.visible) {
            setFormData({});
        }
    }, [props.visible]);

    const [formData, setFormData] = useState({});

    //controlo el estado del input con el form data porque solo uso un State
    const InputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData, 
            [id]: value   
        }));
    };
   
    const footerContent = (
        <div>
            <Button 
                label="Cancelar" 
                icon="pi pi-times" 
                onClick={() => props.setVisible(false)} 
                className="bg-transparent outline__color--buttons text-white" 
                style={{borderColor: 'var(--violet_500)'}}
            />
            <Button 
                label="Actualizar" 
                icon="pi pi-check" 
                onClick={() => props.setVisible(false)} 
                className='outline__color--buttons bg__buttons border-none text-white' />
        </div>
    );

    
  return (
    <div>
        <Dialog 
            header="Agregar Nueva Maquinaria" 
            visible={props.visible} 
            style={{ width: '50vw'}} 
            onHide={() => {if (!props.visible) return; props.setVisible(false);}} 
            footer={footerContent}
        >
            <section className='flex flex-column gap-3'>
                {props.configInputsMachinary.map((inputConfig) => {
                    
                    switch (inputConfig.type) {
                        case 'text':
                            return (
                                <div className="flex flex-column gap-2" key={inputConfig.id}>
                                    <label htmlFor={inputConfig.id}>{inputConfig.label}</label>
                                    <InputText 
                                        id={inputConfig.id} 
                                        value={formData[inputConfig.id] || ''} 
                                        onChange={InputChange}
                                        className='outline__color--inputs bg-transparent'
                                    />
                                </div>
                            );
                        
                        case 'file':
                            return (
                                <div className="flex flex-column gap-2" key={inputConfig.id}>
                                    <label>{inputConfig.label}</label>
                                    <FileUpload 
                                        name="demo[]" 
                                        url={'/api/upload'} 
                                        accept="image/*" 
                                        maxFileSize={1000000} 
                                        uploadLabel="Subir"
                                        chooseLabel="Elegir archivo"
                                        cancelLabel="Cancelar"
                                        auto
                                        emptyTemplate={<p className="m-0" >Arrastre y suelte archivos aquí para cargarlos.</p>} 
                                        pt={{
                                            chooseButton: {className: `text-white border-none bg__buttons outline__color--buttons`},
                                        }}
                                    />
                                </div>
                            );

                        default:
                            return null;
                    }
                })}
            </section>
        </Dialog>
    </div>
  )
  
}

