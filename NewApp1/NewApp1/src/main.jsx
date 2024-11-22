import { StrictMode } from 'react'
import { createRoot, ReactDom } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import routes from './assets/routes/routes.jsx'
import store from './assets/store/store.jsx'
//import { Provider } from 'react-redux';
//import rootReducer from "./reducer"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <provider store={store}> */}
    <App />
    {/* </provider> */}
  </StrictMode>,
)
