import arrowLeftIcon from '../assets/icons/arrow-left.svg';

interface TitleBarProps {
  title: string;
  onBackClick?: () => void;
}

export default function TitleBar({ title, onBackClick }: TitleBarProps) {
  return (
    <div className="absolute contents left-0 top-[44px]">
      <div className="absolute bg-white h-[52px] left-0 top-[44px] w-[375px]" />
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[22px] left-[187.5px] text-[#333333] text-[16px] text-center text-nowrap top-[59px] translate-x-[-50%] whitespace-pre">
        {title}
      </p>
      <button
        onClick={onBackClick}
        className="absolute flex items-center justify-center left-[8px] size-[28px] top-[56px] cursor-pointer"
        aria-label="Go back"
      >
        <div className="flex-none rotate-[180deg]">
          <div className="relative size-[28px]">
            <div className="absolute inset-[22.27%_33.91%_22.04%_34.04%]">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={arrowLeftIcon} />
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
