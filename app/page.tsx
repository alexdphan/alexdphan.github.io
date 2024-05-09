'use client';

import { Body } from '../components/HomeBody';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import ScrambleText from 'components/ScrambleEffect';

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-72">
      <Body />
    </div>
  );
}
