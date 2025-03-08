import React, { useState } from 'react';
import NavBar from '../pages/NavBar';
import EventCard from '../pages/EventCard';
import EventPopup from '../pages/EventPopUp';

import { WorkshopData } from '../utils/WorkshopData';
import { ConcertData } from '../utils/ConcertData';
import { SeminarData } from '../utils/SeminarData';

const renderEventSection = (title, events, handleKnowMore) => (
  <section className='mt-20'>
    <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {events.map(event => (
        <EventCard key={event.id} event={event} onKnowMore={handleKnowMore} />
      ))}
    </div>
  </section>
);

const HomePage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleKnowMore = (event) => setSelectedEvent(event);
  const closePopup = () => setSelectedEvent(null);

  return (
    <>
      <NavBar />

      <div className={`p-8 transition-all duration-300 ${selectedEvent ? 'blur-md' : ''}`}>
        <h1 className='text-3xl font-bold text-center'>Watch out for the following upcoming events!</h1>

        {renderEventSection('Workshops', WorkshopData, handleKnowMore)}
        {renderEventSection('Concerts', ConcertData, handleKnowMore)}
        {renderEventSection('Seminars', SeminarData, handleKnowMore)}
      </div>

      {selectedEvent && <EventPopup event={selectedEvent} onClose={closePopup} />}
    </>
  );
};

export default HomePage;
