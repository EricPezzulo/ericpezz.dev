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
    <div className="min-h-screen">
      <div className="mt-64">
        <h4 className="mx-3 text-center text-4xl font-bold">
          Hi, I&prime;m Eric and I&prime;m a{" "}
          <span className="bg-black text-white">Full Stack Developer</span>.
        </h4>
        <p className="mx-4 mt-4 text-center text-gray-500 sm:text-black">
          I&prime;m a Full Stack Develolper based in New York. I have 3 years
          professional experience and specialize in creating web app. I&prime;m
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
