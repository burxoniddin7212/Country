import { useState, useEffect, useCallback, } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Liverpul from './components/Liverpul'
import Realmadrid from './components/Realmadrid'


function App() {

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const URL = "https://restcountries.com/v2/all";

  useEffect(() => {
    setLoad(true);
    fetch(URL).then((response) => response.json()).then(data => setData(data));
    setLoad(false);
  }, [])

  if(load){
    return (<>
      <div className="w-25 m-auto">
        <button class="btn btn-primary" type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          <span class="sr-only">Loading...</span>
        </button>
        <button class="btn btn-primary" type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Loading...
        </button>
      </div>
    </>)
  }

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
