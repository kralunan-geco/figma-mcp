interface TitleBarProps {
  title: string;
}

export default function TitleBar({ title }: TitleBarProps) {
  return (
    <div className="absolute contents left-0 top-[44px]">
      <div className="absolute bg-white h-[52px] left-0 top-[44px] w-[375px]" />
      <div className="absolute box-border content-stretch flex gap-[10px] h-[40px] items-center justify-end left-[274.5px] p-[8px] top-[50px] w-[100.5px]">
        <div className="shrink-0 size-[24px]" />
      </div>
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[22px] left-[187.5px] text-[#333333] text-[16px] text-center text-nowrap top-[59px] translate-x-[-50%] whitespace-pre">
        {title}
      </p>
    </div>
  );
}
