import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../pages/Home/Home.jsx"

export default function MasterRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}
