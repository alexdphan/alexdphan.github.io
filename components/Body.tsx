'use client';

import React, { useState, useEffect } from 'react';
import ScrambleText from '../components/ScrambleEffect';
import '../styles/globals.css';

const greetingVariations = [
  "Hey, glad you're here",
  'Hi there, nice to see you!',
  'Greetings, happy you made it!',
  'Hey, welcome to the space!',
  'Hey there, awesome to have you around!',
  "What's up? Great to see you here!",
];

const textVariations = [
  "I'm naturally drawn to solving complexities in areas deeply important to me. Similarly, when confronting my fears, I do so with keen curiosity and an eagerness to understand.",
  "Complex problems in areas that deeply resonate with me instinctively capture my attention. Facing my fears, I'm propelled by a strong curiosity and a yearning to comprehend them.",
  'I find myself irresistibly attracted to dissecting complex issues in fields that touch my heart. Also, in dealing with fears, I am driven by an intense curiosity and a quest for understanding.',
  "Unraveling complex challenges in areas that deeply affect me is something I'm naturally inclined towards. When it comes to fears, I approach them with robust curiosity and a strong desire to understand their nature.",
  'I am instinctively pulled towards deciphering complexities in meaningful areas of my life. Moreover, I tackle my fears with a profound sense of curiosity and a strong ambition to understand them better.',
];

export function Body() {
  const [selectedText, setSelectedText] = useState('');
  const [greeting, setGreeting] = useState('');

  // Function to update texts
  const updateTexts = () => {
    const textIndex = Math.floor(Math.random() * textVariations.length);
    setSelectedText(textVariations[textIndex]);

    const greetingIndex = Math.floor(Math.random() * greetingVariations.length);
    setGreeting(greetingVariations[greetingIndex]);
  };

   useEffect(() => {
     updateTexts();
   }, []);
  
  return (
    <div className="flex flex-col justify-start max-w-xl py-2 mx-auto">
      <ScrambleText
        text="AP"
        className="flex justify-start mb-2 text-4xl font-bold text-center patriot-bold"
      />
      <ScrambleText
        text={greeting}
        className="mb-4 text-base font-bold leading-relaxed tracking-wider text-foreground "
        delay={1.0}
      />
      <div style={{ height: 130 }}>
        <ScrambleText
          text={selectedText}
          className="mb-8 text-sm font-normal leading-relaxed"
          delay={3.0}
        />
      </div>
    </div>
  );
}
