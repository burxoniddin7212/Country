import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Liverpul = () => {

  const [info, setInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${id}`).then(response => response.json()).then((data) => { setInfo(data[0]) })
  }, [id])

  return (
    <>
      <div className="card w-75 mx-auto mt-5 p-2">
        <h1 className="mx-auto">{info.name}</h1>
        <h3 className='mx-auto'><span className='fw-bold'>Capital: </span>{info.capital}</h3>
        <h4 className='mx-auto'><span className='fw-bold'>Timezones: </span>{info.timezones}</h4>
        <img className='mx-auto' src={info.flag} alt={info.name} style={{ width: "300px" }} />
      </div>
    </>
  );
};

export default Liverpul;