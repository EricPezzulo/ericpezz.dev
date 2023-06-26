import { motion, AnimatePresence } from "framer-motion";

interface VisableType {
  visable: boolean;
}
const Notification: React.FC<VisableType> = ({ visable }) => {
  if (!visable) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-end justify-center pb-44 text-white sm:pb-28"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-md bg-black px-3 py-2">
          <p className="font-medium text-white">Your email has been set</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Notification;
