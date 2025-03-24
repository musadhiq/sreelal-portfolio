import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  
  // Ensure hydration is complete before rendering
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="min-h-screen max-h-screen flex flex-col overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute -bottom-16 -right-16 w-96 h-96 bg-primary opacity-10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-20 -left-20 w-80 h-80 bg-accent opacity-5 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 px-8 pb-8 relative">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}
