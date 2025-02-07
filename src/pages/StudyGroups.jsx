import React, { useState } from "react";
import StudyGroupCard from "./StudyGroupCard";

const studyGroups = [
  { id: 1, name: "Web Dev Study Group", topic: "React & Node.js" },
  { id: 2, name: "AI & ML Enthusiasts", topic: "Machine Learning Basics" },
  { id: 3, name: "Data Structures & Algorithms", topic: "Competitive Programming" },
];

const StudyGroups = () => {
  const [joinedGroups, setJoinedGroups] = useState([]);

  const joinGroup = (group) => {
    if (!joinedGroups.includes(group.id)) {
      setJoinedGroups([...joinedGroups, group.id]);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Study Groups</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {studyGroups.map((group) => (
          <StudyGroupCard key={group.id} group={group} joinGroup={joinGroup} joined={joinedGroups.includes(group.id)} />
        ))}
      </div>
    </div>
  );
};

export default StudyGroups;