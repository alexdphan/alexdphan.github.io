// components/AboutPresent.tsx
'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export function AboutPresent() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="mb-6 text-sm">
        <h1 className="mb-1 font-semibold">About</h1>
        <time className="text-secondary">
          {format(currentDate, 'yyyy-MM-dd HH:mm:ss')}
        </time>
      </div>
    </div>
  );
}
