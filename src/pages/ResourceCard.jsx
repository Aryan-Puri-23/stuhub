import React from "react";

const ResourceCard = ({ resource }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h3 className="text-xl font-semibold">{resource.title}</h3>
      <p className="text-gray-600 mt-1">Category: {resource.category}</p>
      <a
        href={resource.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline hover:text-purple-500 mt-1"
      >
        View Resource
      </a>
    </div>
  );
};

export default ResourceCard;