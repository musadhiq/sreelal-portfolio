import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="py-6 px-8 flex justify-between items-center z-10">
      <motion.div 
        className="flex items-center space-x-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-background font-bold">
          SM
        </div>
        <h1 className="font-heading font-bold text-xl">Sreelal <span className="text-accent">MK</span></h1>
      </motion.div>
      
      {/* Desktop Navigation */}
      <motion.nav
        className="hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ul className="flex space-x-8 font-medium">
          {navItems.map((item, index) => (
            <li key={item.id}>
              <button 
                className={cn(
                  "relative hover:text-accent transition-colors",
                  activeTab === item.id ? "text-accent" : ""
                )}
                onClick={() => setActiveTab(item.id)}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: activeTab === item.id ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>
      
      {/* Mobile Navigation Toggle */}
      <div className="md:hidden">
        <Button 
          variant="ghost" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
        >
          <Menu />
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="absolute top-20 left-0 right-0 bg-card shadow-lg z-20 p-4 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button 
                  className={cn(
                    "block w-full text-left px-4 py-2 rounded-md transition-colors",
                    activeTab === item.id ? "bg-primary/20 text-accent" : "hover:bg-primary/10"
                  )}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
