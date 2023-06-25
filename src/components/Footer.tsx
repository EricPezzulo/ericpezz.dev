import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 p-2">
      <div className="flex h-full w-full items-center justify-evenly">
        <button type="button">
          <Link href="https://github.com/EricPezzulo" target="_blank">
            <AiFillGithub className="h-6 w-6" />
          </Link>
        </button>

        <button type="button">
          <Link
            href="https://www.linkedin.com/in/eric-pezzulo-8b2161bb/"
            target="_blank"
          >
            <AiFillLinkedin className="h-6 w-6" />
          </Link>
        </button>

        <button type="button">
          <BsDiscord className="h-6 w-6" />
        </button>
      </div>
      <p className="mt-1.5 text-center text-sm text-gray-700">
        © All rights reserved
      </p>
    </footer>
  );
}
