

import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import AboutUs from './Pages/AboutUs/AboutUs'



function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/aboutus' element={<AboutUs />} />
    
    </Routes>
  )
}

export default App
