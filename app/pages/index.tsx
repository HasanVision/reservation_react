import React, { useState } from "react";
import ReservationForm from "../ReservationForm";
import ReservationList from "../ReservationList";

export interface Reservation {
  area: string;
  timeSlot: string;
}

export default function Home() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const addReservation = (newReservation: Reservation) => {
    const isSlotTaken = reservations.some(
      (reservation) =>
        reservation.area === newReservation.area &&
        reservation.timeSlot === newReservation.timeSlot
    );

    if (isSlotTaken) {
      alert("This time slot is already reserved for the selected area.");
    } else {
      setReservations([...reservations, newReservation]);
    }
  };

  const deleteReservation = (index: number) => {
    const updatedReservations = reservations.filter((_, i) => i !== index);
    setReservations(updatedReservations);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Conservation Area Reservation</h1>
      <ReservationForm addReservation={addReservation} />
      <ReservationList reservations={reservations} deleteReservation={deleteReservation} />
    </div>
  );
}