import foto1 from '../assets/images/TractorJohnDeere6110J.jpg'
import foto2 from '../assets/images/CosechadoraCase8250.jpg'
import foto3 from '../assets/images/SembradoraAgrometalTXMega.jpg'
import fotoEmpleado1 from '../assets/images/Empleado1.png'
import fotoEmpleado2 from '../assets/images/Empleado2.png'
import fotoEmpleado3 from '../assets/images/Empleado3.png'

export const mockMaquinaria = [
    {
      id: 1,
      nombre: 'Tractor John Deere 6110J',
      tipo: 'Tractor',
      marca: 'John Deere',
      modelo: '6110J',
      numeroSerie: 'JD-987654',
      fechaAdquisicion: '2022-03-15',
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
      fechaAdquisicion: '2021-08-20',
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
      fechaAdquisicion: '2023-01-10',
      estado: 'Fuera de Servicio',
      fotoUrl: foto3
    }
  ];
  
  export const mockMantenimientos = [
    { id: 101, maquinariaId: 1, fecha: '2023-10-05', tipo: 'Preventivo', descripcion: 'Cambio de aceite y filtros de motor.', responsable: 'Juan Pérez', costo: 15000 },
    { id: 102, maquinariaId: 1, fecha: '2023-05-12', tipo: 'Preventivo', descripcion: 'Revisión sistema hidráulico.', responsable: 'Juan Pérez', costo: 8000 },
    { id: 201, maquinariaId: 2, fecha: '2023-10-15', tipo: 'Correctivo', descripcion: 'Reparación de correa principal de trilla.', responsable: 'Taller Externo', costo: 75000 },
    { id: 301, maquinariaId: 3, fecha: '2023-09-01', tipo: 'Correctivo', descripcion: 'Falla en dosificador de semillas. Requiere repuesto.', responsable: 'Carlos Gomez', costo: 25000 },
    { id: 103, maquinariaId: 1, fecha: '2024-02-20', tipo: 'Preventivo', descripcion: 'Rotación y calibración de neumáticos.', responsable: 'Juan Pérez', costo: 12000 },
    { id: 202, maquinariaId: 2, fecha: '2024-03-10', tipo: 'Preventivo', descripcion: 'Limpieza de filtros de aire y cabina.', responsable: 'Ana Torres', costo: 7000 },
    { id: 302, maquinariaId: 3, fecha: '2024-04-05', tipo: 'Preventivo', descripcion: 'Engrase general de puntos móviles.', responsable: 'Carlos Gomez', costo: 9500 },
    { id: 104, maquinariaId: 1, fecha: '2024-05-15', tipo: 'Correctivo', descripcion: 'Reemplazo de batería.', responsable: 'Taller Externo', costo: 35000 },
    { id: 203, maquinariaId: 2, fecha: '2024-06-22', tipo: 'Correctivo', descripcion: 'Reparación de luz de giro trasera derecha.', responsable: 'Ana Torres', costo: 5500 },
    { id: 105, maquinariaId: 1, fecha: '2024-07-01', tipo: 'Preventivo', descripcion: 'Revisión de niveles de fluidos y refrigerante.', responsable: 'Juan Pérez', costo: 4000 },
    { id: 303, maquinariaId: 3, fecha: '2024-08-18', tipo: 'Correctivo', descripcion: 'Cambio de cuchillas de siembra gastadas.', responsable: 'Carlos Gomez', costo: 45000 },
    { id: 204, maquinariaId: 2, fecha: '2024-09-02', tipo: 'Preventivo', descripcion: 'Ajuste de cadenas y correas.', responsable: 'Ana Torres', costo: 11000 },
    { id: 106, maquinariaId: 1, fecha: '2024-09-25', tipo: 'Correctivo', descripcion: 'Soldadura en soporte de enganche.', responsable: 'Taller Externo', costo: 22000 },
    { id: 304, maquinariaId: 3, fecha: '2024-10-01', tipo: 'Preventivo', descripcion: 'Inspección y limpieza de tolva.', responsable: 'Carlos Gomez', costo: 6000 },
    { id: 401, maquinariaId: 1, fecha: '2024-11-10', tipo: 'Preventivo', descripcion: 'Revisión pre-campaña sistema eléctrico.', responsable: 'Juan Pérez', costo: 18000 },
    { id: 402, maquinariaId: 2, fecha: '2024-11-15', tipo: 'Correctivo', descripcion: 'Reemplazo de sensor de rendimiento en monitor.', responsable: 'Taller Externo', costo: 95000 },
    { id: 403, maquinariaId: 3, fecha: '2024-12-01', tipo: 'Preventivo', descripcion: 'Calibración de dosificadores neumáticos.', responsable: 'Carlos Gomez', costo: 13000 },
    { id: 404, maquinariaId: 1, fecha: '2025-01-20', tipo: 'Correctivo', descripcion: 'Reparación de manguera de alta presión hidráulica.', responsable: 'Juan Pérez', costo: 28000 },
    { id: 405, maquinariaId: 2, fecha: '2025-02-05', tipo: 'Preventivo', descripcion: 'Afilado y balanceo de rotor.', responsable: 'Taller Externo', costo: 150000 },
    { id: 406, maquinariaId: 3, fecha: '2025-02-18', tipo: 'Correctivo', descripcion: 'Reemplazo de rueda limitadora de profundidad.', responsable: 'Carlos Gomez', costo: 19500 },
    { id: 407, maquinariaId: 1, fecha: '2025-03-10', tipo: 'Preventivo', descripcion: 'Cambio de aceite de transmisión.', responsable: 'Juan Pérez', costo: 25000 },
    { id: 408, maquinariaId: 2, fecha: '2025-03-25', tipo: 'Correctivo', descripcion: 'Falla en aire acondicionado de cabina.', responsable: 'Ana Torres', costo: 42000 },
    { id: 409, maquinariaId: 1, fecha: '2025-04-12', tipo: 'Preventivo', descripcion: 'Limpieza de radiador y sistema de refrigeración.', responsable: 'Juan Pérez', costo: 8500 },
    { id: 410, maquinariaId: 3, fecha: '2025-04-30', tipo: 'Preventivo', descripcion: 'Verificación de presión en pulmones de siembra.', responsable: 'Carlos Gomez', costo: 11000 },
    { id: 411, maquinariaId: 2, fecha: '2025-05-15', tipo: 'Preventivo', descripcion: 'Revisión y ajuste de plataforma de corte.', responsable: 'Ana Torres', costo: 22000 },
    { id: 412, maquinariaId: 1, fecha: '2025-05-28', tipo: 'Correctivo', descripcion: 'Reemplazo de faro de trabajo delantero.', responsable: 'Juan Pérez', costo: 9800 },
    { id: 413, maquinariaId: 3, fecha: '2025-06-10', tipo: 'Correctivo', descripcion: 'Reparación de sistema de marcadores.', responsable: 'Carlos Gomez', costo: 31000 },
    { id: 414, maquinariaId: 2, fecha: '2025-06-20', tipo: 'Preventivo', descripcion: 'Inspección de sinfines y norias.', responsable: 'Ana Torres', costo: 14000 },
    { id: 415, maquinariaId: 1, fecha: '2025-07-05', tipo: 'Preventivo', descripcion: 'Inspección de frenos y cambio de líquido.', responsable: 'Taller Externo', costo: 30000 },
    { id: 416, maquinariaId: 2, fecha: '2025-07-22', tipo: 'Correctivo', descripcion: 'Cambio de cristal de puerta de cabina.', responsable: 'Taller Externo', costo: 88000 },
    { id: 417, maquinariaId: 3, fecha: '2025-08-01', tipo: 'Preventivo', descripcion: 'Limpieza y lubricación de cadenas de mando.', responsable: 'Carlos Gomez', costo: 7500 },
    { id: 418, maquinariaId: 1, fecha: '2025-08-19', tipo: 'Preventivo', descripcion: 'Revisión de enganche de 3 puntos.', responsable: 'Juan Pérez', costo: 9000 },
    { id: 419, maquinariaId: 2, fecha: '2025-09-05', tipo: 'Correctivo', descripcion: 'Fuga en el sistema de enfriamiento del motor.', responsable: 'Ana Torres', costo: 53000 },
    { id: 420, maquinariaId: 3, fecha: '2025-09-30', tipo: 'Preventivo', descripcion: 'Actualización de software del monitor de siembra.', responsable: 'Servicio Técnico', costo: 20000 }
    
  ];

  export const mockEmpleados = [
    {
      id: 101,
      legajo: "2301",
      nombre: "Juan Carlos",
      apellido: "Perez",
      dni: "30.123.456",
      cuil: "20-30123456-5",
      fechaNacimiento: "1983-05-15",
      domicilio: "Av. San Martín 123, Arias",
      telefono: "+54 9 3468 12-3456",
      email: "jcperez@trigolimpio.com",
      puesto: "Operario de Cosechadora",
      area: "Campo",
      fechaIngreso: "2015-03-01",
      tipoContrato: "Permanente",
      estado: "Activo",
      fotoUrl: fotoEmpleado1,
      usuario: 'jperez'
    },
    {
      id: 102,
      legajo: "2302",
      nombre: "Ana María",
      apellido: "Gomez",
      dni: "35.789.012",
      cuil: "27-35789012-8",
      fechaNacimiento: "1990-11-22",
      domicilio: "Belgrano 450, Arias",
      telefono: "+54 9 3468 23-4567",
      email: "agomez@trigolimpio.com",
      puesto: "Administrativa Contable",
      area: "Administración",
      fechaIngreso: "2018-07-20",
      tipoContrato: "Permanente",
      estado: "Activo",
      fotoUrl: fotoEmpleado2,
      usuario: 'agomez'
    },
    {
      id: 103,
      legajo: "2303",
      nombre: "Ricardo Luis",
      apellido: "Juarez",
      dni: "28.456.789",
      cuil: "20-28456789-3",
      fechaNacimiento: "1980-01-30",
      domicilio: "Rivadavia 789, Arias",
      telefono: "+54 9 3468 34-5678",
      email: "rjuarez@trigolimpio.com",
      puesto: "Jefe de Taller",
      area: "Taller",
      fechaIngreso: "2012-01-10",
      tipoContrato: "Permanente",
      estado: "Inactivo",
      fotoUrl: fotoEmpleado3,
      usuario: 'rjuarez'
    }
  ];

  export const stockData = [
    {
      id: 101,
      sku: 'SEM-TRI-001',
      producto: 'Semilla de Trigo - Variedad Baguette',
      categoria: 'Semillas',
      ubicacion: 'Silo 2A',
      cantidadActual: 1200, // kg
      stockMinimo: 500, // kg
      estado: 'En Stock'
    },
    {
      id: 102,
      sku: 'FER-NIT-004',
      producto: 'Fertilizante Nitrogenado Avanzado',
      categoria: 'Fertilizantes',
      ubicacion: 'Depósito Central',
      cantidadActual: 450, // bolsas
      stockMinimo: 500, // bolsas
      estado: 'Bajo Stock'
    },
    {
      id: 103,
      sku: 'REP-FIL-AIR-015',
      producto: 'Filtro de Aire para Cosechadora',
      categoria: 'Repuestos Maquinaria',
      ubicacion: 'Taller',
      cantidadActual: 8,
      stockMinimo: 10,
      estado: 'Bajo Stock'
    },
    {
      id: 104,
      sku: 'AGQ-GLI-002',
      producto: 'Glifosato Concentrado',
      categoria: 'Agroquímicos',
      ubicacion: 'Depósito Químicos',
      cantidadActual: 75, // litros
      stockMinimo: 50, // litros
      estado: 'En Stock'
    },
    {
      id: 105,
      sku: 'REP-CUC-007',
      producto: 'Cuchilla de Corte para Plataforma',
      categoria: 'Repuestos Maquinaria',
      ubicacion: 'Taller',
      cantidadActual: 0,
      stockMinimo: 15,
      estado: 'Agotado'
    },
    {
      id: 106,
      sku: 'SEM-SOJ-003',
      producto: 'Semilla de Soja - Ciclo Corto',
      categoria: 'Semillas',
      ubicacion: 'Silo 3B',
      cantidadActual: 2500, // kg
      stockMinimo: 800, // kg
      estado: 'En Stock'
    },
    {
      id: 107,
      sku: 'ACE-MOT-1540',
      producto: 'Aceite de Motor 15W40',
      categoria: 'Lubricantes',
      ubicacion: 'Taller',
      cantidadActual: 22, // bidones
      stockMinimo: 20, // bidones
      estado: 'En Stock'
    },
    {
      id: 108,
      sku: 'REP-COR-001',
      producto: 'Correa de Transmisión para Tractor',
      categoria: 'Repuestos Maquinaria',
      ubicacion: 'Taller',
      cantidadActual: 3,
      stockMinimo: 5,
      estado: 'Bajo Stock'
    },
    {
      id: 109,
      sku: 'FER-FOS-001',
      producto: 'Fertilizante Fosfatado',
      categoria: 'Fertilizantes',
      ubicacion: 'Depósito Central',
      cantidadActual: 0,
      stockMinimo: 200, // bolsas
      estado: 'Agotado'
    },
    {
      id: 110,
      sku: 'SEM-MAI-005',
      producto: 'Semilla de Maíz - Híbrido DK72',
      categoria: 'Semillas',
      ubicacion: 'Silo 1A',
      cantidadActual: 980, // kg
      stockMinimo: 1000, // kg
      estado: 'Bajo Stock'
    }
  ];

  // Archivo: /data/movementsData.js

