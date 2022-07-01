import React, { useState, useEffect } from 'react';

const Lists = ({ count, getInfo }) => {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(getInfo())
    console.log(data);
  }, [getInfo])

  
 
  return (
    <>
      <ul>
        {data.map((item) => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
    </>
  );
};

export default Lists;