import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

const Layout = React.lazy(()=>import("./Shade/Layout/Layout"));
const Dashboard = React.lazy(()=>import('./Pages/Dashboard/Dashboard'));
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes >
        <Route element={<Layout/>}>
        <Route index path='/' element={<Dashboard/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
