import React from 'react'
import { InfoCard } from '../components/Card';


import { GridCard } from '../components/GridCard';
import { NavBar1 } from '../components/NavBar1';



export const HomePage = () => {
    return (
        <>
            <NavBar1/>
            <div direction="horizontal" gap={3}>
                <h1>Rick & Morty APP</h1>
            </div>
         
            <GridCard/>
        </>
    )
};