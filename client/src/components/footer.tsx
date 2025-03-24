import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="py-4 px-8 text-center text-sm text-muted-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <p>&copy; {new Date().getFullYear()} Sreelal MK. All rights reserved.</p>
    </motion.footer>
  );
}
