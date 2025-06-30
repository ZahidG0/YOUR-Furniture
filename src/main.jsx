import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/Home.jsx'
import Shop from './pages/shop/Shop.jsx'
import Contact from './pages/contact/Contact.jsx'
import About from './pages/about/About.jsx'

import 'sweetalert2/dist/sweetalert2.min.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />} >
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
