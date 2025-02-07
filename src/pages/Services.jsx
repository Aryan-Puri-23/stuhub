import React from "react";
import StudyGroups from "./StudyGroups";
import Resources from "./Resources";
import NavBar from "./NavBar";

const Services = () => {
  return (
    <>
    <NavBar/>
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Student Networking</h2>
        <StudyGroups />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Student Resources</h2>
        <Resources />
      </section>
    </div>
    </>
  );
};

export default Services;
