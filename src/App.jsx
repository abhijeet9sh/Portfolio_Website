import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import NotFound from "./components/pages/NotFound";
import Terminal from "./components/ui/Terminal";
import KonamiEasterEgg from "./components/ui/KonamiEasterEgg";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <p className="text-text/60 font-mono">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="bg-background min-h-screen text-text selection:bg-primary/20 selection:text-primary">
        <Terminal />
        <KonamiEasterEgg />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main className="flex flex-col gap-10">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Certifications />
                <Contact />
              </main>
              <Footer />
            </>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
