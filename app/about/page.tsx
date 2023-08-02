'use client';

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const About = () => {
  //   // You can modify this data as needed for your About page
  //   const aboutData = {
  //     title: 'About',
  //     body: {
  //       code: 'hi',
  //     },
  //   };

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
    <article className="max-w-xl py-8 mx-auto">
      <div className="mb-8 text-start">
        <time className="mb-1 text-xs text-gray-600">
          {format(currentDate, 'yyyy-MM-dd HH:mm:ss')}
        </time>
        <h1>About</h1>
      </div>
      {/* <Mdx code={aboutData.body.code} /> */}
      Welcome! Thanks for visiting. My name is Alex Phan.
      <br />
      I'm currently finishing my undergrad at George Mason Univeristy. Outlier
      Fellow at Outlier DAO Practical Deep Learning… Past: Did some stuff at
      Celestia and Alchemy Index Coop, Odyssey DAO
    </article>
  );
};

export default About;
