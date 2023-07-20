"use client";
// import { useState } from "react";
import AppDemoCard from "./AppDemoCard/AppDemoCard";
// import ProjectSelectButton from "./elements/ProjectSelectButton";

import { ProjectList } from "ProjectList";


const Projects = () => {
  // const [selected, setSelected] = useState<string | undefined>();

  // const slideLeft = () => {
  //   const slider = document.getElementById("slider");
  //   if (slider !== null) slider.scrollLeft = slider.scrollLeft - 355;
  // };
  // const slideRight = () => {
  //   const slider = document.getElementById("slider");
  //   if (slider !== null) slider.scrollLeft = slider.scrollLeft + 355;
  // };

  return (
    <div
      className="sm:border-red flex min-h-screen flex-col items-center sm:min-h-0"
      id="projects-section"
    >
      <h2 className="mt-20 text-4xl font-bold">Projects</h2>
      <p className="mx-4 mt-5 text-center text-gray-500 sm:max-w-xl">
        Check out some of my personal projects down here. If you have any
        questions please ask, I&apos;d be happy to speak about them.
      </p>

      {/* <div className="mt-4 flex flex-wrap items-center justify-center sm:max-w-xl">
        <ProjectSelectButton
          buttonTitle="All"
          selected={selected}
          setSelected={setSelected}
          amount={8}
        />
        <ProjectSelectButton
          buttonTitle="TypeScript"
          selected={selected}
          setSelected={setSelected}
          amount={2}
        />
        <ProjectSelectButton
          buttonTitle="JypeScript"
          selected={selected}
          setSelected={setSelected}
          amount={3}
        />
        <ProjectSelectButton
          buttonTitle="Python"
          selected={selected}
          setSelected={setSelected}
          amount={5}
        />
        <ProjectSelectButton
          buttonTitle="TailwindCSS"
          selected={selected}
          setSelected={setSelected}
          amount={4}
        />
        <ProjectSelectButton
          buttonTitle="React"
          selected={selected}
          setSelected={setSelected}
          amount={6}
        />
      </div> */}
     
          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {ProjectList.map((project, key)=>
              <AppDemoCard
              key={key}
              projectScreenShots={project.projectScreenShots}
              projectTitle={project.projectTitle}
              technologiesUsed={project.technologiesUsed}
              status={project.status}
              description={project.description}
              demoLink={project.demoLink}         />
            
            )}
          </div>


      
    </div>
  );
};

export default Projects;
