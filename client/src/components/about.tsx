import { motion } from "framer-motion";
import { CodeIcon, UsersIcon, ZapIcon, BrainIcon } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

interface AboutProps {
  isActive: boolean;
}

export default function About({ isActive }: AboutProps) {
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
          className="flex flex-col justify-center space-y-6"
          variants={fadeIn("up", 0.3)}
        >
          <h2 className="text-4xl font-heading font-bold text-accent border-b-2 border-accent pb-2 inline-block">
            About Me
          </h2>
          <div className="space-y-4 text-base md:text-lg">
            <p>
              Dedicated Flutter developer with 2 years of experience in designing, developing, and maintaining 
              cross-platform mobile applications.
            </p>
            <p>
              Skilled in implementing UI/UX designs, integrating APIs, and optimizing performance.
              Strong problem-solving abilities and a passion for staying updated with the latest technologies 
              in mobile development.
            </p>
            <p>
              I specialize in creating seamless user experiences through clean, efficient code and thoughtful design.
              My goal is to build applications that not only meet client requirements but exceed user expectations.
            </p>
            <p>
              Based in <span className="text-accent">Nilambur, Malappuram</span>, I'm always open to new opportunities 
              and collaborations that challenge me to grow as a developer.
            </p>
          </div>
          <div className="pt-6">
            <h3 className="text-2xl font-heading font-medium text-secondary mb-4">My Approach</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                className="bg-card bg-opacity-50 p-4 rounded-lg transition-all"
                whileHover={{ y: -5, backgroundColor: "rgba(30, 41, 59, 0.7)" }}
              >
                <UsersIcon className="h-6 w-6 text-accent mb-2" />
                <h4 className="text-accent font-medium mb-2">User-Centric Design</h4>
                <p className="text-muted-foreground">Building applications that prioritize user experience and intuitive interfaces.</p>
              </motion.div>
              <motion.div 
                className="bg-card bg-opacity-50 p-4 rounded-lg transition-all"
                whileHover={{ y: -5, backgroundColor: "rgba(30, 41, 59, 0.7)" }}
              >
                <CodeIcon className="h-6 w-6 text-accent mb-2" />
                <h4 className="text-accent font-medium mb-2">Clean Architecture</h4>
                <p className="text-muted-foreground">Implementing maintainable code structure that scales with project complexity.</p>
              </motion.div>
              <motion.div 
                className="bg-card bg-opacity-50 p-4 rounded-lg transition-all"
                whileHover={{ y: -5, backgroundColor: "rgba(30, 41, 59, 0.7)" }}
              >
                <ZapIcon className="h-6 w-6 text-accent mb-2" />
                <h4 className="text-accent font-medium mb-2">Performance Optimization</h4>
                <p className="text-muted-foreground">Ensuring applications run smoothly across various devices and conditions.</p>
              </motion.div>
              <motion.div 
                className="bg-card bg-opacity-50 p-4 rounded-lg transition-all"
                whileHover={{ y: -5, backgroundColor: "rgba(30, 41, 59, 0.7)" }}
              >
                <BrainIcon className="h-6 w-6 text-accent mb-2" />
                <h4 className="text-accent font-medium mb-2">Continuous Learning</h4>
                <p className="text-muted-foreground">Staying current with emerging technologies and development practices.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center items-center"
          variants={fadeIn("left", 0.5)}
        >
          <div className="relative w-full h-full max-w-md">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-64 h-64 bg-primary bg-opacity-20 rounded-full" 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute w-80 h-80 bg-accent bg-opacity-10 rounded-full" 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div 
                className="absolute w-72 h-72 border-4 border-secondary border-opacity-20 rounded-full" 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            {/* Skills Cloud */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <motion.div 
                  className="absolute top-1/4 left-1/4 bg-white text-primary p-3 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <i className="w-6 h-6 fab fa-flutter"></i>
                </motion.div>
                <motion.div 
                  className="absolute top-1/2 right-1/3 bg-white text-primary p-3 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <i className="w-6 h-6 fab fa-android"></i>
                </motion.div>
                <motion.div 
                  className="absolute bottom-1/3 left-1/3 bg-white text-primary p-3 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <i className="w-6 h-6 fab fa-apple"></i>
                </motion.div>
                <motion.div 
                  className="absolute bottom-1/4 right-1/4 bg-white text-primary p-3 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
                >
                  <i className="w-6 h-6 fas fa-database"></i>
                </motion.div>
                <motion.div 
                  className="absolute top-1/3 right-1/4 bg-white text-primary p-3 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                >
                  <i className="w-6 h-6 fas fa-fire"></i>
                </motion.div>
                <motion.div 
                  className="absolute top-2/3 left-1/4 bg-white text-primary p-3 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.7 }}
                >
                  <i className="w-6 h-6 fas fa-code"></i>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
