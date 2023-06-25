import React from "react";

const WorkExperience = () => {
  return (
    <>
      <p className="mx-4 my-5 text-center text-gray-500">
        I started my journey as a full stack developer in 2020. Since then I
        have specialized web app development.
      </p>
      <h4 className="mb-4 bg-black text-2xl font-bold text-white">
        Work experience
      </h4>
      <div className="my-4 text-center">
        <h3 className="text-lg font-semibold">Full Stack Developer</h3>
        <p>BuildASoil</p>
        <p className="text-gray-500">May 2021 - June 2023</p>
      </div>

      <div className="my-4 text-center">
        <h3 className="text-lg font-semibold">Frontend Developer</h3>
        <p>Freelance</p>
        <p className="text-gray-500">December 2020 - May-2021</p>
      </div>
    </>
  );
};

export default WorkExperience;
