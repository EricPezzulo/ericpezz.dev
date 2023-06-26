"use client";
import React from "react";

const Hero = () => {
  const doThis = () => {
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  const goToProjects = () => {
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen sm:mt-14 sm:flex sm:h-96 sm:min-h-0 sm:items-center ">
      <div className="mt-64 sm:mt-0 sm:max-w-xl">
        <h4 className="mx-3 text-center text-4xl font-bold">
          Hi, I&apos;m Eric and I&apos;m a{" "}
          <span className="bg-black px-1 text-white">Full Stack Developer</span>
          .
        </h4>
        <p className="mx-4 mt-4 text-center text-gray-500">
          I&apos;m a Full Stack Develolper based in New York. I have 3 years
          professional experience and specialize in creating web app. I&apos;m
          open for new opportunities and interesting projects
        </p>
        <div className="mt-8 flex w-full justify-evenly">
          <button
            type="button"
            onClick={doThis}
            className="w-40 rounded-lg bg-black px-3 py-2 font-semibold  text-white"
          >
            Contact me
          </button>
          <button
            type="button"
            onClick={goToProjects}
            className="w-40 rounded-lg border-2 border-gray-400 bg-white px-3 py-2 font-medium text-gray-700 "
          >
            Check my work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
