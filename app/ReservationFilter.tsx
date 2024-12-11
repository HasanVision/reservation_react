

import React from "react";

interface ReservationFilterProps {
  filterArea: string;
  setFilterArea: React.Dispatch<React.SetStateAction<string>>;
  filterTimeSlot: string;
  setFilterTimeSlot: React.Dispatch<React.SetStateAction<string>>;
}

const ReservationFilter: React.FC<ReservationFilterProps> = ({
  filterArea,
  setFilterArea,
  filterTimeSlot,
  setFilterTimeSlot,
}) => {
  const conservationAreas = [
    "Evergreen Nature Reserve",
    "Crystal Lake Conservation Park",
    "Sunny Meadows Wildlife Sanctuary",
    "Pinewood Forest Preserve",
  ];

  const timeSlots = [
    "9:00 AM - 12:00 PM",
    "12:00 PM - 3:00 PM",
    "3:00 PM - 6:00 PM",
  ];

  return (
    <div className="d-flex justify-content-between mb-4">
      <div className="me-2">
        <label htmlFor="filterArea" className="form-label">Filter by Area:</label>
        <select
          id="filterArea"
          className="form-select"
          value={filterArea}
          onChange={(e) => setFilterArea(e.target.value)}
        >
          <option value="">All Areas</option>
          {conservationAreas.map((area, index) => (
            <option key={index} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>
      <div className="ms-2">
        <label htmlFor="filterTimeSlot" className="form-label">Filter by Time Slot:</label>
        <select
          id="filterTimeSlot"
          className="form-select"
          value={filterTimeSlot}
          onChange={(e) => setFilterTimeSlot(e.target.value)}
        >
          <option value="">All Time Slots</option>
          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ReservationFilter;