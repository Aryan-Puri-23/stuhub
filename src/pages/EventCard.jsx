import React from 'react';

const EventCard = ({ event, onKnowMore }) => {
  return (
    <div className='border rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
      <img src={event.image} alt={event.title} loading="lazy" className='w-full h-48 object-cover rounded-md mb-4' />
      <h3 className='text-xl font-bold'>{event.title}</h3>
      <p className='mt-2'>{event.shortDescription}</p>
      <button 
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        onClick={() => onKnowMore(event)}
      >
        Know More
      </button>
    </div>
  );
};

export default EventCard;
