import React from "react";

const StudyGroupCard = ({ group, joinGroup, joined }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h3 className="text-xl font-semibold">{group.name}</h3>
      <p className="text-gray-600">Topic: {group.topic}</p>
      <button
        className={`mt-2 px-4 py-2 rounded ${joined ? "bg-gray-400" : "bg-blue-500 text-white"}`}
        onClick={() => joinGroup(group)}
        disabled={joined}
      >
        {joined ? "Joined" : "Join Group"}
      </button>
    </div>
  );
};

export default StudyGroupCard;