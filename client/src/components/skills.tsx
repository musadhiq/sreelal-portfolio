import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { skillsData } from "@/lib/content";

interface SkillsProps {
  isActive: boolean;
}

export default function Skills({ isActive }: SkillsProps) {
  if (!isActive) return null;

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
        Skills
      </motion.h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index}
            className="bg-card bg-opacity-40 rounded-lg p-4 flex flex-col items-center justify-center text-center relative overflow-hidden transition-all"
            variants={fadeIn("up", 0.3 + index * 0.05)}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-primary/10"
              whileHover={{
                x: ["0%", "100%", "0%"],
                transition: { duration: 1.5, ease: "easeInOut" }
              }}
            />
            <div className="text-accent text-3xl mb-2">
              <i className={skill.icon}></i>
            </div>
            <h3 className="font-medium">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
