import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './assets/components/Home'
import Work from './assets/components/Work'
import Music from './assets/components/Music'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/music" element={<Music />} />
      </Routes>
    </>
  )
}

export default App
