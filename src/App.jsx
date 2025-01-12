

import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"

function App() {


  return (
    <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/coffee" element={<CoffeePage />} />
    <Route path="/merch" element={<MerchPage />} /> */}
  </Routes>
  )
}

export default App
