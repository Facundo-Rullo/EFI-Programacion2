import foto1 from '../assets/images/TractorJohnDeere6110J.jpg'
import foto2 from '../assets/images/CosechadoraCase8250.jpg'
import foto3 from '../assets/images/SembradoraAgrometalTXMega.jpg'

export const mockMaquinaria = [
    {
      id: 1,
      nombre: 'Tractor John Deere 6110J',
      tipo: 'Tractor',
      marca: 'John Deere',
      modelo: '6110J',
      numeroSerie: 'JD-987654',
      fechaAdquisicion: '2022-03-15T00:00:00Z',
      estado: 'Operativa',
      fotoUrl: foto1
    },
    {
      id: 2,
      nombre: 'Cosechadora Case IH 8250',
      tipo: 'Cosechadora',
      marca: 'Case IH',
      modelo: '8250',
      numeroSerie: 'CASE-123456',
      fechaAdquisicion: '2021-08-20T00:00:00Z',
      estado: 'En Mantenimiento',
      fotoUrl: foto2
    },
    {
      id: 3,
      nombre: 'Sembradora Agrometal TX Mega',
      tipo: 'Sembradora',
      marca: 'Agrometal',
      modelo: 'TX Mega',
      numeroSerie: 'AGRO-789012',
      fechaAdquisicion: '2023-01-10T00:00:00Z',
      estado: 'Fuera de Servicio',
      fotoUrl: foto3
    }
  ];
  
  export const mockMantenimientos = [
    { id: 101, maquinariaId: 1, fecha: '2023-10-05T00:00:00Z', tipo: 'Preventivo', descripcion: 'Cambio de aceite y filtros de motor.', responsable: 'Juan Pérez', costo: 15000 },
    { id: 102, maquinariaId: 1, fecha: '2023-05-12T00:00:00Z', tipo: 'Preventivo', descripcion: 'Revisión sistema hidráulico.', responsable: 'Juan Pérez', costo: 8000 },
    { id: 201, maquinariaId: 2, fecha: '2023-10-15T00:00:00Z', tipo: 'Correctivo', descripcion: 'Reparación de correa principal de trilla.', responsable: 'Taller Externo', costo: 75000 },
    { id: 301, maquinariaId: 3, fecha: '2023-09-01T00:00:00Z', tipo: 'Correctivo', descripcion: 'Falla en dosificador de semillas. Requiere repuesto.', responsable: 'Carlos Gomez', costo: 25000 },
    { id: 103, maquinariaId: 1, fecha: '2024-02-20T00:00:00Z', tipo: 'Preventivo', descripcion: 'Rotación y calibración de neumáticos.', responsable: 'Juan Pérez', costo: 12000 },
    { id: 202, maquinariaId: 2, fecha: '2024-03-10T00:00:00Z', tipo: 'Preventivo', descripcion: 'Limpieza de filtros de aire y cabina.', responsable: 'Ana Torres', costo: 7000 },
    { id: 302, maquinariaId: 3, fecha: '2024-04-05T00:00:00Z', tipo: 'Preventivo', descripcion: 'Engrase general de puntos móviles.', responsable: 'Carlos Gomez', costo: 9500 },
    { id: 104, maquinariaId: 1, fecha: '2024-05-15T00:00:00Z', tipo: 'Correctivo', descripcion: 'Reemplazo de batería.', responsable: 'Taller Externo', costo: 35000 },
    { id: 203, maquinariaId: 2, fecha: '2024-06-22T00:00:00Z', tipo: 'Correctivo', descripcion: 'Reparación de luz de giro trasera derecha.', responsable: 'Ana Torres', costo: 5500 },
    { id: 105, maquinariaId: 1, fecha: '2024-07-01T00:00:00Z', tipo: 'Preventivo', descripcion: 'Revisión de niveles de fluidos y refrigerante.', responsable: 'Juan Pérez', costo: 4000 },
    { id: 303, maquinariaId: 3, fecha: '2024-08-18T00:00:00Z', tipo: 'Correctivo', descripcion: 'Cambio de cuchillas de siembra gastadas.', responsable: 'Carlos Gomez', costo: 45000 },
    { id: 204, maquinariaId: 2, fecha: '2024-09-02T00:00:00Z', tipo: 'Preventivo', descripcion: 'Ajuste de cadenas y correas.', responsable: 'Ana Torres', costo: 11000 },
    { id: 106, maquinariaId: 1, fecha: '2024-09-25T00:00:00Z', tipo: 'Correctivo', descripcion: 'Soldadura en soporte de enganche.', responsable: 'Taller Externo', costo: 22000 },
    { id: 304, maquinariaId: 3, fecha: '2024-10-01T00:00:00Z', tipo: 'Preventivo', descripcion: 'Inspección y limpieza de tolva.', responsable: 'Carlos Gomez', costo: 6000 },
    { id: 401, maquinariaId: 1, fecha: '2024-11-10T00:00:00Z', tipo: 'Preventivo', descripcion: 'Revisión pre-campaña sistema eléctrico.', responsable: 'Juan Pérez', costo: 18000 },
    { id: 402, maquinariaId: 2, fecha: '2024-11-15T00:00:00Z', tipo: 'Correctivo', descripcion: 'Reemplazo de sensor de rendimiento en monitor.', responsable: 'Taller Externo', costo: 95000 },
    { id: 403, maquinariaId: 3, fecha: '2024-12-01T00:00:00Z', tipo: 'Preventivo', descripcion: 'Calibración de dosificadores neumáticos.', responsable: 'Carlos Gomez', costo: 13000 },
    { id: 404, maquinariaId: 1, fecha: '2025-01-20T00:00:00Z', tipo: 'Correctivo', descripcion: 'Reparación de manguera de alta presión hidráulica.', responsable: 'Juan Pérez', costo: 28000 },
    { id: 405, maquinariaId: 2, fecha: '2025-02-05T00:00:00Z', tipo: 'Preventivo', descripcion: 'Afilado y balanceo de rotor.', responsable: 'Taller Externo', costo: 150000 },
    { id: 406, maquinariaId: 3, fecha: '2025-02-18T00:00:00Z', tipo: 'Correctivo', descripcion: 'Reemplazo de rueda limitadora de profundidad.', responsable: 'Carlos Gomez', costo: 19500 },
    { id: 407, maquinariaId: 1, fecha: '2025-03-10T00:00:00Z', tipo: 'Preventivo', descripcion: 'Cambio de aceite de transmisión.', responsable: 'Juan Pérez', costo: 25000 },
    { id: 408, maquinariaId: 2, fecha: '2025-03-25T00:00:00Z', tipo: 'Correctivo', descripcion: 'Falla en aire acondicionado de cabina.', responsable: 'Ana Torres', costo: 42000 },
    { id: 409, maquinariaId: 1, fecha: '2025-04-12T00:00:00Z', tipo: 'Preventivo', descripcion: 'Limpieza de radiador y sistema de refrigeración.', responsable: 'Juan Pérez', costo: 8500 },
    { id: 410, maquinariaId: 3, fecha: '2025-04-30T00:00:00Z', tipo: 'Preventivo', descripcion: 'Verificación de presión en pulmones de siembra.', responsable: 'Carlos Gomez', costo: 11000 },
    { id: 411, maquinariaId: 2, fecha: '2025-05-15T00:00:00Z', tipo: 'Preventivo', descripcion: 'Revisión y ajuste de plataforma de corte.', responsable: 'Ana Torres', costo: 22000 },
    { id: 412, maquinariaId: 1, fecha: '2025-05-28T00:00:00Z', tipo: 'Correctivo', descripcion: 'Reemplazo de faro de trabajo delantero.', responsable: 'Juan Pérez', costo: 9800 },
    { id: 413, maquinariaId: 3, fecha: '2025-06-10T00:00:00Z', tipo: 'Correctivo', descripcion: 'Reparación de sistema de marcadores.', responsable: 'Carlos Gomez', costo: 31000 },
    { id: 414, maquinariaId: 2, fecha: '2025-06-20T00:00:00Z', tipo: 'Preventivo', descripcion: 'Inspección de sinfines y norias.', responsable: 'Ana Torres', costo: 14000 },
    { id: 415, maquinariaId: 1, fecha: '2025-07-05T00:00:00Z', tipo: 'Preventivo', descripcion: 'Inspección de frenos y cambio de líquido.', responsable: 'Taller Externo', costo: 30000 },
    { id: 416, maquinariaId: 2, fecha: '2025-07-22T00:00:00Z', tipo: 'Correctivo', descripcion: 'Cambio de cristal de puerta de cabina.', responsable: 'Taller Externo', costo: 88000 },
    { id: 417, maquinariaId: 3, fecha: '2025-08-01T00:00:00Z', tipo: 'Preventivo', descripcion: 'Limpieza y lubricación de cadenas de mando.', responsable: 'Carlos Gomez', costo: 7500 },
    { id: 418, maquinariaId: 1, fecha: '2025-08-19T00:00:00Z', tipo: 'Preventivo', descripcion: 'Revisión de enganche de 3 puntos.', responsable: 'Juan Pérez', costo: 9000 },
    { id: 419, maquinariaId: 2, fecha: '2025-09-05T00:00:00Z', tipo: 'Correctivo', descripcion: 'Fuga en el sistema de enfriamiento del motor.', responsable: 'Ana Torres', costo: 53000 },
    { id: 420, maquinariaId: 3, fecha: '2025-09-30T00:00:00Z', tipo: 'Preventivo', descripcion: 'Actualización de software del monitor de siembra.', responsable: 'Servicio Técnico', costo: 20000 }
    
  ];