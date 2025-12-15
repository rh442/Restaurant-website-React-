import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Dashboard from './Dashboard.jsx'
import Home from './Home.jsx'
import Menu from './Menu.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Cart from './Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/*" element={<Dashboard/>}>
          <Route index element={<Home/>}/> 
          <Route path='menu' element={<Menu/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>
      </Routes>    
    </BrowserRouter>
  </StrictMode>
)