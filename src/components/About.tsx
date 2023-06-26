"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  return (
    <div
      id="about-section"
      className="mx-4 min-h-screen pt-6 text-center sm:min-h-0"
    >
      <h4 className="text-4xl font-bold">About</h4>
      <div className="sm:max-w-lg">
        <div className="mt-8 flex w-full items-center justify-center">
          <Image
            className="rounded-[30px] grayscale"
            width="200"
            height="200"
            src="/eric_headshot.png"
            alt="Eric Pezzulo"
          />
        </div>
        <div className="text-gray-700">
          <p className="mt-8">
            I started my journey in tech back in 2008 when I got my first laptop
            and was immediatly drawn to video editing and YouTube.
          </p>

          <p className="mt-4">
            I started using software like Sony Vegas Pro and Adobe After Effects
            to together gameplay clips for my friends and I.
          </p>
          <p className="mt-4">
            From there, my interest in graphic design grew, and I became
            proficient in Adobe Photoshop and Illustrator.
          </p>

          <p className="mt-4">
            Circa 2014, I wrote my first hello world in Visual Basic, sparking
            my love for programming. Since then, I&apos;ve built numerous web
            apps and fun projects using various tools.
          </p>

          <p className="mt-4">
            My goal is to create engaging and intuitive web experiences that
            leave a lasting impression on users. Let&apos;s connect and embark
            on an exciting journey together in the ever-evolving world of web
            development.
          </p>
        </div>{" "}
      </div>
    </div>
  );
}
