import React,{useState} from 'react';
import Lists from './Lists';

const Groups = ({count, func}) => {
  const [value,setValue] = useState('');
  return (
    <>
    <div className="card d-flex w-50 mx-auto m-5 p-2">
      <input onChange={(e)=>setValue(e.target.value)} className="form-control" type="number" />
        <button className="w-25 mx-auto m-3 btn btn-primary" onClick={()=>func(value)}>Send</button>
    </div>
    </>
  );
};

export default Groups;