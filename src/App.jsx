import React from 'react'
import Navbar from './compenets/Navbar'
import All from './compenets/All'
import FullStack from './compenets/FullStack'
import Data from './compenets/Data'
import Carrer from './compenets/Carrer'
import Cyber from './compenets/Cyber'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'


function App() {
  let user =[{
    title :"How to Get Rewarding UI/UX Jobs? [2024]",
    text :" In the ever-evolving landscape of technology, the demand for skilled professionals in UI/UX design is",
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-UI-UX-vs-Product-Design-Insightful-Comparisons.webp',

  },
  {
    title:"How to Get Rewarding UI/UX Jobs? [2024]",
    text:" In the ever-evolving landscape of technology, the demand for skilled professionals in UI/UX design is",
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-UI-UX-vs-Product-Design-Insightful-Comparisons.webp',

  }
]

return<>

  <BrowserRouter>

  <Navbar/>
  <Routes>
    <Route path='/all' element={<All  />}/>
    <Route path='/fullstack' element={<FullStack/>}/>
    <Route path='/data' element={<Data/>}/>
    <Route path='/carrer' element={<Carrer/>}/>
    <Route path='/cyber' element={<Cyber/>}/>
    <Route path='*'  element={<Navigate to='/all'/>}/>
  
  
  </Routes>
  
  </BrowserRouter>
    
  
  </>




}

export default App
