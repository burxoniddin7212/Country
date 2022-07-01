import { useState, useEffect, useCallback, } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Liverpul from './components/Liverpul'
import Realmadrid from './components/Realmadrid'


function App() {

  const [data, setData] = useState([]);
  const URL = "https://restcountries.com/v2/all";

  useEffect(() => {
    fetch(URL).then((response) => response.json()).then(data => setData(data));
  }, [])

  return (
    <>

      <Routes>
        <Route path="/" element={<Realmadrid data={data} />} />
        <Route path="/home" element={<Realmadrid data={data} />} />
        <Route path="/home/:id" element={<Liverpul />} />
      </Routes>

    </>
  )
}

export default App
