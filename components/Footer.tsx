import { CalendarIcon } from '@radix-ui/react-icons';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

export function Footer() {
  return (
    <footer className="flex justify-end max-w-xl p-8 py-8 mx-auto space-x-4">
      <Button
        variant="link"
        className="underline hover:underline-offset-4 text-muted-foreground"
      >
        Twitter
      </Button>
      <Button
        variant="link"
        className="underline hover:underline-offset-4 text-muted-foreground"
      >
        Github
      </Button>
      <Button
        variant="link"
        className="underline hover:underline-offset-4 text-muted-foreground"
      >
        LinkedIn
      </Button>
      <Button
        variant="link"
        className="underline hover:underline-offset-4 text-muted-foreground"
      >
        Email
      </Button>
      {/* <Button variant="link" className="underline hover:underline-offset-4">
        alexphan.eth
      </Button> */}
    </footer>
  );
}
