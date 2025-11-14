interface TitleBarProps {
  title: string;
  onRightAccessoryClick?: () => void;
}

export default function TitleBar({ title, onRightAccessoryClick }: TitleBarProps) {
  return (
    <div className="bg-white h-[52px] w-full relative">
      {/* Title */}
      <p className="absolute font-['Noto_Sans_JP',sans-serif] font-bold leading-[22px] left-1/2 text-[#333333] text-[16px] text-center text-nowrap top-[15px] -translate-x-1/2 whitespace-pre">
        {title}
      </p>

      {/* Right Accessory (Button placeholder) */}
      <div className="absolute box-border flex gap-[10px] h-[40px] items-center justify-end right-0 p-[8px] top-[6px] w-[100.5px]">
        <button
          onClick={onRightAccessoryClick}
          className="shrink-0 size-[24px] bg-transparent border-0 cursor-pointer"
          aria-label="Right accessory button"
        >
          {/* Placeholder for right accessory icon */}
          <div className="size-full" />
        </button>
      </div>
    </div>
  );
}
