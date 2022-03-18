import { getShipList } from '../../services/sw-api'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


const ShipList = (props) => {
  const [shipList, setShipList] = useState([])
  useEffect(()=> {
    getShipList()
    .then(shipData => setShipList(shipData.results))
  }, [])
  
  return (
    <>
      <h3>Monster List</h3>
      {shipList.length ? 
      <>
        {shipList.map((starship) => (
          
          <Link id='links' className='links'
            to="/starship"
            state={{ starship }}
            key={starship['name']}>
              
            <div id='link-div'>
            {starship['name']}</div>

              </Link>
            
              
              
          
        ))}
      </>
      :
      <>
        <h2>Loading SHips...</h2>
      </>}
    </>
  );
}

export default ShipList;