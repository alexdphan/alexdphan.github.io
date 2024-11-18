// components/AboutPresent.tsx
'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import ScrambleText from './ScrambleEffect';

const greetingVariations = [
  'Glad you\'re here',
  'Nice to see you',
  'Happy you made it',
  'Welcome to the space',
  'Awesome to have you around',
  'Great to see you here',
];

export function AboutPresent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [prevTime, setPrevTime] = useState({
    hours: format(new Date(), 'HH'),
    minutes: format(new Date(), 'mm'),
    seconds: format(new Date(), 'ss')
  });
  const [greeting, setGreeting] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
      setPrevTime({
        hours: format(currentDate, 'HH'),
        minutes: format(currentDate, 'mm'),
        seconds: format(currentDate, 'ss')
      });
    }, 1000);

    // Set initial greeting and remove loading state
    const greetingIndex = Math.floor(Math.random() * greetingVariations.length);
    setGreeting(greetingVariations[greetingIndex]);
    setIsLoading(false);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col items-start mb-4 sm:mb-4">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center h-[40px]">
          <div className="text-4xl font-thin patriot-bold">AP</div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="h-[20px]">
            {!isLoading && (
              <ScrambleText
                text={greeting}
                className="text-sm font-bold leading-relaxed tracking-wider text-foreground"
                delay={1.0}
              />
            )}
          </div>
          <div className="h-[20px] flex items-center">
            {!isLoading && (
              <time className="text-sm text-secondary">
                <ScrambleText
                  text={format(currentDate, 'yyyy-MM-dd')}
                  className="inline"
                  delay={1}
                />{' '}
                <ScrambleText
                  text={format(currentDate, 'HH')}
                  className="inline"
                  delay={1}
                />
                <ScrambleText text=":" className="inline" delay={1} />
                <ScrambleText
                  text={format(currentDate, 'mm')}
                  className="inline"
                  delay={1}
                />
                <ScrambleText text=":" className="inline" delay={1} />
                <ScrambleText
                  text={format(currentDate, 'ss')}
                  className="inline"
                  delay={1}
                />
              </time>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
