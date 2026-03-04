import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LinkClass } from './components/LinkClass'
import "./styles/style.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LinkClass />
  </StrictMode>,
)
