import React, { useState, useEffect } from 'react'
import { FileUpload } from 'primereact/fileupload';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext'; 
import { Calendar } from 'primereact/calendar';
import { Editor } from 'primereact/editor';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';

export default function AddData(props) {
    //Sirve para reiniciar los campos del input cuando se cierra el modal
    useEffect(() => {
        if (!props.visible) {
            setFormData({});
        }
    }, [props.visible]);

    const [formData, setFormData] = useState({});
    const [date, setDate] = useState(null);
    const [text, setText] = useState('');
    const [textArea, setTextArea] = useState('');
    const [inputNumber, setInputNumber] = useState(null);

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
                label="Agregar" 
                icon="pi pi-check" 
                onClick={() => props.setVisible(false)} 
                className='outline__color--buttons bg__buttons border-none text-white' />
        </div>
    );

    
  return (
    <div>
        <Dialog 
            header={props.title}
            visible={props.visible} 
            style={{ width: '50vw'}} 
            onHide={() => {if (!props.visible) return; props.setVisible(false);}} 
            footer={footerContent}
            className='bg__card'
        >
            <section className='flex flex-column gap-3'>
                {props.configInputs.map((inputConfig) => {
                    
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
                        
                        case 'date':
                            return(
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="home">{inputConfig.label}</label>
                                    <Calendar 
                                        value={date} 
                                        onChange={(e) => setDate(e.value)} 
                                        inputClassName='outline__color--inputs bg-transparent'
                                    />
                                </div>
                            );
                        
                        case 'description': 
                            return (
                                <div className="card">
                                    <Editor 
                                        value={text} 
                                        onTextChange={(e) => setText(e.htmlValue)} 
                                        style={{ height: '320px' }}
                                    />
                                </div>
                            )
                        
                        case 'textarea':
                            return (
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="home">{inputConfig.label}</label>
                                    <InputTextarea 
                                        value={textArea} 
                                        onChange={(e) => setTextArea(e.target.value)} 
                                        rows={5} 
                                        cols={30} 
                                        className='bg-transparent outline__color--inputs'    
                                    />
                                </div>
                            )

                        case 'number':
                            return (
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="integeronly" className="font-bold block mb-2">{inputConfig.label}</label>
                                    <InputNumber 
                                        inputId="integeronly" 
                                        value={inputNumber} 
                                        onValueChange={(e) => setInputNumber(e.value)} 
                                        inputClassName='bg-transparent outline__color--inputs w-full'
                                    />
                                </div>
                            )

                        default:
                            return null;
                    }
                })}
            </section>
        </Dialog>
    </div>
  )
  
}

