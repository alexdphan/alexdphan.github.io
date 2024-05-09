'use client';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';
import { Button } from 'components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from 'components/ui/hover-card';
import ScrambleText from 'components/ScrambleEffect';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer
      style={{ marginTop: 'auto' }}
      className="flex justify-center py-8 pt-0 "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a href="https://twitter.com/alexdphan">
          <Button
            variant="link"
            className="text-muted-foreground link-with-animation"
          >
            <span className="text-secondary">Twitter</span>
          </Button>
        </a>
        <a href="https://github.com/alexdphan">
          <Button
            variant="link"
            className="text-muted-foreground link-with-animation"
          >
            <span className="text-secondary">Github</span>
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/alexanderdphan/">
          <Button
            variant="link"
            className="text-muted-foreground link-with-animation"
          >
            <span className="text-secondary">LinkedIn</span>
          </Button>
        </a>
        <a href="mailto:alexphan0515@gmail.com">
          <Button
            variant="link"
            className="text-muted-foreground link-with-animation"
          >
            <span className="text-secondary">Email</span>
          </Button>
        </a>
      </motion.div>
    </footer>
  );
}
