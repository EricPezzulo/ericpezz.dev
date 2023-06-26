"use client";
import Image from "next/image";
import { PiGithubLogo, PiLinkedinLogoLight } from "react-icons/pi";
import { MdOutlineClose } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface DropdownMenuProps {
  refOne: React.Ref<HTMLDivElement>;
  isOpen: boolean;
  goToAbout: MouseEventHandler<HTMLButtonElement>;
  goToProjects: MouseEventHandler<HTMLButtonElement>;
  goToResume: MouseEventHandler<HTMLButtonElement>;
  goToContact: MouseEventHandler<HTMLButtonElement>;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  goToAbout,
  goToContact,
  goToProjects,
  goToResume,
  refOne,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={refOne}
          key="menu"
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 },
          }}
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
            <button type="button" onClick={goToAbout}>
              <li className="flex w-full border-b border-gray-200 p-4 text-lg font-semibold duration-150 ease-in-out hover:bg-gray-100">
                About
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
  const goToAbout: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(!isOpen);
  };

  const refOne = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (refOne.current && !refOne.current.contains(e.target as Node)) {
        setIsOpen(!isOpen);
        console.log("clicked outside");
      }
    };

    const handleDocumentClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };

    // document.addEventListener("click", handleClickOutside, true);
  }, [isOpen]);

  return (
    <header className="flex h-16 w-full items-center justify-center sm:h-24 sm:items-center sm:bg-gray-50 sm:px-5 ">
      <div className="w-full max-w-5xl">
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
              className="mr-4 sm:mr-0"
              aria-label="Menu button"
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {!isOpen ? (
                <HiMenu className="h-8 w-10" />
              ) : (
                <MdOutlineClose className="h-8 w-8" />
              )}
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
              onClick={goToAbout}
              className="px-2.5 font-thin hover:cursor-pointer sm:px-5 sm:duration-150 sm:hover:text-gray-500"
            >
              About
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
        </div>
        <DropdownMenu
          isOpen={isOpen}
          goToAbout={goToAbout}
          goToContact={goToContact}
          goToProjects={goToProjects}
          goToResume={goToResume}
          refOne={refOne}
        />
      </div>
    </header>
  );
}
