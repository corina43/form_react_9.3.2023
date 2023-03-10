import React from 'react'
import ReactDOM from 'react-dom/client'
import {MainApp} from './main-app/layout/MainApp'
import { BrowserRouter} from 'react-router-dom';
// import { HomePage } from './main-app/layout/HomePage';
// import { Card } from "./main-app/components/Card1";
// import { GridCard } from './main-app/components/GridCard';
// import { Input } from "./main-app/components/Input";
// import { Navbar } from "./main-app/components/NavBar1";
// import { data } from "./main-app/data/dataBase";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
   
    <MainApp />
    </BrowserRouter>
    
  </React.StrictMode>,
)
