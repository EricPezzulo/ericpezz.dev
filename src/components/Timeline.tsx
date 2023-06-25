import { GiDiploma } from "react-icons/gi";
const Timeline = () => {
  return (
    <div>
      <ul className="my-5">
        <li className="relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="bi bi-circle-fill fill-black"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className="text-base text-gray-600">May 2021 - June 2023</p>
            <div className="max-w-xs rounded bg-[#fab90c] p-3">
              <p className="text-lg font-bold text-white">
                Full Stack Developer
              </p>
              <p className="text-md font-semibold text-white">BuildASoil</p>
              <p className="mt-2 text-sm text-white">
                Worked with TypeScript, Next.js, Node, Tailwind, MongoDB,
                Auth.js and AWS.
              </p>
            </div>
          </div>
        </li>
        <li className="relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="bi bi-circle-fill fill-black"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className="text-base text-gray-600">December 2020 - May 2021</p>
            <div className="max-w-xs rounded bg-[#f15d5f] p-3">
              <p className="text-md font-semibold text-white">
                Frontend Developer
              </p>
              <p className="text-white">Freelance</p>
              <p className="mt-2 text-sm text-white">
                Used JavaScript, React, HTML, and CSS to make websites and
                landing pages for small businesses and startup companies.
              </p>
            </div>
          </div>
        </li>
        <li className="relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="bi bi-circle-fill fill-black"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className="text-base text-gray-600">August 2016 - May 2020</p>
            <div className=" relative max-w-xs rounded bg-[#8c5ca7] p-3">
              <div className="flex">
                <p className="text-md font-semibold text-white">SUNY Oneonta</p>{" "}
                <GiDiploma className="absolute right-5 top-4 h-10 w-10 text-white" />
              </div>
              <p className="text-white">Business Economics</p>
              <p className="mt-2 text-sm text-white">
                As a business student, I have studied economics, accounting,
                finance, business law, marketing, and supply chain management,
                acquiring a comprehensive skill set and a deep understanding of
                key business disciplines. This knowledge equips me to make
                informed decisions and contribute effectively to organizational
                success.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
