import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import Blog from '@/components/sections/Blog';
import GitHubStats from '@/components/sections/GitHubStats';
import Certifications from '@/components/sections/Certifications';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CaseStudies />
      <Testimonials />
      <Blog />
      <GitHubStats />
      <Certifications />
      <Experience />
      <Contact />
    </>
  );
}
