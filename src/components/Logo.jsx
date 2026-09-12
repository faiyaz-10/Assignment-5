import logoImage from '../assets/logo-text.png';

export default function Logo() {
  return (
    <a href="#home" aria-label="Dev Stack home" className="inline-flex items-center">
      <img
        src={logoImage}
        alt="Dev Stack"
        className="h-auto w-[150px] object-contain sm:w-[135px]"
      />
    </a>
  );
}
