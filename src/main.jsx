import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Tema light
import 'primereact/resources/themes/lara-dark-indigo/theme.css';   // Tema dark
import 'primereact/resources/primereact.min.css';                  // Componentes
import 'primeicons/primeicons.css';                                // Iconos
import 'primeflex/primeflex.css';                                  // Flex y utilidades (opcional)
import AppRouter from './routes/AppRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
)
