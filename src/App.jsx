import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Tema
import 'primereact/resources/primereact.min.css';                  // Componentes
import 'primeicons/primeicons.css';                                // Iconos
import 'primeflex/primeflex.css';                                   // Flex y utilidades (opcional)
import { Button } from 'primereact/button';



function App() {
  return (
    <div className="App">
      <h1>Hola PrimeReact!</h1>
      <Button label="Click me" icon="pi pi-check" />
    </div>
  )
}

export default App;

