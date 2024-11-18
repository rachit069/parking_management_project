import React from "react";
import "../Styles/ParkingSpace.css"
const ParkingSection = ({ type, slots }) => (
  <div className="parking-section">
    <h2>{type} Parking</h2>
    <div className="parking-slots">
      {Array.from({ length: slots }, (_, index) => (
        <div className="slot" key={index + 1}></div>
      ))}
    </div>
  </div>
);

const ParkingSpace = () => {
  return (
    <div className="container">
      <h1>Parking Space Availability</h1>
      <ParkingSection type="2-Wheeler" slots={10} />
      <ParkingSection type="3-Wheeler" slots={10} />
      <ParkingSection type="4-Wheeler" slots={10} />
    </div>
  );
};

export default ParkingSpace;