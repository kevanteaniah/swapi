import { useState, useEffect } from 'react';
import { getDetails } from '../../services/sw-api';
import { useLocation } from 'react-router-dom';

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.starship.url)
    .then(starshipData => setStarshipDetails(starshipData))
  }, [])

  return(
  <>
      <a href='/'> Home</a>
      <h3>{starshipDetails.name}</h3>
      <h3>{starshipDetails.model}</h3>
      
  </>

  );
  

}

export default StarshipDetails