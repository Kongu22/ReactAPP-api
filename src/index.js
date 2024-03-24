import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import Home from "./comps/Home";
import About from "./comps/About";
import PhotoGallery from "./comps/Photo-gallery";
import NotFoundPage from './comps/NotFoundPage'; 
import Missions from './comps/Missions';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/" element={<App />} >
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        </Route>
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
