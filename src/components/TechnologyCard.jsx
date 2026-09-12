import { FiCheck, FiStar } from 'react-icons/fi';

const badgeClasses = [
  'bg-[#eef8ff] text-[#35a8ea]',
  'bg-[#eafaf2] text-[#2aaa77]',
  'bg-[#fff3e9] text-[#f19650]',
  'bg-[#f1edff] text-[#8059df]',
  'bg-[#edf9f4] text-[#3eaf82]',
];

export default function TechnologyCard({ technology, isAdded, onAdd, index }) {
  const badgeClass = badgeClasses[index % badgeClasses.length];

  return (
    <article className="flex min-h-[241px] flex-col rounded-[13px] border border-[#eceff4] bg-white px-[17px] py-[16px] shadow-[0_2px_9px_rgba(40,45,65,0.05)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-[33px] w-[33px] items-center justify-center">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-[28px] w-[28px] object-contain"
            loading="lazy"
          />
        </div>
        <span className={`rounded-full px-[9px] py-[5px] text-[9px] font-bold leading-none ${badgeClass}`}>
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-[12px] text-[15px] font-bold text-[#1a2236]">{technology.name}</h3>
      <p className="mt-[7px] min-h-[51px] text-[10.8px] leading-[1.5] text-[#8690a3]">{technology.description}</p>

      <div className="mt-[10px] flex items-center justify-between gap-2 border-b border-[#eef0f4] pb-[10px] text-[10px]">
        <span className="rounded-[3px] bg-[#f5f7fa] px-[6px] py-[4px] font-medium text-[#5d677d]">{technology.category}</span>
        <span className="font-medium text-[#788196]">{technology.difficulty}</span>
        <span className="flex items-center gap-[3px] font-semibold text-[#4e566b]">
          <FiStar className="fill-[#f5b21f] text-[#f5b21f]" size={10} />
          {technology.rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-[10px] h-[31px] w-full rounded-[6px] text-[9px] font-semibold transition ${isAdded
            ? 'bg-[#eefaf4] text-[#27a36c]'
            : 'bg-[#0f1422] text-white hover:bg-[#1a2030]'
          }`}
      >
        {isAdded ? <span className="inline-flex items-center gap-1"><FiCheck size={10} /> Added to Stack</span> : 'Add to Stack'}
      </button>
    </article>
  );
}
