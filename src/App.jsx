import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologySection from './components/TechnologySection';
import { ProjectsSection, AboutSection } from './components/InfoSections';
import Footer from './components/Footer';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch('/data/technologies.json');
        if (!response.ok) throw new Error('Failed to load technologies');
        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        toast.error('Could not load technology data.');
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const addToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (technology) => {
    setStack((current) => current.filter((item) => item.id !== technology.id));
    toast.info(`${technology.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (stack.length === 0) {
      toast.info('Your stack is already empty.');
      return;
    }
    setStack([]);
    toast.info('All technologies removed from your stack.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {loading ? (
        <section className="bg-white py-24">
          <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#f4d7eb] border-t-[#dd1b83]" />
            <p className="mt-4 text-sm font-semibold text-[#7d8597]">Loading technology library...</p>
          </div>
        </section>
      ) : (
        <TechnologySection
          technologies={technologies}
          stack={stack}
          onAdd={addToStack}
          onRemove={removeFromStack}
          onRemoveAll={removeAll}
        />
      )}

      <ProjectsSection />
      <AboutSection />
      <Footer />

      <ToastContainer position="top-right" autoClose={1800} hideProgressBar theme="light" />
    </div>
  );
}
