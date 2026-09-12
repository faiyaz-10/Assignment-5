import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';

const links = [
  ['Home', '#home'],
  ['Technologies', '#technologies'],
  ['Projects', '#projects'],
  ['About', '#about'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto grid h-[68px] max-w-[1060px] grid-cols-[auto_1fr_auto] items-center px-5 sm:px-7">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="mr-3 grid h-8 w-8 place-items-center text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>

        <div className="justify-self-start lg:justify-self-start">
          <Logo />
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[29px] lg:flex" aria-label="Main navigation">
          {links.map(([label, href], index) => (
            <a
              key={href}
              href={href}
              className={`text-[14px] font-medium transition ${index === 0 ? 'text-[#ea1780]' : 'text-[#596179] hover:text-ink'}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 justify-self-end">
          <a href="#contact" className="px-1 text-[12px] font-medium text-[#4f5870] sm:px-2">Sign In</a>
          <a href="#contact" className="rounded-full bg-[#db1681] px-[17px] py-[9px] text-[11px] font-bold text-white shadow-none hover:bg-[#c91476]">Sign Up</a>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="mx-auto flex max-w-[1060px] flex-col px-5 py-3 sm:px-7" aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-sm font-medium text-[#596179] last:border-b-0"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
