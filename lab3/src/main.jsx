import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Parent1 from './Parent1'
import Parent2 from './Parent2'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parent1 />
    <Parent2 />
  </StrictMode>,
)
