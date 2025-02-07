import coding from "../assets/coding.jpg";
import musicClub from "../assets/musicClub.jpg";
import drama from "../assets/drama.jpg";
import robotics from "../assets/robotics.jpg";
import photography from "../assets/photography.jpg";
import sportsClub from "../assets/sportsClub.jpg";

export const ClubData = [
    {
      id: 1,
      name: "Coding Club",
      image: coding,
      description: "A club for coding enthusiasts to learn and build projects together.",
      events: [
        { id: 101, title: "Hackathon", date: "2025-03-10", description: "An exciting 24-hour coding competition." },
        { id: 102, title: "Web Development Bootcamp", date: "2025-04-05", description: "Learn modern web technologies." },
      ],
    },
    {
      id: 2,
      name: "Music Club",
      image: musicClub,
      description: "For students passionate about music, instruments, and singing.",
      events: [
        { id: 201, title: "Acoustic Night", date: "2025-03-15", description: "A musical evening with acoustic performances." },
        { id: 202, title: "Band Showcase", date: "2025-04-20", description: "Bands perform live on stage." },
      ],
    },
    {
      id: 3,
      name: "Drama Club",
      image: drama,
      description: "Acting, scriptwriting, and stage performances for theatre lovers.",
      events: [
        { id: 301, title: "Stage Play", date: "2025-03-22", description: "A grand theatrical performance." },
        { id: 302, title: "Improv Night", date: "2025-04-12", description: "A fun night of unscripted performances." },
      ],
    },
    {
      id: 4,
      name: "Robotics Club",
      image: robotics,
      description: "A club dedicated to building and programming robots.",
      events: [
        { id: 401, title: "Robo Race", date: "2025-05-10", description: "A competition where robots race on a track." },
        { id: 402, title: "AI & Robotics Workshop", date: "2025-06-15", description: "Learn about AI-powered robots." },
      ],
    },
    {
      id: 5,
      name: "Photography Club",
      image: photography,
      description: "For photography lovers to capture and edit amazing shots.",
      events: [
        { id: 501, title: "Photo Walk", date: "2025-07-08", description: "A city-wide photography exploration event." },
        { id: 502, title: "Editing Masterclass", date: "2025-08-18", description: "Learn how to professionally edit photos." },
      ],
    },
    {
      id: 6,
      name: "Sports Club",
      image: sportsClub,
      description: "Join sports enthusiasts in various games and fitness activities.",
      events: [
        { id: 601, title: "Inter-College Football Tournament", date: "2025-09-12", description: "Compete with teams from different colleges." },
        { id: 602, title: "Badminton Championship", date: "2025-10-05", description: "Show your skills in the badminton arena." },
      ],
    },
  ];
  