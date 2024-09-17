"use client"; // Marks this as a Client Component to use hooks

import { useState, useEffect } from 'react';
import TitleCTA from '@/components/elements/TitleCTA';
import Head from 'next/head';

const roles = [
  {
    text: 'Software Engineer',
    icon: 'data_object', // Icon for Software Engineer
    color: 'text-blue-600',
  },
  {
    text: 'Full-Stack Developer',
    icon: 'draw', // Icon for Full-Stack Developer
    color: 'text-green-600',
  },
];

const Title = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0); // Index of current role
  const [displayedText, setDisplayedText] = useState(''); // Current text being typed
  const [isDeleting, setIsDeleting] = useState(false); // Whether we're in typing or deleting mode
  const [loopNum, setLoopNum] = useState(0); // Number of loops completed
  const typingSpeed = 150; // Speed of typing in milliseconds
  const deletingSpeed = 75; // Speed of deleting in milliseconds
  const pauseTime = 1000; // Pause before starting to delete or switch

  const { text: currentText, icon, color } = roles[currentRoleIndex]; // Get the current role's text and icon

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = currentText;

      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setDisplayedText((prev) => currentFullText.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentFullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, currentText]);

  return (
    <>
      <Head>
        <title>Sai Yada - Software Engineer & Full-Stack Developer</title>
        <meta name="description" content="Sai Yada's portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'p-24 flex flex-col justify-center items-center h-screen gap-4'}>
        <div className={'font-semibold text-2xl opacity-60'}>Hello, I am</div>
        <div className={'text-7xl font-bold uppercase text-center max-w-4xl'}>
          Sai Yada
        </div>
        <div
          className={
            'text-3xl font-medium text-center flex flex-row items-center gap-4 opacity-70'
          }
        >
          <span className={`material-symbols-rounded scale-150 mr-3 ${color}`}>
            {icon}
          </span>
          <span>{displayedText}</span>
        </div>
        <div className={'flex flex-row gap-3 items-center'}>
          <TitleCTA
            title={"Let's Connect!"}
            link={'https://www.linkedin.com/in/sai-yada27/'} 
            icon={'link'} 
            styles={'bg-blue-600 text-white'}
          />
          <TitleCTA
            title={'Resume'}
            link={
              'https://drive.google.com/uc?export=download&id=1raJhuhAZep1xRC5w7kaAkYEErPambOfo'
            }
            icon={'download'}
            styles={'bg-blue-700 text-white'}
          />
        </div>
      </main>
    </>
  );
};

export default Title;
