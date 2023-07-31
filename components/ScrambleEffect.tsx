import React, { useEffect, useRef } from 'react';

class TextScramble {
  el: HTMLElement;
  chars: string;
  queue: {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }[];
  frame: number;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.queue = [];
    this.frame = 0;
  }

  setText(newText: string, delay: number = 0) {
    setTimeout(() => {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      this.update();
    }, delay * 1000); // Convert delay from seconds to milliseconds
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      // Animation completed
    } else {
      this.frame++;
      requestAnimationFrame(this.update.bind(this));
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className,
  delay,
}) => {
  const elementRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      const scrambler = new TextScramble(elementRef.current);
      scrambler.setText(text, delay);
    }
  }, [text, delay]);

  return <p className={className} ref={elementRef}></p>;
};

export default ScrambleText;
