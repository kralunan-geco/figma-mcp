import heroImage from '../assets/hero-image.png';

interface HeroSectionProps {
  title: string;
  itemCount: number;
}

export default function HeroSection({ title, itemCount }: HeroSectionProps) {
  return (
    <>
      <div className="absolute h-[259px] left-0 top-[96px] w-[375px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={heroImage}
        />
      </div>
      <div className="absolute backdrop-blur-[7.5px] backdrop-filter bg-[rgba(66,53,51,0.1)] box-border content-stretch flex gap-[8px] items-end left-0 p-[16px] top-[294px] w-[375px]">
        <div className="content-stretch flex font-['Noto_Sans_JP:Bold',sans-serif] font-bold gap-[8px] items-center leading-[0] relative shrink-0 text-nowrap text-white">
          <div className="flex flex-col justify-end relative shrink-0 text-[22px]">
            <p className="leading-[30px] text-nowrap whitespace-pre">{title}</p>
          </div>
          <div className="flex flex-col justify-end relative shrink-0 text-[12px]">
            <p className="leading-[13px] text-nowrap whitespace-pre">｜{itemCount}件</p>
          </div>
        </div>
      </div>
    </>
  );
}
