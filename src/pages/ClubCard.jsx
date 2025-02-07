import React, { useState } from "react";

const ClubCard = ({ club }) => {
    const [joined, setJoined] = useState(false);

    const handleJoinClub = () => {
        setJoined(true);

        setTimeout(() => {
            setJoined(false);
        }, 3000);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 transform transition duration-300 hover:scale-105">
            <img src={club.image} alt={club.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">{club.name}</h3>
            <p className="text-gray-600">{club.description}</p>

            <h4 className="text-lg font-semibold mt-4">Upcoming Events:</h4>
            <ul className="list-disc pl-5 text-gray-700">
                {club.events.map((event) => (
                    <li key={event.id}>
                        <strong>{event.title}</strong> - {event.date}
                    </li>
                ))}
            </ul>

            <button
                onClick={handleJoinClub}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
                Join Club
            </button>

            {joined && (
                <div className="fixed top-3 right-3 bg-green-500 text-white text-sm px-4 py-2 rounded-md shadow-lg">
                    Joined Successfully!
                </div>
            )}
        </div>
    );
};

export default ClubCard;
