import React, { useRef } from 'react';
import ChangePhotoCSS from './ChangePhoto.module.css'
import { useNavigate } from 'react-router-dom';
import { Image } from 'primereact/image';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';

function ChangePhoto() {
    const navigate = useNavigate()
    const irADashboard = () => {
        navigate('/dashboard')
    }

    const toast = useRef(null);

    const show = e => {
        e.preventDefault();
        toast.current.show({ severity: 'success', summary: 'Foto actualizada con exito'});
    };

  return (
    <div >
        <Toast ref={toast} />
        <Card title="Cambiar Foto" className={`p-4 ${ChangePhotoCSS.backgroundCard}`}>
            <div className='flex gap-2 text-lg font-semibold mb-3'>
                <span>Usuario: </span>
                <span>FRULLO</span>
            </div>
            <div className='flex flex-wrap gap-3 text-lg font-semibold'>
                <span>Foto Actual:</span>
                <Image 
                  src="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" 
                  alt="foto" 
                  width="200" 
                  className='mt-2'
                />
            </div>
            <div className='mt-5'>
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
                        chooseButton: {className: `text-white border-none ${ChangePhotoCSS.colorBtnUpload}`},
                    }}
                />
            </div>
            <p className={`${ChangePhotoCSS.colorText} text-lg`}>
                <i className='pi pi-exclamation-triangle mr-2'></i> 
                Para obtener la mejor calidad, recomendamos subir una imagen de 300x300 píxeles como foto de perfil.
            </p>
            <div className='flex gap-3'>
              <Button 
                  label="Cambiar Foto" 
                  className={`border-none text-white ${ChangePhotoCSS.colorBtnUpload}`} 
                  onClick={show}
              />
              <Button 
                  label="Cancelar" 
                  className={`border-none text-white ${ChangePhotoCSS.colorBtnUpload}`} 
                  onClick={() => irADashboard()}
              />
            </div>
        </Card>
    </div>
  )
}

export default ChangePhoto

