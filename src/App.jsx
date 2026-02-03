import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import AboutUs from './Components/AboutUs'
import Footer from './Components/Footer'
import ContactUs from './Components/ContactUs'
import {BrowserRouter,Route ,Routes} from 'react-router-dom'
import Products from './Components/Products'
import AllProducts from './Components/AllProducts'
import { MessageCircle, PhoneCallIcon } from 'lucide-react'

function App() {
  

  return (
    <>
    
     
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={ <Hero/>}/>
        <Route path='/home' element={ <Products/>}/>
        <Route path='/home' element={ <AllProducts/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/' element={<>
        <Hero/>
        <Products/>
        <AllProducts/>
        <AboutUs/>
        <ContactUs/>
        </>}/>
      </Routes>
    </BrowserRouter>
      <Footer/>
      
    </>
  )
}

export default App
