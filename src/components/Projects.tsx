"use client";
import { useState } from "react";
import AppDemoCard from "./AppDemoCard/AppDemoCard";
import ProjectSelectButton from "./elements/ProjectSelectButton";

const Projects = () => {
  const [selected, setSelected] = useState<string | undefined>();
  return (
    <div
      className="flex min-h-screen flex-col items-center "
      id="projects-section"
    >
      <h2 className="mt-20 text-4xl font-bold">Projects</h2>
      <p className="mx-4 mt-5 text-gray-500">
        Check out some of my personal projects down here. If you have any
        questions please ask, I&prime;d be happy to speak about them.
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center">
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
      </div>
      <AppDemoCard />
      <AppDemoCard />
    </div>
  );
};

export default Projects;
