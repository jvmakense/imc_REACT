import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Formulario from './assets/components/Formulario/index.jsx'
import './global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formulario />
  </StrictMode>,
)
