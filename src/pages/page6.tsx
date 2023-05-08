import React from 'react';
import 'animate.css/animate.min.css';

function Page6() {
  const experiances = [
    {
      uniName: 'SuperCode GmbH & Co. KG ',
      title: 'Full Stack Development',
      date: '01/2023 - 07/2023',
      contain:
        'HTML5, CSS, SASS, Bootstrap, JavaScript, Git-Github, React JS, Node JS, Express JS, Mongo DB, Trello, VS Code, Figma',
    },
    {
      uniName: 'Baku Business University',
      title: 'Wirtschaftsinformatik (Finans & Kredit)',
      date: '09/2001 - 07/2005',
      contain:
        ' Die Planung-Entwicklung und Umsetzung von IT-Systemen zur Unterstützung von Geschäftsprozessen / Die Analyse und Optimierung von Geschäftsprozessen durch den Einsatz von IT / Die Implementierung und Integration von Softwarelösungen in Unternehmen / Grundlagender Betriebswirtschaftslehre wie beispielsweise  Unternehmensführung, Rechnungswesen, Marketing und Personalwesen / Methoden und Techniken der Datenanalyse und Datenverarbeitung / Projektmanagement und Teamarbeit',
    },
  ];
  return (
    <div>
      <header className="flex justify-start py-16 px-20">
        <h2
          className="text-5xl font-bold tracking-wider font-serif mb-[2vh] animate__animated overflow-hidden"
          style={{ animationDuration: '3s' }}
        >
          Education
        </h2>
      </header>
      <main className="flex flex-col justify-center items-center gap-10 mb-20">
        {experiances.map((experiance, index) => {
          return (
            <div key={index} className=" w-[60vw]">
              <h2 className="border-t-2 pt-8 text-4xl mb-4 font-serif">
                {experiance.uniName}
              </h2>
              <h3 className="text-2xl mb-4 font-serif">{experiance.title}</h3>
              <span>{experiance.date}</span>
              <p className=" mt-4">{experiance.contain}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Page6;
