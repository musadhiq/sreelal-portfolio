import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { experienceData } from "@/lib/content";

interface ExperienceProps {
  isActive: boolean;
}

export default function Experience({ isActive }: ExperienceProps) {
  if (!isActive) return null;

  return (
    <motion.div
      className="h-full flex items-center"
      initial="hidden"
      animate="show"
      exit="exit"
      variants={staggerContainer}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-heading font-bold text-accent border-b-2 border-accent pb-2 inline-block mb-10"
          variants={fadeIn("down", 0.3)}
        >
          Work Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <motion.div 
              key={index}
              className="bg-card bg-opacity-40 rounded-xl p-6 hover:shadow-xl transition-all"
              variants={fadeIn("up", 0.3 + index * 0.1)}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.2)" }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-secondary">{experience.title}</h3>
                  <h4 className="text-lg md:text-xl font-medium text-accent">{experience.company}</h4>
                </div>
                <div className="md:text-right">
                  <span className="bg-accent bg-opacity-20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {experience.period}
                  </span>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {experience.responsibilities.map((responsibility, i) => (
                  <p key={i} className="flex items-start">
                    <span className="text-accent mr-2">•</span> 
                    {responsibility}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
