import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Link, useLocation } from 'react-router-dom';

export default function BreadCrumbRoute() {
  const location = useLocation();

  // Partes de la URL
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Generar ítems dinámicos
  const items = pathSegments.map((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    return {
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      template: () => (
        <Link to={path} className="text-primary font-semibold">
          {segment.charAt(0).toUpperCase() + segment.slice(1)}
        </Link>
      )
    };
  });
  

  // Home personalizado
  const home = {
    icon: 'pi pi-home',
    template: () => (
      <Link to="/dashboard" className="text-primary font-semibold">
        <i className="pi pi-home" />
      </Link>
    )
  };

  return (
    <div>
      <BreadCrumb model={items} home={home} className="bg-transparent p-2 border-none" />
    </div>
  );
}
