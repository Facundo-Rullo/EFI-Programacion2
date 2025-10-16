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
    { id: 301, maquinariaId: 3, fecha: '2023-09-01T00:00:00Z', tipo: 'Correctivo', descripcion: 'Falla en dosificador de semillas. Requiere repuesto.', responsable: 'Carlos Gomez', costo: 25000 }
  ];