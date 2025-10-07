import React from 'react'
import NotificationsCSS from './VisualizeAllNotifications.module.css'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

function VisualizeAllNotifications() {
  return (
    <div className=''>
      <Button
          label="Marcar todo como leido"
          className={`border-none text-white mb-5 ${NotificationsCSS.colorBoton}`}
      />

      <div className='flex flex-column gap-4'>
        <Card title={
                <div className='flex align-items-center justify-content-between  '>
                  <div className='flex align-items-center gap-3'>
                    <i className="pi pi-bell text-2xl line-height-3"></i>
                    <p className='m-0'>Titulo de la notificación</p>
                  </div>
                  <div className='flex align-items-center gap-3'>
                    <p className='text-base'>07/10/2025 17:45</p>
                    <Button
                      icon={
                        <span className={`pi pi-envelope`} 
                        style={{ fontSize: "1.5rem" }} />
                      }
                      className={`bg-transparent text-white border-none  `} 
                      tooltip='Marcar como leido'
                      tooltipOptions={{ position: "left" }}
                    />
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
        <Card title={
                <div className='flex align-items-center justify-content-between  '>
                  <div className='flex align-items-center gap-3'>
                    <i className="pi pi-bell text-2xl line-height-3"></i>
                    <p className='m-0'>Titulo de la notificación</p>
                  </div>
                  <div className='flex align-items-center gap-3'>
                    <p className='text-base'>07/10/2025 17:45</p>
                    <Button
                      icon={
                        <span className={`pi pi-envelope`} 
                        style={{ fontSize: "1.5rem" }} />
                      }
                      className={`bg-transparent text-white border-none  `} 
                      tooltip='Marcar como leido'
                      tooltipOptions={{ position: "left" }}
                    />
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
        <Card title={
                <div className='flex align-items-center justify-content-between  '>
                  <div className='flex align-items-center gap-3'>
                    <i className="pi pi-bell text-2xl line-height-3"></i>
                    <p className='m-0'>Titulo de la notificación</p>
                  </div>
                  <div className='flex align-items-center gap-3'>
                    <p className='text-base'>07/10/2025 17:45</p>
                    <Button
                      icon={
                        <span className={`pi pi-envelope`} 
                        style={{ fontSize: "1.5rem" }} />
                      }
                      className={`bg-transparent text-white border-none  `} 
                      tooltip='Marcar como leido'
                      tooltipOptions={{ position: "left" }}
                    />
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

export default VisualizeAllNotifications
