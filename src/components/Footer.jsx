import Logo from './Logo';

const groups = [
  ['PRODUCT', ['Home', 'Technologies', 'Projects']],
  ['COMPANY', ['About', 'Contact', 'Careers']],
  ['LEGAL', ['Privacy Policy', 'Terms of Service']],
];

export default function Footer() {
  return (
    <footer id="contact" className="mt-10 border-t border-[#eceff4] bg-white">
      <div className="mx-auto max-w-[1060px] px-5 py-11 sm:px-7">
        <div className="grid gap-9 md:grid-cols-[1.7fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-3 max-w-[350px] text-[20px] leading-[1.6] text-[#818198] sm:text-[11px]">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-4 flex items-center gap-4 text-[11px] font-medium text-[#515a6f]">
            <a href="#contact" className="hover:text-[#d81b7e]"> GitHub </a>
            <a href="#contact" className="hover:text-[#d81b7e]"> Twitter </a>
            <a href="#contact" className="hover:text-[#d81b7e]"> LinkedIn </a>
            </div>
          </div>

          {groups.map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[11px] font-bold tracking-[0.03em] text-[#3f485d]">{title}</h3>
              <div className="mt-3 space-y-2.5">
                {links.map((link) => (
                  <a key={link} href="#home" className="block text-[11px] text-[#8d96a8] hover:text-[#333b50]">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-[#eceff4] pt-5 text-[12px] text-[#a1a8b7] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#contact" className="hover:text-[#333b50]">Privacy</a>
            <a href="#contact" className="hover:text-[#333b50]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}