import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function MainLayout() {
  return (
    <AnimatePresence mode="wait">
        <motion.div
            key="loading-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
            <div className="bg-test w-full bg-red-50 py-8">
                <Outlet />
            </div>
        </motion.div>   
    </AnimatePresence>
  );
}
