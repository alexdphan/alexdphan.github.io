import React from 'react';
import ScrambleText from '../components/ScrambleEffect';
import localFont from 'next/font/local';

const patriot = localFont({
  src: [
    {
      path: 'fonts/Patriot/Fonts/Patriot-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/Patriot/Fonts/Patriot-Regular.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: 'fonts/Patriot/Fonts/Patriot-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: 'fonts/Patriot/Fonts/Patriot-UltraBold.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});

export function Body() {
  return (
    <div className="flex flex-col justify-start max-w-xl py-2 mx-auto">
      <ScrambleText
        text="AP"
        className="flex justify-start mb-2 text-3xl font-bold text-center"
      />
      <ScrambleText
        text="Hey, glad you're here"
        className="mb-4 text-base font-medium leading-relaxed tracking-wider text-foreground"
      />
      <ScrambleText
        text="I get instinctively drawn to untangling complexities in areas that profoundly touch my core. I also tend to approach my fears with a strong sense of curiosity and a desire to understand."
        className="mb-8 text-sm font-normal leading-relaxed"
      />
    </div>
  );
}
