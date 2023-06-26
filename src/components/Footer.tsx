import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

export default function Footer() {
  const discordServer = "https://discord.gg/RsCnmxWF";
  const linkedInProfile = "https://www.linkedin.com/in/eric-pezzulo-8b2161bb/";
  const githubProfile = "https://www.github.com/EricPezzulo";
  if (!discordServer || !linkedInProfile || !githubProfile) return null;
  return (
    <footer className="flex w-full flex-col items-center justify-center p-2 pt-4 sm:bg-gray-50">
      <div className="flex h-full w-full max-w-5xl items-center justify-between px-10 lg:px-0">
        <button type="button">
          <Link
            href={githubProfile}
            target="_blank"
            aria-label="Visit my GitHub"
          >
            <AiFillGithub className="h-7 w-7 sm:duration-150 sm:hover:text-gray-500" />
          </Link>
        </button>

        <button type="button">
          <Link
            href={linkedInProfile}
            target="_blank"
            aria-label="Visit my LinkedIn"
          >
            <AiFillLinkedin className="h-7 w-7 sm:duration-150 sm:hover:text-gray-500" />
          </Link>
        </button>

        <button type="button">
          <Link
            target="_blank"
            href={discordServer}
            aria-label="Join my Discord Server"
          >
            <BsDiscord className="h-7 w-7 sm:duration-150 sm:hover:text-gray-500" />
          </Link>
        </button>
      </div>{" "}
      <p className="mt-3 text-center text-sm text-gray-700">
        © All rights reserved
      </p>
    </footer>
  );
}
