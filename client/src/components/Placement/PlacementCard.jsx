import React from "react";
import "./PlacementCard.css"

const PlacementCard = ({data}) => {
  return (
    <div>
     
      <div className="card">
        <div className="card-image"><img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="Image" /></div>
        <div className="category"> {data.cate} </div>
        <div className="heading">
          {data.desc}
          <div className="author">
            {" "}
           <span className="namefirst">{data.firstname}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementCard;
