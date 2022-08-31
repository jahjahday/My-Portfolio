import React from "react";
import exam from "../public/assets/projects/exam3.png";
import tracker from "../public/assets/projects/tracker.png";
import food from "../public/assets/projects/food.png";
import crypto from "../public/assets/projects/crypto1.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full bg-[#1f2235] ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 text-white">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Exam Manager"
            backgroundImg={exam}
            projectUrl="/examgr"
            tech="Next JS"
          />
          <ProjectItem
            title="Expense Tracker"
            backgroundImg={tracker}
            projectUrl="/tracker"
            tech="React JS"
          />
          <ProjectItem
            title="Food"
            backgroundImg={food}
            projectUrl="/food"
            tech="JavaScript"
          />
          <ProjectItem
            title="Crypto Currency"
            backgroundImg={crypto}
            projectUrl="/crypto"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
