import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './routes/Home'
import Contact from './routes/Contact'
import ServicePage from './routes/ServicePage'
import AboutPage from './routes/AboutPage';


const App = () => {
  return (
    <div>
        <Routes>
          <Route path ="/" element = { <Home/>} />
          <Route path ="/about" element = { <AboutPage />} />
          <Route path ="/service" element = { <ServicePage/>} />
          <Route path ="/contact" element = { <Contact/>} />
        </Routes>

        
       
    </div>
  )
}

export default App
