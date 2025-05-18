import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Certifications from './components/sections/Certifications'
import Links from './components/sections/Links'
import Contact from './components/sections/Contact'
import AllProjects from './components/pages/AllProjects'
import AllSkills from './components/pages/AllSkills'
import AllCertifications from './components/pages/AllCertifications'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('main');

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      if (currentPage === 'main') {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check for active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage]);

  const goBackToMain = () => {
  setCurrentPage('main');
};

  // Smooth scroll to section when nav link is clicked
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'allProjects':
        return <AllProjects onBack={goBackToMain} />;
      case 'allSkills':
        return <AllSkills onBack={goBackToMain} />;
      case 'allCertifications':
        return <AllCertifications onBack={goBackToMain} />;
      default:
        return (
          <>
            <Sidebar activeSection={activeSection} scrollToSection={scrollToSection} />
            <main className="content">
              <Hero />
              <About />
              <Projects onShowAll={() => setCurrentPage('allProjects')} />
              <Skills onShowAll={() => setCurrentPage('allSkills')} />
              <Certifications onShowAll={() => setCurrentPage('allCertifications')} />
              <Links />
              <Contact />
            </main>
          </>
        );
    }
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
}

export default App