export const movementsData = [
  // --- Historial para "Semilla de Trigo" (ID: 101) ---
  // Cantidad Actual: 1200
  {
    movementId: 2001,
    productId: 101,
    date: '2025-09-05',
    type: 'Ingreso por Compra',
    quantity: 1500,
    user: 'jPerez',
    notes: 'Remito N° 4532 - Proveedor Agrosur'
  },
  {
    movementId: 2002,
    productId: 101,
    date: '2025-10-10',
    type: 'Salida a Producción',
    quantity: -300,
    user: 'fGonzalez',
    notes: 'Siembra en lote 7B'
  },

  // --- Historial para "Fertilizante Nitrogenado" (ID: 102) ---
  // Cantidad Actual: 450
  {
    movementId: 2003,
    productId: 102,
    date: '2025-08-15',
    type: 'Ingreso por Compra',
    quantity: 1000,
    user: 'jPerez',
    notes: 'Factura N° A-001-1234'
  },
  {
    movementId: 2004,
    productId: 102,
    date: '2025-09-20',
    type: 'Salida a Producción',
    quantity: -550,
    user: 'fGonzalez',
    notes: 'Aplicación en lote 3A y 4C'
  },

  // --- Historial para "Filtro de Aire" (ID: 103) ---
  // Cantidad Actual: 8
  {
    movementId: 2005,
    productId: 103,
    date: '2025-07-01',
    type: 'Ingreso por Compra',
    quantity: 10,
    user: 'mGarcia',
    notes: 'Compra para stock de taller'
  },
  {
    movementId: 2006,
    productId: 103,
    date: '2025-09-25',
    type: 'Salida a Producción',
    quantity: -1,
    user: 'mGarcia',
    notes: 'Mantenimiento Cosechadora Case'
  },
  {
    movementId: 2007,
    productId: 103,
    date: '2025-10-15',
    type: 'Salida a Producción',
    quantity: -1,
    user: 'mGarcia',
    notes: 'Mantenimiento Tractor John Deere'
  },
  
  // --- Historial para "Cuchilla de Corte" (ID: 105) ---
  // Cantidad Actual: 0
  {
    movementId: 2008,
    productId: 105,
    date: '2025-06-10',
    type: 'Ingreso por Compra',
    quantity: 20,
    user: 'jPerez',
    notes: 'Stock inicial de repuestos'
  },
  {
    movementId: 2009,
    productId: 105,
    date: '2025-08-22',
    type: 'Pérdida / Merma',
    quantity: -2,
    user: 'sistema',
    notes: 'Daño en depósito, no utilizables'
  },
  {
    movementId: 2010,
    productId: 105,
    date: '2025-10-01',
    type: 'Salida a Producción',
    quantity: -18,
    user: 'mGarcia',
    notes: 'Reemplazo completo en plataforma de corte'
  }
];

