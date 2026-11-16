import React from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource-variable/inter-tight'
import '@fontsource-variable/jetbrains-mono'
import App from './App.jsx'
import 'lenis/dist/lenis.css'
import './styles.css'
createRoot(document.getElementById('root')).render(<App />)
