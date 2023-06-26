/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import { RiSendPlaneFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import LoadingSpinner from "./elements/LoadingSpinner";
import { MdOutlineClose } from "react-icons/md";

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
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        fullName,
        email,
        message,
      }),
    });
    setNotifcation(true);
    setSending(false);
    reset();
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
          <AnimatePresence>
            {notification && (
              <motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 pt-8 backdrop-blur-sm">
                <motion.div
                  key="modal"
                  initial={{ opacity: 0, y: 50, scale: 0.3 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.2 },
                  }}
                  className="mx-10 w-full rounded-md bg-white text-center  shadow-menu sm:mx-0 sm:w-64"
                >
                  <div className="flex w-full items-end justify-end ">
                    <MdOutlineClose
                      onClick={() => setNotifcation((prev) => !prev)}
                      className="mr-3 mt-3 h-6 w-6 hover:cursor-pointer hover:text-gray-500"
                    />{" "}
                  </div>

                  <p className="px-5 pb-7 pt-1 font-medium text-gray-800">
                    Your email has been sent
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
