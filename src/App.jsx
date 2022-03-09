import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register1 from './pages/register/step1/index';
import Register2 from './pages/register/step2/index';
import Register3 from './pages/register/step3/index';

export default function App() {

  return <>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Register1 />} />
        <Route path="register/2" element={<Register2 />} />
        <Route path="register/3" element={<Register3 />} />

      </Routes>

    </BrowserRouter>

  </>

}

