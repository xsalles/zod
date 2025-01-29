import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Reset } from './styles/reset.ts'
import { GlobalStyle } from './styles/global.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle/>
    <Reset/>
    <App />
  </StrictMode>,
)
