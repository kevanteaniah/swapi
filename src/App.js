import {useState} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import ShipList from './pages/ShipList/ShipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';


function App() {
  return (
    <>
    <h1>This is our app!</h1> 
    {/* <ShipList />  */}
    <Routes>
      <Route path='/' element={<ShipList />} />
      <Route path='/starship' element={<StarshipDetails />} />
    </Routes>
    
    </>
  );
}

export default App;
