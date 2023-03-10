import React from 'react'


import { Link, Route, Routes} from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { NavBar1 } from '../components/NavBar1';

export const MainApp = () => {
  return (
    <>
    <NavBar1 />
    <Routes>
      
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
    </Routes>

    </>
  )
}
