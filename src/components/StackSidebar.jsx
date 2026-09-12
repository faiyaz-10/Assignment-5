import { FiX } from 'react-icons/fi';

export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-[13px] border border-[#eceff4] bg-white p-[15px] shadow-[0_2px_9px_rgba(40,45,65,0.05)] lg:sticky lg:top-[84px]">
      <div className="px-[3px]">
        <h2 className="text-[15px] font-bold text-[#141b2e]">
          Your Stack
        </h2>

        <p className="mt-[4px] text-[10px] text-[#9aa2b2]">
          {stack.length === 0
            ? 'No Technologies Selected yet'
            : `${stack.length} Technology${stack.length > 1 ? 'ies' : ''} Selected`}
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="mt-4 rounded-[8px] border border-dashed border-[#e5e8ef] bg-[#fbfbfd] px-2 py-6 text-center">
          <p className="text-[10px] font-semibold text-[#7d8699]">
            Your stack is empty
          </p>
        </div>
      ) : (
        <>
          <div className="mt-4 space-y-2">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 rounded-[7px] border border-[#e0e5ed] bg-white px-2 py-[9px]"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="h-[23px] w-[23px] object-contain"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-[10px] font-bold text-[#252c3d]">
                    {item.name}
                  </p>

                  <p className="mt-[1px] text-[7px] text-[#9299aa]">
                    {item.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(item)}
                  className="grid h-5 w-5 place-items-center text-[#9da6b5] transition hover:text-[#6e7483]"
                  aria-label={`Remove ${item.name}`}
                >
                  <FiX size={15} />
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-12 h-[25px] w-full rounded-[6px] border border-[#f0b2b2] bg-white text-[12px] font-semibold text-[#e05252] transition hover:bg-[#fff7f7]"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}