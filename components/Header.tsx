'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from 'components/ui/button';
import ScrambleText from 'components/ScrambleEffect';

// added a fixed width and height to fill in space before text loads in from animation
export function Header() {
  return (
    <header className="flex justify-center py-8 pt-6 pb-0">
      {/* <Link href="/" passHref>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="link" className="link-with-animation">
            Home
          </Button>
        </motion.div>
      </Link> */}
      <Link href="/about" passHref>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="link" className="link-with-animation">
            Home
          </Button>
        </motion.div>
      </Link>
      <Link href="/projects" passHref>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="link" className="link-with-animation">
            {/* <div style={{ width: '70px', height: '15px' }}> */}
            {/* <ScrambleText text="Projects" delay={3.25} /> */}
            Projects
            {/* </div> */}
          </Button>
        </motion.div>
      </Link>
    </header>
  );
}
