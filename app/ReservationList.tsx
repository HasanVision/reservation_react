import React from "react";
import { Reservation } from "./pages/index";

interface ReservationListProps {
  reservations: Reservation[];
  deleteReservation: (index: number) => void;
}

export default function ReservationList({ reservations, deleteReservation }: ReservationListProps) {
  return (
    <div>
      <h2 className="mb-3">Your Reservations</h2>
      {reservations.length > 0 ? (
        <ul className="list-group">
          {reservations.map((reservation, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <strong>{reservation.area}</strong> - {reservation.timeSlot}
              </span>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteReservation(index)}
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">No reservations yet.</p>
      )}
    </div>
  );
}