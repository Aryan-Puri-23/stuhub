import React, { useState } from "react";
import ResourceCard from "./ResourceCard";

const resources = [
    { id: 1, category: "Academics", title: "React Official Docs", link: "https://react.dev" },
    { id: 2, category: "Mental Health", title: "Meditation Tips", link: "https://calm.com" },
    { id: 3, category: "Career Advice", title: "Resume Writing Guide", link: "https://resume.com" },
    { id: 4, category: "Academics", title: "JavaScript MDN Docs", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { id: 5, category: "Academics", title: "CSS Tricks", link: "https://css-tricks.com" },
    { id: 6, category: "Mental Health", title: "Headspace - Mindfulness", link: "https://www.headspace.com" },
    { id: 7, category: "Career Advice", title: "LinkedIn Learning", link: "https://www.linkedin.com/learning" },
    { id: 8, category: "Productivity", title: "Notion - Notes & Tasks", link: "https://www.notion.so" },
    { id: 9, category: "Career Advice", title: "Interview Preparation", link: "https://www.pramp.com" },
    { id: 10, category: "Academics", title: "Next.js Documentation", link: "https://nextjs.org/docs" },
    { id: 11, category: "Academics", title: "Khan Academy", link: "https://www.khanacademy.org" },
    { id: 12, category: "Academics", title: "Coursera Free Courses", link: "https://www.coursera.org" },
    { id: 13, category: "Mental Health", title: "BetterHelp - Online Therapy", link: "https://www.betterhelp.com" },
    { id: 14, category: "Productivity", title: "Pomodoro Timer", link: "https://pomofocus.io" },
    { id: 15, category: "Tech News", title: "TechCrunch", link: "https://techcrunch.com" }
  ];
  

const Resources = () => {
  const [search, setSearch] = useState("");

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Student Resources</h2>
      <input
        type="text"
        placeholder="Search resources..."
        className="border p-2 w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default Resources;