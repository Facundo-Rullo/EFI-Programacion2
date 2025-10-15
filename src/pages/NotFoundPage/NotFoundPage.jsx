import React from 'react';
import Logo from '../../assets/light/LogoRightText.png'
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

export default function NotFoundPage() {
  return (
    <div className="flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden surface-ground p-3">
      <div className="flex flex-column align-items-center justify-content-center">
          <img 
            src={Logo}
            alt="Página no encontrada" 
            className="w-full w-8 mx-auto mb-5"
          />
          
          <div className="text-7xl font-bold text-primary mb-3 text-center">404</div>
          <h1 className="text-4xl font-bold text-900 text-center">Página No Encontrada</h1>
          <p className="text-lg text-600 mb-5 text-center">
            Lo sentimos, el recurso que buscas fue movido o no existe.
          </p>
          
          <Link to="/dashboard">
            <Button 
              label="Volver al Inicio" 
              icon="pi pi-home" 
              className="p-button-lg bg__buttons border-none text-white"
            />
          </Link>

      </div>
    </div>
  );
}