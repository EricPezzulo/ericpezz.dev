/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import LoadingSpinner from "./elements/LoadingSpinner";
import Notification from "./elements/Notification";

interface formData {
  fullName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [sending, setSending] = useState<boolean>(false);
  const [notification, setNotifcation] = useState<boolean>(false);
  const schema = yup.object().shape({
    fullName: yup.string().required("Name is a required field"),
    email: yup.string().required("Email is a required field"),
    message: yup.string().required("This is a required field"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: formData) => {
    const { fullName, email, message } = data;
    setSending(true);
    // setTimeout(() => setSending(false), 2000);
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        fullName,
        email,
        message,
      }),
    });
    setNotifcation(true);
    reset();
    setSending(false);
    setTimeout(() => setNotifcation(false), 3000);
  };
  return (
    <div
      id="contact-section"
      className="flex h-[calc(100vh-6rem)] w-full flex-col items-center pt-24 sm:h-full sm:py-20 "
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
                {!sending ? (
                  <>
                    <RiSendPlaneFill className="mx-2 h-4 w-4 text-white" />
                    <p>Send</p>{" "}
                  </>
                ) : (
                  <>
                    <LoadingSpinner />
                    <p>Sending</p>
                  </>
                )}
              </button>
            </motion.div>
          </form>
          <Notification visable={notification} />
        </div>
      </div>
    </div>
  );
}
