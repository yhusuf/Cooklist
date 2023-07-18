import React from 'react';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Pages/>
    </BrowserRouter>
  )
}

export default App;


