import React from 'react';
import 'animate.css/animate.min.css';

function Page6() {
  const experiances = [
    {
      title: 'User Experience Designer',
      date: 'March 2020 - Present',
      contain:
        'Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.',
    },
    {
      title: 'UI Designer',
      date: 'March 2020 - Present',
      contain:
        'Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.',
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
        {experiances.map((experiance) => {
          return (
            <div className=" w-[60vw]">
              <h3 className="border-t-2 pt-8 text-3xl mb-4 font-serif">
                {experiance.title}
              </h3>
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
