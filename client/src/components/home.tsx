import { motion } from "framer-motion";
import { Code, Smartphone, Server } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

interface HomeProps {
  isActive: boolean;
  setActiveTab: (tab: string) => void;
}

export default function Home({ isActive, setActiveTab }: HomeProps) {
  if (!isActive) return null;

  return (
    <motion.div
      className="h-full flex items-center"
      initial="hidden"
      animate="show"
      exit="exit"
      variants={staggerContainer}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full">
        <motion.div 
          className="flex flex-col justify-center space-y-8"
          variants={fadeIn("up", 0.3)}
        >
          <h2 className="text-4xl font-heading font-bold text-foreground">
            <span className="typewriter">Hello, I'm</span>
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-accent">
            Sreelal MK
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light">
            <span className="text-secondary font-mono">Flutter Developer</span> creating
            <span className="text-accent font-medium"> cross-platform</span> mobile experiences
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
            With 2 years of experience building responsive, feature-rich applications
            that deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <motion.button
              className="bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-md font-medium text-white hover:shadow-lg transition-all"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
              onClick={() => setActiveTab("projects")}
            >
              View Projects
            </motion.button>
            <motion.button
              className="border border-accent text-accent px-8 py-3 rounded-md font-medium hover:bg-accent hover:bg-opacity-10 transition-all"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)" }}
              onClick={() => setActiveTab("contact")}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center items-center"
          variants={fadeIn("left", 0.5)}
        >
          <div className="relative">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-secondary bg-opacity-10 p-2 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-primary bg-opacity-20 p-2">
                <div className="w-full h-full rounded-full bg-accent bg-opacity-5 flex items-center justify-center">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-secondary animate-float">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white">SM</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-5 -right-5 bg-accent text-foreground p-2 rounded-lg shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Code className="w-6 h-6" />
            </motion.div>
            <motion.div 
              className="absolute bottom-5 -left-10 bg-white text-primary p-2 rounded-lg shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <Smartphone className="w-6 h-6" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-8 right-10 bg-secondary text-foreground p-2 rounded-lg shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Server className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
