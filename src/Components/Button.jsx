import React from "react";

function Button({ className = "", type = "primary", text, onClick = () => {} }) {
  function styling(type) {
    if (type === "primary") {
      return "bg-blue-500 text-white hover:bg-blue-600";
    } else if (type === "secondary") {
      return "bg-white text-blue-500 border border-blue-500 hover:bg-blue-100";
    }
    return "bg-gray-300 text-black hover:bg-gray-400";
  }

  return (
    <button 
      onClick={onClick} 
      className={`${className} ${styling(type)} mr-2 p-2 rounded transition duration-300 ease-in-out`}
    >
      {text}
    </button>
  );
}

export default Button;
