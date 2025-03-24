import { useState } from "react";
import Layout from "@/components/layout";
import Home from "@/components/home";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
          <Home isActive={activeTab === "home"} setActiveTab={setActiveTab} />
          <About isActive={activeTab === "about"} />
          <Experience isActive={activeTab === "experience"} />
          <Projects isActive={activeTab === "projects"} />
          <Education isActive={activeTab === "education"} />
          <Skills isActive={activeTab === "skills"} />
          <Contact isActive={activeTab === "contact"} />
        </Layout>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
