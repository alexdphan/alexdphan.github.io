'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ScrambleText from 'components/ScrambleEffect';

// function Icon() {
//   return (
//     <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M10.43 0.92268C11.1426 0.398115 12.1177 0.407491 12.82 0.945665L19.9928 6.44198C21.0266 7.23419 21.0266 8.78771 19.9928 9.57992L17.2573 11.6761L20.0379 13.9037C21.0493 14.7139 21.022 16.2574 19.9826 17.0315L12.62 22.5153C11.8634 23.0788 10.8134 23.0332 10.1089 22.4063L4.34789 17.2802L3.54224 16.5903C-0.0530112 13.5114 0.390183 7.84094 4.41274 5.35212L10.43 0.92268ZM16.1955 10.8254L12.8515 8.14659C12.1375 7.57457 11.1235 7.56365 10.3972 8.12017L7.92298 10.0161C6.88913 10.8084 6.88913 12.3619 7.92298 13.1541L10.4154 15.064C11.129 15.6108 12.1224 15.6108 12.836 15.064L16.1773 12.5036L19.2086 14.932C19.5457 15.2021 19.5366 15.7166 19.1901 15.9747L11.8275 21.4585C11.5753 21.6463 11.2253 21.6311 10.9905 21.4221L5.2248 16.2918L4.40495 15.5895C1.48255 13.0869 1.84941 8.47338 5.13088 6.46078L5.15471 6.44617L11.2165 1.98398C11.454 1.80913 11.779 1.81225 12.0132 1.99164L19.1859 7.48796C19.5305 7.75203 19.5305 8.26987 19.1859 8.53394L16.1955 10.8254ZM15.1155 11.653L12.0291 14.018C11.7913 14.2003 11.4601 14.2003 11.2223 14.018L8.72984 12.1081C8.38523 11.844 8.38523 11.3262 8.72984 11.0621L11.2041 9.16615C11.4462 8.98065 11.7842 8.98429 12.0222 9.17496L15.1155 11.653Z"
//         fill="#7C3AED"
//         stroke="#7C3AED"
//         strokeWidth="0.5"
//       ></path>
//     </svg>
//   )
// }

// function Logo() {
//   return (
//     <Link href="/" className="inline-flex items-center justify-center">
//       <span className="mr-2">
//         <Icon />
//       </span>
//       <span className="font-bold">Contentlayer</span>
//     </Link>
//   )
// }

// export function Header() {
//   return (
//     <header className="flex justify-center p-8">
//       {/* <Logo /> */}
//     Home About Contact
//     </header>
//   )
// }

// added a fixed width and height to fill in space before text loads in from animation
export function Header() {
  return (
    <header className="flex justify-end p-8 pt-6 pb-0 ">
      <Button variant="link" className="link-with-animation">
        <div style={{ width: '40px', height: '15px' }}>
          <ScrambleText text="Home" delay={3.25} />
        </div>
      </Button>
      <Button variant="link" className="link-with-animation">
        <div style={{ width: '50px', height: '15px' }}>
          <ScrambleText text="About" delay={3.25} />
        </div>
      </Button>
      <Button variant="link" className="link-with-animation">
        <div style={{ width: '30px', height: '15px' }}>
          <ScrambleText text="Now" delay={3.25} />
        </div>
      </Button>
    </header>
  );
}
