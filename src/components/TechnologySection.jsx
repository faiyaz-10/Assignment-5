import TechnologyCard from './TechnologyCard';
import StackSidebar from './StackSidebar';

export default function TechnologySection({ technologies, stack, onAdd, onRemove, onRemoveAll }) {
  return (
    <section id="technologies" className="-mt-6 bg-white pt-0 pb-8 sm:-mt-6 sm:pb-10">
      <div className="mx-auto max-w-[1060px] px-5 sm:px-7">
        <div>
          <h2 className="text-[28px] font-extrabold tracking-[-0.03em] text-[#0f172a] sm:text-[35px]">
            Explore the{' '}
            <span className="bg-gradient-to-r from-[#db369d] to-[#8c40db] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-1.5 text-[14px] text-[#64748b] sm:text-[15px]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_190px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology, index) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                index={index}
                isAdded={stack.some((item) => item.id === technology.id)}
                onAdd={onAdd}
              />
            ))}
          </div>
          <StackSidebar stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
        </div>
      </div>
    </section>
  );
}