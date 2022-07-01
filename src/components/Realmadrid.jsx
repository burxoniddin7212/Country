import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from "react-router-dom";

const Realmadrid = ({ data }) => {

  const [searchdata, setSearchdata] = useState([]);
  const [info, setInfo] = useState("");
  const [displey, setDispley] = useState(true);


  useEffect(() => {
    search
  }, [setSearchdata])

  const search = async (e) => {
    if (e.key === "Enter") {
      const response = await fetch(`https://restcountries.com/v2/name/${info}`);
      const rezult = await response.json();

      if (response.status === 500) {
        alert('Xato qidiruv');
        setInfo("");
      }
      else {
        return setSearchdata(rezult[0]), setDispley(false)
      }
    }
  }

  const gobek = () => {
    setDispley(true)
    setInfo('')
  }


  return (
    <>

      <div className="card w-50 mx-auto form-control mt-5 p-3">
        <input className="w-50 mx-auto form-control" value={info} onChange={(e) => setInfo(e.target.value)} onKeyPress={(e) => search(e)} type="text" placeholder='Search' />
      </div>


      {displey ? (
        <ul className="table table-striped w-75 mx-auto mt-4">

          {data.map(item => {
            return (
              <NavLink to={`/home/${item.name}`} key={item.name}>
                <li className="table d-flex justify-content-between" key={item.name}>
                  <h5>{item.name}</h5>
                  <img style={{ width: "75px" }} src={item.flag} alt={item.name} />
                </li>
              </NavLink>
            )
          })}

        </ul>)
        :
        (
          <>
            <button className='btn btn-primary ms-4' onClick={gobek}>{"<="}</button>
            <div className="card w-75 mx-auto mt-5 p-2">
              <h1 className="mx-auto">{searchdata.name}</h1>
              <h3 className='mx-auto'><span className='fw-bold'>Capital: </span>{searchdata.capital}</h3>
              <h4 className='mx-auto'><span className='fw-bold'>Timezones: </span>{searchdata.timezones}</h4>
              <img className='mx-auto' src={searchdata.flag} alt={searchdata.name} style={{ width: "300px" }} />
            </div>
          </>
        )
      }

    </>
  );
};

export default Realmadrid;