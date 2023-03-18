// import React from 'react'
// import './Placements.css'
// import { PlacementData } from '../../Data/PlacementData'
// import PlacementCard from '../Placement/PlacementCard'

// const Placements = () => {
//   return (
//     <div className="PlacementSlider">
//       <div className="PlacementSliderContainer">
//         {PlacementData.map((placementdata, id) => {
//           return <PlacementCard data={placementdata} id={id} key={id} />
//         })}
//       </div>
//     </div>
//   )
// }

// export default Placements

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Placements.css';
import PlacementCard from '../Placement/PlacementCard';
import { useSelector, useDispatch } from "react-redux";


const Placements = () => {
  const [placementData, setPlacementData] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    axios.get(`http://localhost:5000/placements/${user._id}/timeline`)
      .then(response => {
        setPlacementData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="PlacementSlider">
      <div className="PlacementSliderContainer">
        {placementData.map((placementdata, id) => {
          return <PlacementCard data={placementdata} id={id} key={id} />
        })}
      </div>
    </div>
  );
}
export default Placements