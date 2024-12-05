'use client';

import ReservationForm from "./ReservationForm";
import ReservationList from "./ReservationList";
import { useState } from "react";
import styles from './page.module.css'; // Import the CSS module

interface Reservation {
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
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-center mb-4">Conservation Area Reservation</h1>
        <ReservationForm addReservation={addReservation} />
        <ReservationList
          reservations={reservations}
          deleteReservation={deleteReservation}
        />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/HasanVision"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my GitHub profile (Hasan Haj Hasan)
          
        </a>
        All rights reserved 2024
      </footer>
    </div>
  );
}
