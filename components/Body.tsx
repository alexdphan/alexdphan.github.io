"use client";

import React from 'react';
import ScrambleText from '../components/ScrambleEffect';
import '../styles/globals.css';

export function Body() {
  return (
    <div className="flex flex-col justify-start max-w-xl py-2 mx-auto">
      <ScrambleText
        text="AP"
        className="flex justify-start mb-2 text-4xl font-bold text-center patriot-bold"
      />
      <ScrambleText
        text="Hey, glad you're here"
        className="mb-4 text-base font-bold leading-relaxed tracking-wider text-foreground "
        delay={1.0}
      />
      {/* // Adding a fixed height for now */}
      <div style={{ height: 130 }}>
        <ScrambleText
          text="I get instinctively drawn to untangling complexities in areas that profoundly touch my core. I also tend to approach my fears with a strong sense of curiosity and a desire to understand."
          className="mb-8 text-sm font-normal leading-relaxed"
          delay={3.0}
        />
      </div>
    </div>
  );
}
