import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Receipt, ShoppingCart, Tv } from "lucide-react";
import { projectsData } from "@/lib/content";

interface ProjectsProps {
  isActive: boolean;
}

export default function Projects({ isActive }: ProjectsProps) {
  if (!isActive) return null;

  const projectIcons = [
    <Receipt className="h-12 w-12" />,
    <ShoppingCart className="h-12 w-12" />,
    <Tv className="h-12 w-12" />
  ];

  return (
    <motion.div
      className="h-full py-6"
      initial="hidden"
      animate="show"
      exit="exit"
      variants={staggerContainer}
    >
      <motion.h2 
        className="text-4xl font-heading font-bold text-accent border-b-2 border-accent pb-2 inline-block mb-10"
        variants={fadeIn("down", 0.3)}
      >
        Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            className="bg-card bg-opacity-50 rounded-xl overflow-hidden hover:shadow-2xl transition-all"
            variants={fadeIn("up", 0.3 + index * 0.1)}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className={`h-40 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                {projectIcons[index]}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-card to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-bold text-accent mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-primary/30 text-secondary text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
