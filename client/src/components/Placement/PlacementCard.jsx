import React from "react";

const PlacementCard = () => {
  return (
    <div>
      <div className="card">
        <div className="card-image"></div>
        <div className="category"> Illustration </div>
        <div className="heading">
          A heading that must span over two lines
          <div className="author">
            {" "}
            By <span className="name">Abi</span> 4 days ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementCard;
