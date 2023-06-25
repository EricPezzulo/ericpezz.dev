"use client";
import { useState } from "react";
import AppDemoCard from "./AppDemoCard/AppDemoCard";
import ProjectSelectButton from "./elements/ProjectSelectButton";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Projects = () => {
  const [selected, setSelected] = useState<string | undefined>();

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider !== null) slider.scrollLeft = slider.scrollLeft - 355;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider !== null) slider.scrollLeft = slider.scrollLeft + 355;
  };

  return (
    <div
      className="flex min-h-screen flex-col items-center"
      id="projects-section"
    >
      <h2 className="mt-20 text-4xl font-bold">Projects</h2>
      <p className="mx-4 mt-5 text-gray-500">
        Check out some of my personal projects down here. If you have any
        questions please ask, I&apos;d be happy to speak about them.
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
      <div className="relative my-16 flex w-full max-w-sm items-center ">
        <AiOutlineLeft
          onClick={slideLeft}
          className="h-6 w-6 cursor-pointer text-black opacity-50 duration-150 hover:opacity-100"
        />
        <div
          id="slider"
          className="scroll flex h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          <AppDemoCard />
          <AppDemoCard />
          <AppDemoCard />
          <AppDemoCard />
          <AppDemoCard />
          <AppDemoCard />
          <AppDemoCard />
          <AppDemoCard />
          <AppDemoCard />
        </div>
        <AiOutlineRight
          onClick={slideRight}
          className="h-6 w-6 cursor-pointer text-black opacity-50 duration-150 hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default Projects;
