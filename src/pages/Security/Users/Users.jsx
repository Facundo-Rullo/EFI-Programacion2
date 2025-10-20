import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import AddData from '../../../components/AddData/AddData'
import Grilla from '../../../components/Grilla/Grilla'
import AssingANewPassowrd from '../../../components/AssignANewPassword/AssignANewPassword'
import PermitsModal from '../../../components/PermitsModal/PermitsModal'
import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag';
import { Card } from 'primereact/card'
import { Image } from 'primereact/image';

import { mockEmpleados } from '../../../Data/mockData'

export default function Users() {

  const navigate = useNavigate()
  const irAAssignPermitsUser = () => {
    navigate('/assignPermitsUser')
  }

  const [lotes, setLotes] = useState([]);
  useEffect(() => {
      // Simulamos la carga de datos desde una api pero los cargamos desde el js
      setLotes(mockEmpleados); 
  }, []);

  const [visible, setVisible] = useState(false);
  const addUserDialog = () => {
    setVisible(true);
  };

  const [assingPass, setAssingPass] = useState(false);
  const AssignANewPass = () => {
    setAssingPass(true);
  };

  const configInputs = [
    { id: 'nombre', name: 'Nombre', label: 'Nombre', type: 'text'},
    { id: 'apellido', name: 'Apellido', label: 'Apellido', type: 'text'},
    { id: 'usuario', name: 'Usuario', label: 'Usuario', type: 'text'},
    { id: 'dni', name: 'DNI', label: 'DNI', type: 'number'},
    { id: 'cuil', name: 'CUIL', label: 'CUIL', type: 'number'},
    { id: 'fechaNacimiento', name: 'Fecha Nacimiento', label: 'Fecha Nacimiento', type: 'date'},
    { id: 'domicilio', name: 'Domicilio', label: 'Domicilio', type: 'text'},
    { id: 'telefono', name: 'Telefono', label: 'Telefono', type: 'number'},
    { id: 'email', name: 'Email', label: 'Email', type: 'text'},
    { id: 'fechaIngreso', name: 'Fecha Ingreso', label: 'Fecha Ingreso', type: 'date'},
    { id: 'fotoUrl', name: 'fotoUrl', label: 'Foto Empleado', type: 'file'},
  ];

  // Template para la columna de estado
  const estadoBodyTemplate = (rowData) => {
    return <Tag value={rowData.estado} severity={getSeverity(rowData.estado)} />;
  };

  // Función para obtener el color del Tag según el estado
  const getSeverity = (estado) => {
      switch (estado) {
          case 'Activo':
              return 'success';
          case 'Inactivo':
              return 'danger';
          default:
              return null;
      }
  };

  // Template para la columna de acciones
  const accionesBodyTemplate = (rowData) => {
      return (
          <div className="flex gap-2">
              <Button icon="pi pi-pencil" className="p-button-warning" tooltip="Editar" />
              <Button icon="pi pi-ban" className="p-button-danger" tooltip="Desactivar" />
              <Button icon="pi pi-cog" className="" tooltip="Roles" />
              <Button icon="pi pi-lock" className="p-button-info" tooltip="Permisos" onClick={() => irAAssignPermitsUser()}/>
              <Button icon="pi pi-key" className="p-button-success" tooltip="Asignar contraseña nueva" onClick={() => AssignANewPass(rowData)}/>
          </div>
      );
  };

  const imageBodyTemplate = (rowData) => {
    return <Image src={rowData.fotoUrl} zoomSrc={rowData.fotoUrl} alt={rowData.nombre} width="80" height="60" preview />
  };

  const configColumnsGrilla = [
      { key: 'acciones', field: 'acciones',  header: 'Acciones', body: accionesBodyTemplate, exportable: false },
      { key: 'id', field: 'id',  header: 'ID'},
      { key: 'foto', field: 'foto',  header: 'Foto', body: imageBodyTemplate, exportable: false },
      { key: 'usuario', field: 'usuario',  header: 'Usuario'},
      { key: 'nombre', field: 'nombre',  header: 'Nombre'},
      { key: 'apellido', field: 'apellido',  header: 'Apellido', },
      { key: 'dni', field: 'dni',  header: 'DNI', },
      { key: 'cuil', field: 'cuil',  header: 'Cuit',},
      { key: 'fechaNacimiento', field: 'fechaNacimiento',  header: 'Fecha Nacimiento'},
      { key: 'domicilio', field: 'domicilio',  header: 'Domicilio'},
      { key: 'telefono', field: 'telefono',  header: 'Telefono'},
      { key: 'email', field: 'email',  header: 'Email'},
      { key: 'fechaIngreso', field: 'fechaIngreso',  header: 'Fecha Ingreso'},
      { key: 'estado', field: 'estado',  header: 'Estado', body: estadoBodyTemplate, exportable: false},
  ]

  return (
    <div>
      <Card className="bg__card">
          <AddData 
              visible={visible} 
              setVisible={setVisible}
              configInputs={configInputs}
              title={'Agregar Nuevo Usuario'}
          />
          <Grilla
              addDialog={addUserDialog}
              configColumnsGrilla={configColumnsGrilla}
              btnTitle={'Nuevo Usuario'}
              data={lotes}
          />
      </Card> 
      <AssingANewPassowrd
        visible={assingPass}
        onHide={() => setAssingPass(false)}
      />
    </div>
  )

}
