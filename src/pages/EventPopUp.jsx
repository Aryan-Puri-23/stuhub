import React, { useState } from 'react';

const EventPopup = ({ event, onClose }) => {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleRegister = () => {
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 relative'>
                <button className='absolute top-0 right-1 text-4xl text-gray-600 hover:text-red-500' onClick={onClose}>×</button>

                <img src={event.image} alt={event.title} loading="lazy" className='w-full h-80 object-cover rounded-md mb-4' />

                <h2 className='text-2xl font-bold mb-2'>{event.title}</h2>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Venue:</strong> {event.venue}</p>
                <p className='mt-4'>{event.description}</p>

                <button
                    className='mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
                    onClick={handleRegister}
                >
                    Register Now
                </button>
            </div>

            {showSuccess && (
                <div className="fixed top-2 right-2 bg-green-500 text-white px-4 py-2 rounded shadow-md transition-opacity z-50"
                >
                    Event registered successfully!
                </div>
            )}

        </div>
    );
};

export default EventPopup;
