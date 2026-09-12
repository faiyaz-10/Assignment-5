import bannerImage from '../assets/banner-stack.png';

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid min-h-[510px] max-w-[1060px] items-center gap-7 px-5 py-16 sm:px-7 lg:grid-cols-[1.03fr_0.97fr] lg:px-7 lg:py-20">
        <div className="pt-2">
          <h1 className="max-w-[560px] text-[42px] font-extrabold leading-[0.99] tracking-[-0.045em] text-[#11172b] sm:text-[52px]">
            Build Your Ideal
            <span className="block gradient-text">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-[550px] text-[15px] leading-[1.65] text-[#727b91] sm:text-[15px]">
            Explore frontend, backend, database, and tooling options,<br className="hidden sm:block" />
            compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <a href="#technologies" className="rounded-[7px] bg-brand-gradient px-4 py-[11px] text-[11px] font-bold text-white shadow-none hover:opacity-95">
              Explore Technologies
            </a>
            <a href="#about" className="rounded-[7px] border border-[#e1e4eb] bg-white px-6 py-[10px] text-[11px] font-medium text-[#5e667a] hover:bg-[#fbfbfd]">
              Learn More
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <img
            src={bannerImage}
            alt="Technology stack illustration"
            className="aspect-square w-[min(150vw,400px)] max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
