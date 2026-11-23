import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ecomStore from './routing/ecomRouting'
import './style.css'


createRoot(document.getElementById('root')).render(
  ecomStore
)