// /data/lotesData.js

export const lotesData = [
  {
    id: 'L001',
    nombre: 'Lote 5A - Norte',
    establecimiento: 'La Aurora',
    hectareas: 120, // Ha
    cultivoActual: 'Soja de Primera',
    estado: 'Crecimiento / Vegetativo',
    fechaTrabajo: '2025-10-05',
    ultimoRendimiento: 42 // qq/Ha (de la campaña anterior)
  },
  {
    id: 'L002',
    nombre: 'Bajo Dulce',
    establecimiento: 'La Aurora',
    hectareas: 85, // Ha
    cultivoActual: 'Maíz Tardío',
    estado: 'Siembra',
    fechaTrabajo: '2025-12-15', // Fecha planificada o de inicio
    ultimoRendimiento: 95 // qq/Ha
  },
  {
    id: 'L003',
    nombre: 'La Cuchilla',
    establecimiento: 'Don Manuel',
    hectareas: 210, // Ha
    cultivoActual: 'Trigo',
    estado: 'Cosecha',
    fechaTrabajo: '2025-06-20',
    ultimoRendimiento: 55 // qq/Ha
  },
  {
    id: 'L004',
    nombre: 'El Chañar 3',
    establecimiento: 'Don Manuel',
    hectareas: 95, // Ha
    cultivoActual: 'Girasol',
    estado: 'Crecimiento / Vegetativo',
    fechaTrabajo: '2025-09-30',
    ultimoRendimiento: 28 // qq/Ha
  },
  {
    id: 'L005',
    nombre: 'Lote 7B - Sur',
    establecimiento: 'La Aurora',
    hectareas: 150, // Ha
    cultivoActual: 'Libre',
    estado: 'Libre',
    fechaTrabajo: null,
    ultimoRendimiento: 45 // qq/Ha (de la campaña anterior)
  }
];

