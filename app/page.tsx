'use client'
import { useState, useEffect } from "react";
import ReservationForm from "./ReservationForm";
import ReservationList from "./ReservationList";
import ReservationFilter from "./ReservationFilter"; // Import the filter component
import styles from './page.module.css'; 

interface Reservation {
  area: string;
  timeSlot: string;
}

export default function Home() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [showReservations, setShowReservations] = useState(true);
  const [filterArea, setFilterArea] = useState<string>("");
  const [filterTimeSlot, setFilterTimeSlot] = useState<string>("");

  useEffect(() => {
    const storedReservations = localStorage.getItem("reservations");
    if (storedReservations) {
      setReservations(JSON.parse(storedReservations));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);

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

  const toggleReservationsVisibility = () => {
    setShowReservations((prev) => !prev);
  };

  const clearAllReservations = () => {
    if (confirm("Are you sure you want to clear all reservations?")) {
      setReservations([]);
      localStorage.removeItem("reservations");
    }
  };

  const filteredReservations = reservations.filter((reservation) => {
    const matchesArea = filterArea ? reservation.area === filterArea : true;
    const matchesTimeSlot = filterTimeSlot
      ? reservation.timeSlot === filterTimeSlot
      : true;
    return matchesArea && matchesTimeSlot;
  });

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-center mb-4">Conservation Area Reservation</h1>
        <ReservationForm addReservation={addReservation} />
        <ReservationFilter
          filterArea={filterArea}
          setFilterArea={setFilterArea}
          filterTimeSlot={filterTimeSlot}
          setFilterTimeSlot={setFilterTimeSlot}
        />
        <button
          className="btn btn-secondary w-100 mb-4"
          onClick={toggleReservationsVisibility}
        >
          {showReservations ? "Hide Reservations" : "Show Reservations"}
        </button>
        {showReservations && (
          <ReservationList
            reservations={filteredReservations}
            deleteReservation={deleteReservation}
          />
        )}
        <button
          className="btn btn-warning w-100 mt-3"
          onClick={clearAllReservations}
        >
          Clear All Reservations
        </button>
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