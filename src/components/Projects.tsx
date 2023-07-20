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
      className="sm:border-red flex min-h-screen flex-col items-center sm:min-h-0"
      id="projects-section"
    >
      <h2 className="mt-20 text-4xl font-bold">Projects</h2>
      <p className="mx-4 mt-5 text-center text-gray-500 sm:max-w-xl">
        Check out some of my personal projects down here. If you have any
        questions please ask, I&apos;d be happy to speak about them.
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center sm:max-w-xl">
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
      <div className="relative my-16 flex w-full max-w-sm items-center  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <AiOutlineLeft
          onClick={slideLeft}
          className="h-6 w-6 cursor-pointer text-black opacity-50 duration-150 hover:opacity-100"
        />
        <div
          id="slider"
          className="scroll flex h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap py-3 scrollbar-hide"
        >
          <AppDemoCard
            imagePreviewUrl={
              "https://cdn.dribbble.com/users/786628/screenshots/7633769/spendesk_app-store_ld.png?compress=1&resize=400x300&vertical=center"
            }
            projectTitle={"LostVillage"}
            technologiesUsed={[
              "TypeScript",
              "Node",
              "Next.js",
              "TailwindCSS",
              "Prisma",
              "PostgreSQL",
              "Clerk",
            ]}
            status={"in progress"}
            description="LostVillage is an Full Stack e-Commerce website. Built with Next.js, Stripe, Clerk, and Redux.    
          voluptas."
          />
          {/* <AppDemoCard />
          <AppDemoCard />
          <AppDemoCard />
          <AppDemoCard />
          <AppDemoCard />
          <AppDemoCard />
          <AppDemoCard />
          <AppDemoCard /> */}
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
