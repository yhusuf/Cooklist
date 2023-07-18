import React from 'react';
import Home from './Homee';
import Cusine from './Cusine';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navlink from './Navlink';
import Random from './Rando';
import Veggie from './Veggi';
import Dessert from './Dessert';
import Searched from './Searched';
import Recipie from './Recipie';
import { AnimatePresence } from 'framer-motion';

function Pages() {
  const Location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={Location} key={Location.pathname}>
        <Route path="/" element={ <Home/>}/>
        <Route path="/cuisine/:type" element= { <Cusine/>} />
        <Route path='/navlink/:type' element = {<Navlink/>} />
        <Route path='/random/'  element={<Random/>}/>
        <Route path='/veggie/:type' element = {<Veggie/>}/>
        <Route path='/dessert/:type' element ={<Dessert/>}/>
        <Route path='/searched/:search' element = {<Searched/>}/>
        <Route path= '/recipe/:id' element = {<Recipie/>}/>
      </Routes>
      </AnimatePresence>
   
  )
}

export default Pages