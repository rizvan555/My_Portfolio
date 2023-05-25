import { useState } from "react";
import Footer from "./pages/footer";
import Page1 from "./pages/home";
import Page2 from "./pages/about";
import Page3 from "./pages/languages";
import Page4 from "./pages/experiance";
import Page5 from "./pages/blog";
import Page6 from "./pages/education";
import Projects from "./pages/projects";

function App() {
  const [language, setLanguage] = useState(true);

  return (
    <div>
      <Page1 language={language} setLanguage={setLanguage} />
      <Page2 language={language} setLanguage={setLanguage} />
      <Page3 language={language} setLanguage={setLanguage} />
      <Page4 language={language} setLanguage={setLanguage} />
      <Page5 language={language} setLanguage={setLanguage} />
      <Projects />
      <Page6 language={language} setLanguage={setLanguage} />
      <Footer language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default App;
