import React from 'react'
import NotificationsCSS from './VisualizeNotification.module.css'
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

function VisualizeNotification() {
  const navigate = useNavigate()

  const irADashboard = () => {
    navigate('/dashboard')
  }
  return (
    <div className=''>
      <Button
          label="Volver"
          className={`border-none text-white mb-5 ${NotificationsCSS.colorBoton}`}
          onClick={() => irADashboard()}
      />

      <div className='flex flex-column gap-4'>
        <Card title={
                <div className='flex flex-wrap align-items-center justify-content-between  '>
                  <div className='flex flex-wrap align-items-center gap-3'>
                    <i className="pi pi-bell text-2xl line-height-3"></i>
                    <p className='m-0'>Titulo de la notificación</p>
                  </div>
                  <div className='flex align-items-center gap-3'>
                    <p className='text-base mr-2'>07/10/2025 17:45</p>
                  </div>
                </div>
              }
        >
            <div>
              <span></span>
              <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                  numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
              </p>
            </div>
        </Card>
        
      </div>
    </div>
  )
}

export default VisualizeNotification
