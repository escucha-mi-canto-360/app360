import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RecorridosProvider } from './context'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecorridosProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </RecorridosProvider>
  </React.StrictMode>,
)
