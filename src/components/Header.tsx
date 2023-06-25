"use client";
import Image from "next/image";
import { PiGithubLogo, PiLinkedinLogoLight } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            <ul className="mt-2 flex w-full flex-col border-x border-b border-gray-200 bg-white">
              <button type="button" onClick={goToProjects}>
                <li className="flex w-full border-b border-gray-200 p-2 text-center text-lg font-semibold">
                  Projects
                </li>
              </button>
              <button type="button" onClick={goToResume}>
                <li className="flex w-full border-b border-gray-200 p-2 text-lg font-semibold">
                  Resume
                </li>
              </button>
              <button type="button" onClick={goToContact}>
                <li className="flex w-full  border-gray-200 p-2 text-lg font-semibold">
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
  return (
    <header className="flex h-16 w-full items-end sm:px-5">
      <div className="flex w-full justify-between">
        <Image
          className="ml-4 sm:ml-0"
          src="/ericLogo.png"
          alt="test"
          width={50}
          height={50}
        />
        <div className="sm:hidden">
          <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
            <HiMenu className="h-8 w-10" />
          </button>
        </div>

        <div className="hidden h-fit items-center self-center align-bottom sm:flex">
          <h2 className="px-2.5 font-thin hover:cursor-pointer sm:px-5">
            Projects
          </h2>
          <h2 className="px-2.5 font-thin hover:cursor-pointer sm:px-5">
            Resume
          </h2>
          <h2 className="px-2.5 font-thin hover:cursor-pointer sm:px-5">
            Contact
          </h2>
        </div>
        <div className="hidden sm:flex sm:items-center">
          <PiGithubLogo className="mx-2  h-8 w-8 hover:cursor-pointer" />
          <PiLinkedinLogoLight className="h-8 w-8 hover:cursor-pointer sm:mr-2" />
        </div>
      </div>{" "}
      {isOpen && <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
}
