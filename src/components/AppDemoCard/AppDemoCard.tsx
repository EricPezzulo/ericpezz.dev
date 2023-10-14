/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import Link from "next/link";
import { type FC } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import ProjectImageSlider from "./ProjectImageSlider";

interface AppDemoCardProps {
  projectScreenShots: string[];
  projectTitle: string;
  technologiesUsed: string[];
  status: string;
  description: string;
  demoLink: string;
}
const AppDemoCard: FC<AppDemoCardProps> = ({
  projectScreenShots,
  projectTitle,
  technologiesUsed,
  description,
  status,
  demoLink,
}) => {
  return (
    <div className="my-2 h-full w-full overflow-hidden rounded border border-gray-200 p-3 sm:mx-3 sm:max-w-sm">
      <ProjectImageSlider images={projectScreenShots} />

      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center py-2">
          <p className="text-lg font-semibold">{projectTitle}</p>
        </div>
        <div className="flex items-center">
          {demoLink ? (
            <Link href={demoLink} target="_blank">
              <FiExternalLink className="mr-3 h-4 w-4 text-gray-400" />
            </Link>
          ) : (
            <FiExternalLink className="mr-3 h-4 w-4 text-gray-400" />
          )}
          <div
            className={classNames(
              status === "complete" ? "bg-green-500" : "bg-orange-400",
              "h-3 w-3 rounded-full"
            )}
          />
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <BiChevronLeft className="h-5 w-5 duration-100 ease-in-out hover:scale-125 hover:cursor-pointer hover:text-gray-500" />
        </div>

        <div className="flex overflow-x-auto scrollbar-hide">
          {technologiesUsed.map((tech, i) => (
            <div
              key={i}
              className="m-1  rounded-full bg-gray-200 px-3 py-1 text-sm first:ml-0"
            >
              <p className="whitespace-nowrap text-xs">{tech}</p>
            </div>
          ))}
        </div>
        <div>
          <BiChevronRight className="h-5 w-5 duration-100 ease-in-out hover:scale-125 hover:cursor-pointer hover:text-gray-500" />
        </div>
      </div>
      <div className="h-36 w-full overflow-y-auto py-2  pt-3 text-sm">
        <div className="h-full">
          <p className="flex whitespace-normal  text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDemoCard;
