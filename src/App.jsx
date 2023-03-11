import React from 'react'
import { Route, Routes,Link } from 'react-router-dom'
// import Navbar from './component/Navbar'
import Meal from './component/Meal'
import Card from './component/Card'
import Detail from './component/Detail'
import Navbar from './component/Navbar'
import Search from './component/Search'


const App = () => {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Meal/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='search/:name' element={<Search/>}/>
    </Routes>
    </>
  )
}

export default App
