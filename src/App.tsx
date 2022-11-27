import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from './components/Starting';
import TestContents from './components/TestContents';
import Result from './components/Result';
import Loading from './components/Loading';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/test" element={<TestContents />} />
        <Route path="/result/:car" element={<Result />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
