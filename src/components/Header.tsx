"use client";
import Image from "next/image";
import { PiGithubLogo, PiLinkedinLogoLight } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface DropdownMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, setIsOpen }) => {
  const goToProjects = () => {
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth" });

    setIsOpen(!isOpen);
  };
  const goToResume = () => {
    document
      .getElementById("resume-section")
      ?.scrollIntoView({ behavior: "smooth" });

    setIsOpen(!isOpen);
  };
  const goToContact = () => {
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });

    setIsOpen(!isOpen);
  };

  return (
    <div className="items-center justify-center">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 flex w-full items-center justify-center"
          >
            <ul className="mx-5 mt-4 flex w-full flex-col rounded-lg  shadow-menu">
              <button type="button" onClick={goToProjects}>
                <li className="flex w-full border-b border-gray-200 p-4 text-center text-lg font-semibold duration-150 ease-in-out hover:bg-gray-100">
                  Projects
                </li>
              </button>
              <button type="button" onClick={goToResume}>
                <li className="flex w-full border-b border-gray-200 p-4 text-lg font-semibold duration-150 ease-in-out hover:bg-gray-100">
                  Resume
                </li>
              </button>
              <button type="button" onClick={goToContact}>
                <li className="flex w-full  border-gray-200 p-4 text-lg font-semibold duration-150 ease-in-out hover:bg-gray-100">
                  Contact
                </li>
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const linkedInProfile = "https://www.linkedin.com/in/eric-pezzulo-8b2161bb/";
  const githubProfile = "https://www.github.com/EricPezzulo";
  const goToProjects = () => {
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  const goToResume = () => {
    document
      .getElementById("resume-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  const goToContact = () => {
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  console.log(isOpen);
  return (
    <header className="flex h-16 w-full items-end sm:h-24 sm:items-center sm:bg-gray-50 sm:px-5 ">
      <div className="flex w-full justify-between">
        <div className="bg-purple">
          <Image
            className="ml-4 sm:ml-0"
            src="/ericLogo.png"
            alt="test"
            width={50}
            height={50}
          />
        </div>
        <div className="sm:hidden">
          <button
            aria-label="Menu button"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <HiMenu className="h-8 w-10" />
          </button>
        </div>

        <div className="hidden h-fit items-center self-center align-bottom sm:flex ">
          <button
            onClick={goToProjects}
            className="px-2.5 font-thin hover:cursor-pointer sm:px-5 sm:duration-150 sm:hover:text-gray-500"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={goToResume}
            className="px-2.5 font-thin hover:cursor-pointer sm:px-5 sm:duration-150 sm:hover:text-gray-500"
          >
            Resume
          </button>
          <button
            type="button"
            onClick={goToContact}
            className="px-2.5 font-thin hover:cursor-pointer sm:px-5 sm:duration-150 sm:hover:text-gray-500"
          >
            Contact
          </button>
        </div>
        <div className="hidden sm:flex sm:items-center">
          <button type="button">
            <Link
              target="_blank"
              href={githubProfile}
              aria-label="Visit my GitHub"
            >
              <PiGithubLogo className="mx-2 h-8 w-8 hover:cursor-pointer sm:duration-150 sm:hover:text-gray-500" />
            </Link>
          </button>
          <button type="button">
            <Link
              target="_blank"
              href={linkedInProfile}
              aria-label="Visit my LinkedIn"
            >
              <PiLinkedinLogoLight className="h-8 w-8 hover:cursor-pointer sm:duration-150 sm:hover:text-gray-500" />
            </Link>
          </button>
        </div>
      </div>{" "}
      {isOpen && <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
}
