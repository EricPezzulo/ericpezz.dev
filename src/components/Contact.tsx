/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  const handleOnSend = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      id="contact-section"
      className="flex h-[calc(100vh-4rem)] w-full flex-col items-center pt-24"
    >
      <h3 className=" text-5xl font-bold text-black">Contact</h3>

      <div className="max-w-xs sm:max-w-sm md:max-w-md">
        <div className="mt-20">
          <p className="text-center text-gray-500">
            Let me know if your interested in my services or collaboration.
          </p>
          <p className="mb-5 text-center text-gray-500">
            I will reply as soon as possible
          </p>
        </div>
        <div>
          <input
            className="my-2 w-full rounded border bg-gray-100 px-3 py-1"
            placeholder="Enter your Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          ></input>
          <input
            className="my-2 w-full rounded border bg-gray-100 px-3 py-1"
            placeholder="Enter your email address"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          ></input>
          <textarea
            placeholder="Write your message here"
            value={message}
            className="my-2 h-36 w-full resize-none rounded border bg-gray-100 p-3"
            onChange={(e) => setMessage(e.currentTarget.value)}
          ></textarea>
          <div className="mt-2 flex w-full items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-9 w-36 items-center justify-center rounded bg-black text-white hover:cursor-pointer"
            >
              <button className="flex items-center" onClick={handleOnSend}>
                <RiSendPlaneFill className="mx-2 h-4 w-4 text-white" />
                Send
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
