'use client';

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { allAbouts } from 'contentlayer/generated';
import { Mdx } from 'components/mdx';
import { motion } from 'framer-motion';

// As there's only one about page, you can directly get the about content
const about = allAbouts[0];

const AboutPage = () => {
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
        <time className="text-xs text-gray-600 ">
          {format(currentDate, 'yyyy-MM-dd HH:mm:ss')}
        </time>
        <h1 className="mt-2 mb-1 text-xl font-semibold">{about.title}</h1>
        <p>{about.description}</p>
      </div>
      <hr />
      <Mdx code={about.body.code} />
    </article>
  );
};

export default AboutPage;
