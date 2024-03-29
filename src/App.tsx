import { useState } from 'react';
import Footer from './pages/footer';
import Projects from './pages/projects';
import Languages from './pages/languages';
import Experiance from './pages/experiance';
import Blog from './pages/blog';
import Education from './pages/education';
import Home from './pages/home';
import About from './pages/about';

function App() {
  const [language, setLanguage] = useState(true);
  const [hamburger, setHamburger] = useState(false);

  return (
    <div className='typewrite'>
      <Home
        language={language}
        setLanguage={setLanguage}
        hamburger={hamburger}
        setHamburger={setHamburger}
      />
      <About language={language} setLanguage={setLanguage} />
      <Languages language={language} setLanguage={setLanguage} />
      <Experiance language={language} setLanguage={setLanguage} />
      <Blog language={language} setLanguage={setLanguage} />
      <Projects />
      <Education language={language} setLanguage={setLanguage} />
      <Footer language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default App;
