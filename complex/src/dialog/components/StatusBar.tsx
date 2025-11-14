import batteryIcon from '../assets/icons/battery.svg';
import wifiIcon from '../assets/icons/wifi.svg';

export default function StatusBar() {
  return (
    <div className="absolute bg-white h-[44px] left-0 top-0 w-[375px]">
      <div className="absolute h-[11.5px] right-[14.5px] top-[17px] w-[24.5px]">
        <img alt="" className="block max-w-none size-full" src={batteryIcon} />
      </div>
      <div className="absolute h-[11px] right-[44px] top-[17.5px] w-[15px]">
        <img alt="" className="block max-w-none size-full" src={wifiIcon} />
      </div>
      <div className="absolute contents right-[64.5px] top-[18px]">
        <div className="absolute bg-black h-[4px] right-[78px] rounded-[1px] top-[24.5px] w-[3px]" />
        <div className="absolute bg-black h-[6px] right-[73.5px] rounded-[1px] top-[22.5px] w-[3px]" />
        <div className="absolute bg-black h-[8.5px] right-[69px] rounded-[1px] top-[20px] w-[3px]" />
        <div className="absolute bg-black h-[10.5px] right-[64.5px] rounded-[1px] top-[18px] w-[3px]" />
      </div>
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[47px] not-italic text-[15px] text-black text-center text-nowrap top-[14.5px] translate-x-[-50%] whitespace-pre">
        8:35
      </p>
    </div>
  );
}
