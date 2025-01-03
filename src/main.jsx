import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import About from './About'
import Contacts from './Contacts'
import Users from './Users'
import Footer from './Footer';

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Routes>
    <Route 
    path="/" 
    element={<App/>}>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contacts" element={<Contacts></Contacts>}></Route>
      <Route path="/users" element={<Users></Users>}></Route>
      
       </Route>
       <Route path='/footer' element={<Footer></Footer>}></Route>
    
  

    
  </Routes>
  </BrowserRouter>
)
