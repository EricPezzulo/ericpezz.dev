/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import { FC } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { StringValidation } from "zod";
interface AppDemoCardProps {
  imagePreviewUrl: string;
  projectTitle: string;
  technologiesUsed: string[];
  status: string;
  description: string;
}

const AppDemoCard: FC<AppDemoCardProps> = ({
  imagePreviewUrl,
  projectTitle,
  technologiesUsed,
  description,
  status,
}) => {
  console.log(technologiesUsed);
  return (
    <div className="h-full max-w-xs rounded border border-gray-200 p-3 duration-150 ease-in-out hover:cursor-pointer">
      <div className="flex h-auto w-full flex-col items-center justify-center rounded bg-gray-200">
        <img
          className="flex rounded object-cover"
          src={imagePreviewUrl}
          alt={`project-image:${projectTitle}`}
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="py-1 text-lg font-semibold">{projectTitle}</p>
        <div
          className={classNames(
            status === "complete" ? "bg-green-500" : "bg-orange-400",
            "h-3 w-3 rounded-full"
          )}
        />
      </div>
      <div className="flex items-center">
        <div>
          <BiChevronLeft className="h-5 w-5 duration-100 ease-in-out hover:scale-125 hover:cursor-pointer hover:text-gray-500" />
        </div>

        <div className="flex overflow-x-auto scrollbar-hide">
          {technologiesUsed.map((tech, i) => (
            <div
              key={i}
              className="m-1 w-fit rounded-full bg-gray-200 px-3 py-1 text-sm first:ml-0"
            >
              <p className="text-xs">{tech}</p>
            </div>
          ))}
        </div>
        <div>
          <BiChevronRight className="h-5 w-5 duration-100 ease-in-out hover:scale-125 hover:cursor-pointer hover:text-gray-500" />
        </div>
      </div>
      <div className="h-24 max-w-xs py-2 text-sm">
        <p className="flex h-full overflow-y-auto whitespace-normal scrollbar-thumb-blue-500">
          {description}
        </p>
      </div>{" "}
    </div>
  );
};

export default AppDemoCard;
