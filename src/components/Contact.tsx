/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// interface inputProps {
//   placeholder?: string;
//   refer?: RefObject<HTMLInputElement>;
// }

// export const FormInput: React.FC<inputProps> = ({ placeholder, refer }) => {
//   return (
//     <div>
//       <input
//         ref={refer}
//         type="text"
//         placeholder={placeholder}
//         className="my-2 w-full rounded border bg-gray-100 px-3 py-1"
//       />
//     </div>
//   );
// };

export default function Contact() {
  const schema = yup.object().shape({
    fullName: yup.string().required("Name is a required field"),
    email: yup.string().required("Email is a required field"),
    message: yup.string().required("This is a required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  interface formData {
    fullName: string;
    email: string;
    message: string;
  }
  const onSubmit = async (data: formData) => {
    const { fullName, email, message } = data;
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        fullName,
        email,
        message,
      }),
    });
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center"
          >
            <input
              className="my-2 w-full rounded border bg-gray-100 px-3 py-1"
              placeholder="Enter your full name"
              {...register("fullName")}
            />
            <p className="text-sm text-gray-400">{errors.fullName?.message}</p>
            <input
              className="my-2 w-full rounded border bg-gray-100 px-3 py-1"
              placeholder="Enter your email"
              {...register("email")}
            />
            <p className="text-sm text-gray-400">{errors.email?.message}</p>
            <textarea
              placeholder="Write your message here"
              className="my-2 h-36 w-full resize-none rounded border bg-gray-100 p-3"
              {...register("message")}
            ></textarea>
            <p className="text-sm text-gray-400">{errors.message?.message}</p>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-2 flex h-9 w-36 items-center justify-center rounded bg-black text-white hover:cursor-pointer"
            >
              <button type="submit" className="flex items-center">
                <RiSendPlaneFill className="mx-2 h-4 w-4 text-white" />
                Send
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
}
