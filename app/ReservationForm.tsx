import React, { useState } from "react";
import { Reservation } from "./pages/index";

interface ReservationFormProps {
  addReservation: (reservation: Reservation) => void;
}

export default function ReservationForm({ addReservation }: ReservationFormProps) {
  const [area, setArea] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (area && timeSlot) {
      addReservation({ area, timeSlot });
      setArea("");
      setTimeSlot("");
    } else {
      alert("Please select both a conservation area and a time slot.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="areaSelect" className="form-label">Select Conservation Area:</label>
        <select
          id="areaSelect"
          className="form-select"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
        >
          <option value="">Choose an area...</option>
          {conservationAreas.map((area, index) => (
            <option key={index} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="timeSlotSelect" className="form-label">Select Time Slot:</label>
        <select
          id="timeSlotSelect"
          className="form-select"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          required
        >
          <option value="">Choose a time slot...</option>
          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Reserve
      </button>
    </form>
  );
}