 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import createBrowserRouter from"react-router-dom"
import routes from './routes/routes.jsx'
import routes from './routes/routes.jsx'

const router = createBrowserRouter([...router]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
