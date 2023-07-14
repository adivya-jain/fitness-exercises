import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'
import ExerciseDetails from './Pages/ExerciseDetails';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';



const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
