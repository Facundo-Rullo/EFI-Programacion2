import React from 'react'
import NotificationsCSS from './VisualizeAllNotifications.module.css'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

function VisualizeAllNotifications() {
  const allNotifications = [
    {
      id: 1,
      iconNoti: 'pi-bell',
      title: 'Titulo de la notificación',
      date: '07/10/2025 17:45',
      iconRead: 'pi-envelope',
      iconNoRead: 'pi-envelope', //cambiar esto despue susar operador ternario
      tooltipLeido: 'Marcar como leido',
      tooltipNoLeido: 'Marcar como no leido', //cambiar esto despue susar operador ternario
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'
    },
    {
      id: 2,
      iconNoti: 'pi-bell',
      title: 'Titulo de la notificación',
      date: '07/10/2025 17:45',
      iconRead: 'pi-envelope',
      iconNoRead: 'pi-envelope', //cambiar esto despue susar operador ternario
      tooltipLeido: 'Marcar como leido',
      tooltipNoLeido: 'Marcar como no leido', //cambiar esto despue susar operador ternario
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'
    },
    {
      id: 3,
      iconNoti: 'pi-bell',
      title: 'Titulo de la notificación',
      date: '07/10/2025 17:45',
      iconRead: 'pi-envelope',
      iconNoRead: 'pi-envelope', //cambiar esto despue susar operador ternario
      tooltipLeido: 'Marcar como leido',
      tooltipNoLeido: 'Marcar como no leido', //cambiar esto despue susar operador ternario
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'
    }
  ]

  return (
    <div className=''>
      <Button
          label="Marcar todo como leido"
          className={`border-none text-white mb-5 ${NotificationsCSS.colorBoton}`}
      />

      <div className='flex flex-column gap-4'>
        {allNotifications.map((n) => (
          <Card 
            key={n.id}
            className={`${NotificationsCSS.backgroundNoti}`}
            title={
              <div className='flex flex-wrap align-items-center justify-content-between  '>
                <div className='flex flex-wrap align-items-center gap-3'>
                  <i className={`pi ${n.iconNoti} text-2xl line-height-3`}></i>
                  <p className='m-0'>{n.title}</p>
                </div>
                <div className='flex align-items-center gap-3'>
                  <p className='text-base'>{n.date}</p>
                  <Button
                    icon={
                      <span className={`pi ${n.iconRead}`} //cambiar esto despue susar operador ternario
                      style={{ fontSize: "1.5rem" }} />
                    }
                    className={`bg-transparent text-white border-none  `} 
                    tooltip={n.tooltipLeido} //cambiar esto despue susar operador ternario
                    tooltipOptions={{ position: "left" }}
                  />
                </div>
              </div>
            }
          >
              <div>
                <span></span>
                <p className="m-0">
                  {n.description}
                </p>
              </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default VisualizeAllNotifications
