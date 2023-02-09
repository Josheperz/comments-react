import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from "react-router-dom";
import { App } from './App';
import './scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
        <Routes>
            <Route path="/" element={<App/>}></Route>
        </Routes>
    </HashRouter>
  </React.StrictMode>
  
)
