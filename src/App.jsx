import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/moviecard'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/navbar'
function App() {

  return (
  
    <div>
    <NavBar/>
   <main>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/favorites' element= {<Favorite/>}/>
    </Routes>
    </main>
  </div>
  )
}








export default App
