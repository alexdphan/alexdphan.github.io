'use client';

import { CalendarIcon } from '@radix-ui/react-icons';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import ScrambleText from 'components/ScrambleEffect';

export function Footer() {
  return (
    <footer
      style={{ marginTop: 'auto' }}
      className="flex justify-end p-8 pt-0 pb-12 "
    >
      <Button
        variant="link"
        className="link-with-animation text-muted-foreground"
      >
        <div style={{ width: '60px', height: '15px' }}>
          <ScrambleText text="Twitter" delay={3.25} />
        </div>
      </Button>
      <Button
        variant="link"
        className="link-with-animation text-muted-foreground"
      >
        <div style={{ width: '50px', height: '15px' }}>
          <ScrambleText text="Github" delay={3.25} />
        </div>
      </Button>
      <Button
        variant="link"
        className="link-with-animation text-muted-foreground"
      >
        <div style={{ width: '70px', height: '15px' }}>
          <ScrambleText text="LinkedIn" delay={3.25} />
        </div>
      </Button>
      <Button
        variant="link"
        className="link-with-animation text-muted-foreground"
      >
        <div style={{ width: '40px', height: '15px' }}>
          <ScrambleText text="Email" delay={3.25} />
        </div>
      </Button>
      {/* <Button variant="link" className="underline hover:underline-offset-4">
        <div style={{width: '100px', height: '20px'}}>
          <ScrambleText text="alexphan.eth" delay={1.5} />
        </div>
      </Button> */}
    </footer>
  );
}
