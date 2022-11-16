import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Accueil from './pages/Accueil';
import About from './pages/About';
import  "./styles/settings.css"
import Error from "./pages/Error"
import Annonce from './pages/Annonce';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Accueil/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/annonces/:annonceId' element={<Annonce/>} />
      <Route path='/404' element={<Error/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
