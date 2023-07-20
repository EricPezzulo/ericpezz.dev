/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import Link from "next/link";
import {  type FC, } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import {FiExternalLink} from 'react-icons/fi'
import ProjectImageSlider from "./ProjectImageSlider";

interface AppDemoCardProps {
  projectScreenShots: string[];
  projectTitle: string;
  technologiesUsed: string[];
  status: string;
  description: string;
  demoLink: string
}
const AppDemoCard: FC<AppDemoCardProps> = ({
  projectScreenShots,
  projectTitle,
  technologiesUsed,
  description,
  status,
  demoLink
}) => {


  return (
    <div className="h-full my-2 sm:mx-3 w-full sm:max-w-sm rounded overflow-hidden border border-gray-200 p-3">
      
      <ProjectImageSlider images={projectScreenShots}/>
   
      <div className="flex items-center justify-between">
        <div className="py-2 flex items-center justify-center">
          <p className="text-lg font-semibold">{projectTitle}</p>
          
        </div>
        <div className="flex items-center">
         {demoLink ? (
              <Link href={demoLink} target="_blank">
              <FiExternalLink className='w-4 h-4 text-gray-400 mr-3'/>
              </Link>
            ):<FiExternalLink className='w-4 h-4 text-gray-400 mr-3'/>
            }
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
              <p className="text-xs whitespace-nowrap">{tech}</p>
            </div>
          ))}
        </div>
        <div>
          <BiChevronRight className="h-5 w-5 duration-100 ease-in-out hover:scale-125 hover:cursor-pointer hover:text-gray-500" />
        </div>
      </div>
      <div className="h-36 overflow-y-auto w-full text-sm  pt-3 py-2">
        <div className="h-full">
          <p className="flex text-gray-600  whitespace-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDemoCard;
