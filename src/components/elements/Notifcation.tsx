import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

interface NotifcationProp {
  notification: boolean;
  setNotification: React.Dispatch<React.SetStateAction<boolean>>;
}

const Notifcation: React.FC<NotifcationProp> = ({
  notification,
  setNotification,
}) => {
  return (
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
                onClick={() => setNotification((prev) => !prev)}
                className="mr-3 mt-3 h-6 w-6 hover:cursor-pointer hover:text-gray-500"
              />
            </div>

            <p className="px-5 pb-7 pt-1 font-medium text-gray-800">
              Your email has been sent
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Notifcation;
