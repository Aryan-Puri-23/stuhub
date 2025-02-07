import React from "react";
import NavBar from './NavBar';
import { ClubData } from "../utils/ClubData";
import ClubCard from "./ClubCard";

const Clubs = () => {
    return (
        <>
            <NavBar />
            <section className="container mx-auto my-10 px-4 py-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">University Clubs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {ClubData.map((club) => (
                        <ClubCard key={club.id} club={club} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Clubs;
