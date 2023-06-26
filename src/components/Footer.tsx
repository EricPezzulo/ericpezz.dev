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
    <footer className="w-full p-2 pt-4">
      <div className="flex h-full w-full items-center justify-evenly">
        <button type="button">
          <Link href={githubProfile} target="_blank">
            <AiFillGithub className="h-6 w-6" />
          </Link>
        </button>

        <button type="button">
          <Link href={linkedInProfile} target="_blank">
            <AiFillLinkedin className="h-6 w-6" />
          </Link>
        </button>

        <button type="button">
          <Link target="_blank" href={discordServer}>
            <BsDiscord className="h-6 w-6" />
          </Link>
        </button>
      </div>
      <p className="my-3 text-center text-sm text-gray-700">
        © All rights reserved
      </p>
    </footer>
  );
}
