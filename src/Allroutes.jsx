import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={Home}/>
        <Route path='/Auth' element={<Auth />}/>
    </Routes>
  )
}

export default Allroutes
