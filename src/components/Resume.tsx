"use client";
import React from "react";
// import { useState } from "react";
import Timeline from "./Timeline";
import WorkExperience from "./WorkExperience";
import DownloadResume from "./DownloadResume/DownloadResume";
// import FancySwitch from "./elements/FancySwitch";

const Resume = () => {
  // const [enabled, setEnabled] = useState(false);

  return (
    <div
      id="resume-section"
      className="mx-2 flex min-h-screen flex-col items-center justify-center sm:min-h-0"
    >
      <div className="flex items-center">
        <h2 className="ml-6 mt-10 text-4xl font-bold">Resume</h2>
      </div>
      <p className="mx-4 my-5 text-center text-gray-500 sm:max-w-xl">
        I started my journey as a full stack developer in 2020. Since then I
        have specialized web app development.
      </p>
      <WorkExperience />
      <div className="my-10">
        <DownloadResume />
      </div>
      {/* <div className="my-2">
        <FancySwitch
          enabled={enabled}
          setEnabled={setEnabled}
          enabledLabel="Show Resume"
          disabledLabel="Show Timeline"
        />
      </div> */}
      <div className="my-5" my-5>
        <Timeline />
      </div>
    </div>
  );
};

export default Resume;
