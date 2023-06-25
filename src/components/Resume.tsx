"use client";
import React, { useState } from "react";
import Timeline from "./Timeline";
import WorkExperience from "./WorkExperience";
import DownloadResume from "./DownloadResume/DownloadResume";
import FancySwitch from "./elements/FancySwitch";

const Resume = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      id="resume-section"
      className="mx-2 mt-16 flex min-h-screen flex-col items-center justify-center"
    >
      <div className="flex items-center">
        <h2 className="ml-6 text-4xl font-bold">Resume</h2>
      </div>
      <div className="my-2">
        <FancySwitch
          enabled={enabled}
          setEnabled={setEnabled}
          enabledLabel="Show Resume"
          disabledLabel="Show Timeline"
        />
      </div>
      {!enabled ? <WorkExperience /> : <Timeline />}
      <div className="my-10">
        <DownloadResume />
      </div>
    </div>
  );
};

export default Resume;
