import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  isActive: boolean;
}

export default function Contact({ isActive }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  if (!isActive) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="h-full flex items-center justify-center"
      initial="hidden"
      animate="show"
      exit="exit"
      variants={staggerContainer}
    >
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <motion.div variants={fadeIn("right", 0.3)}>
          <h2 className="text-4xl font-heading font-bold text-accent border-b-2 border-accent pb-2 inline-block mb-8">
            Get In Touch
          </h2>
          
          <div className="space-y-6">
            <p className="text-base md:text-lg">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you're
              looking for a Flutter developer for your project.
            </p>
            
            <div className="space-y-4 mt-8">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Location</h3>
                  <p className="text-muted-foreground">Nilambur, Malappuram, Kerala</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-muted-foreground">+91 9048828830</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-muted-foreground">sreelalmk74@gmail.com</p>
                </div>
              </motion.div>
            </div>
            
            <div className="pt-8">
              <h3 className="text-xl font-medium mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-foreground transition-colors"
                  whileHover={{ y: -5, scale: 1.1, color: "rgb(16, 185, 129)" }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-foreground transition-colors"
                  whileHover={{ y: -5, scale: 1.1, color: "rgb(16, 185, 129)" }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-foreground transition-colors"
                  whileHover={{ y: -5, scale: 1.1, color: "rgb(16, 185, 129)" }}
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-foreground transition-colors"
                  whileHover={{ y: -5, scale: 1.1, color: "rgb(16, 185, 129)" }}
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-card bg-opacity-40 rounded-xl p-6 md:p-8"
          variants={fadeIn("left", 0.3)}
        >
          <h3 className="text-2xl font-heading font-medium text-accent mb-6">Send Me a Message</h3>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-background border border-muted focus:border-accent"
                placeholder="Your name" 
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-background border border-muted focus:border-accent"
                placeholder="your.email@example.com" 
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4} 
                className="bg-background border border-muted focus:border-accent"
                placeholder="Your message here..." 
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
