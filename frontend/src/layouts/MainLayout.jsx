import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
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
                <div className="flex h-screen">
                <Sidebar />
                <div className="flex flex-col flex-1">
                    <Navbar />
                    <main className="p-4 flex-1 overflow-auto">
                    <Outlet />
                    </main>
                </div>    
                </div>
        </motion.div>
    </AnimatePresence>
  );
}
