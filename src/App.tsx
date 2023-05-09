import React, { useState } from 'react';
import Footer from './pages/footer';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/page6';

function App() {
  const [language, setLanguage] = useState(true);

  return (
    <div>
      <Page1 language={language} setLanguage={setLanguage} />
      <Page2 language={language} setLanguage={setLanguage} />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Footer />
    </div>
  );
}

export default App;
