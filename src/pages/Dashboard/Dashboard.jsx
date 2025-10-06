import React from 'react';
import DashboardCSS from './Dashboard.module.css'
import ChartVerticalBar from '../../components/Charts/ChartVerticalBar'
import ChartCircleDoughnut from '../../components/Charts/ChartCircleDoughnut'
import LineStyles from '../../components/Charts/LineStyles'
import CarouselResponsiveDashboard from '../../components/Carousels/CarouselResponsiveDashboard/CarouselResponsiveDashboard'
import NotificationDashboard from '../../components/NotificationDashboard/NotificationDashboard'
import { Card } from 'primereact/card';

export default function Dashboard() {
  return (
    <div className="grid">
      <div className="col-12 md:col-6">
        <Card title="Grafico de Barras" className={`w-full ${DashboardCSS.backgroundCard}`}>
          <ChartVerticalBar />
        </Card>
      </div>
      <div className="col-12 md:col-6">
        <Card title="Grafico Circular" className={`w-full ${DashboardCSS.backgroundCard}`}>
          <ChartCircleDoughnut />
        </Card>
      </div>

      <div className="col-12 md:col-6 mt-5">
        <Card title="Notificaciones" className={`w-full ${DashboardCSS.backgroundCard}`}>
          <NotificationDashboard />
        </Card>
      </div>
      <div className="col-12 md:col-6 mt-5">
        <Card title="Estadisticas" className={`w-full ${DashboardCSS.backgroundCard}`}>
          <LineStyles />
        </Card>
      </div>
      <div className='col-12 mt-5'>
          <CarouselResponsiveDashboard/>
      </div>
    </div>
  );
}


        