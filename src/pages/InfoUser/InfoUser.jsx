import React, { useState} from 'react'
import EditInfoUser from '../../components/EditInfoUser/EditInfoUser';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
        

export default function InfoUser() {
    const [visible, setVisible] = useState(false);
    
  return (
    <div>
        <Card 
            className={`bg__card`}
            title={
              <div className='flex flex-wrap align-items-center justify-content-between  '>
                <div className='flex flex-wrap align-items-center gap-3'>
                  <i className={`pi pi-user text-2xl line-height-3`}></i>
                  <p className='m-0'>Informacion de perfil</p>
                </div>
                <div className='flex align-items-center gap-3'>
                  <Button
                    icon={
                      <span className={`pi pi-user-edit`} 
                      style={{ fontSize: "1.5rem" }} />
                    }
                    className={`bg-transparent text-white border-none outline__color--buttons`} 
                    tooltip='Actualizar Informacion' 
                    tooltipOptions={{ position: "left" }}
                    onClick={() => setVisible(true)}
                  />
                </div>
              </div>
            }
          > 
            <EditInfoUser
                visible={visible}
               setVisible={setVisible}
            />
            <section className='flex flex-wrap justify-content-between aling-items-center mx-4 gap-5'>
                <div>
                    <div>
                        <h4 className='text-2xl mb-1'>Nombres</h4>
                        <p className='mt-0'>Facundo Tómas</p>
                    </div>
                    <div>
                        <h4 className='text-2xl mb-1'>Apellidos</h4>
                        <p className='mt-0'>Rullo Bogliani</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className='text-2xl mb-1'>Correo electronico</h4>
                        <p className='mt-0'>frullo@trigolimpio.com</p>
                    </div>
                    <div>
                        <h4 className='text-2xl mb-1'>Telefono</h4>
                        <p className='mt-0'>+54 123 4567890</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className='text-2xl mb-1'>Domicilio</h4>
                        <p className='mt-0'>Calle 34</p>
                    </div>
                    <div>
                        <h4 className='text-2xl mb-1'>Fecha de Nacimiento</h4>
                        <p className='mt-0'>08/06/2001</p>
                    </div>
                </div>
            </section>
        </Card>
    </div>
  )
}