// /data/historialLotesData.js

export const historialLotesData = [
  // --- HISTORIAL PARA LOTE L001 (Soja de Primera) ---
  {
    actividadId: 3001,
    loteId: 'L001',
    fecha: '2025-09-15',
    tipoActividad: 'Fertilización',
    descripcion: 'Aplicación de fertilizante base antes de la siembra.',
    insumosUtilizados: [
      { producto: 'Fertilizante Fosfatado', cantidad: '12000 kg' } // 100 kg/Ha
    ],
    costoTotal: 9600, // USD
    responsable: 'fGonzalez'
  },
  {
    actividadId: 3002,
    loteId: 'L001',
    fecha: '2025-10-05',
    tipoActividad: 'Siembra',
    descripcion: 'Siembra de Soja de Primera con sembradora John Deere.',
    insumosUtilizados: [
      { producto: 'Semilla de Soja - Ciclo Corto', cantidad: '8400 kg' } // 70 kg/Ha
    ],
    costoTotal: 7560, // USD
    responsable: 'fGonzalez'
  },
  {
    actividadId: 3003,
    loteId: 'L001',
    fecha: '2025-11-20',
    tipoActividad: 'Monitoreo de Plagas',
    descripcion: 'Recorrida general, se detectó baja incidencia de oruga medidora.',
    insumosUtilizados: [],
    costoTotal: 200, // USD (costo de la recorrida)
    responsable: 'aGarcia'
  },

  // --- HISTORIAL PARA LOTE L003 (Trigo) ---
  {
    actividadId: 3004,
    loteId: 'L003',
    fecha: '2025-06-20',
    tipoActividad: 'Siembra',
    descripcion: 'Siembra de Trigo variedad Baguette.',
    insumosUtilizados: [
      { producto: 'Semilla de Trigo - Variedad Baguette', cantidad: '25200 kg' } // 120 kg/Ha
    ],
    costoTotal: 11340, // USD
    responsable: 'jPerez'
  },
  {
    actividadId: 3005,
    loteId: 'L003',
    fecha: '2025-09-10',
    tipoActividad: 'Fertilización',
    descripcion: 'Aplicación de Nitrógeno en macollaje.',
    insumosUtilizados: [
      { producto: 'Fertilizante Nitrogenado Avanzado', cantidad: '21000 kg' } // 100 kg/Ha
    ],
    costoTotal: 18900, // USD
    responsable: 'jPerez'
  },
  {
    actividadId: 3006,
    loteId: 'L003',
    fecha: '2025-12-05',
    tipoActividad: 'Cosecha',
    descripcion: 'Inicio de cosecha con dos cosechadoras. Rendimiento promedio 58 qq/Ha.',
    insumosUtilizados: [],
    costoTotal: 25200, // USD (costo de contratista)
    responsable: 'jPerez'
  },

  // --- HISTORIAL PARA LOTE L005 (Libre) ---
  {
    actividadId: 3007,
    loteId: 'L005',
    fecha: '2025-08-01',
    tipoActividad: 'Análisis de Suelo',
    descripcion: 'Muestreo de suelo para planificación de campaña siguiente.',
    insumosUtilizados: [],
    costoTotal: 500, // USD
    responsable: 'aGarcia'
  },
  {
    actividadId: 3008,
    loteId: 'L005',
    fecha: '2025-09-05',
    tipoActividad: 'Aplicación de Herbicida',
    descripcion: 'Control de malezas en barbecho químico.',
    insumosUtilizados: [
      { producto: 'Glifosato Concentrado', cantidad: '450 litros' } // 3 L/Ha
    ],
    costoTotal: 3150, // USD
    responsable: 'fGonzalez'
  }
];
  