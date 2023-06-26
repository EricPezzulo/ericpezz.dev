/* eslint-disable @next/next/no-img-element */
import React from "react";

const Skills = () => {
  return (
    <div className="just my-5 flex flex-col items-center">
      <h4 className="w-fit bg-black px-1 text-2xl font-bold text-white">
        Skills
      </h4>

      <div className="my-10 grid grid-cols-4 gap-8 md:grid-cols-6 md:gap-10">
        <div className="m-1 h-10 w-10 rounded-lg md:h-14 md:w-14">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
            alt="typescript logo"
          />
        </div>
        <div className="m-1 h-10 w-10 rounded-lg md:h-14 md:w-14">
          <img
            className="rounded"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            alt="javascript logo"
          />
        </div>
        <div className="m-1 h-10 w-10 rounded-lg md:h-14 md:w-14">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
            alt="python logo"
          />
        </div>
        <div className="m-1 h-10 w-10 rounded-lg md:h-14 md:w-14">
          <img
            src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
            alt="next.js logo"
          />
        </div>
        <div className="m-1 h-10 w-10 rounded-lg md:h-14 md:w-14">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="react logo"
          />
        </div>
        <div className="m-1 h-10 w-10 rounded-lg md:h-14 md:w-14">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
            alt="postgresql logo"
          />
        </div>
        <div className="m-1 h-10 w-10 rounded-lg md:h-14 md:w-14">
          <img
            src="https://i.pinimg.com/originals/39/b2/e4/39b2e4ad77c23a2c11e5950a7dfa2aec.png"
            alt="prisma logo"
          />
        </div>
        <div className="m-1 h-10 w-10 rounded-lg md:h-14 md:w-14">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
            alt="graphql logo"
          />
        </div>
        <div className="m-1 h-10 w-10 rounded-lg md:h-14 md:w-14">
          <img
            src="https://www.svgrepo.com/show/331488/mongodb.svg"
            alt="mongoDB logo"
          />
        </div>
        <div className="m-1 h-10 w-10 rounded-lg md:h-14 md:w-14">
          <img
            src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
            alt="firebase logo"
          />
        </div>
        <div className="m-1 h-10 w-10 rounded-lg md:h-14 md:w-14">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
            alt="tailwindcss logo"
          />
        </div>
        <div className="m-1 h-10 w-10 rounded-lg md:h-14 md:w-14">
          <img
            src="https://seeklogo.com/images/P/planetscale-logo-0EEA8CAEB4-seeklogo.com.png"
            alt="planetscale logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
