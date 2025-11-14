import batteryIcon from '../assets/icons/battery.svg';
import wifiIcon from '../assets/icons/wifi.svg';

export default function StatusBar() {
  return (
    <div className="bg-white h-[44px] w-full relative">
      {/* Battery Icon */}
      <div className="absolute h-[11.5px] right-[14.5px] top-[17px] w-[24.5px]">
        <img alt="Battery" className="block max-w-none size-full" src={batteryIcon} />
      </div>

      {/* WiFi Icon */}
      <div className="absolute h-[11px] right-[44px] top-[17.5px] w-[15px]">
        <img alt="WiFi" className="block max-w-none size-full" src={wifiIcon} />
      </div>

      {/* Signal Strength */}
      <div className="absolute right-[64.5px] top-[18px]">
        <div className="absolute bg-black h-[4px] right-[13.5px] rounded-[1px] top-[6.5px] w-[3px]" />
        <div className="absolute bg-black h-[6px] right-[9px] rounded-[1px] top-[4.5px] w-[3px]" />
        <div className="absolute bg-black h-[8.5px] right-[4.5px] rounded-[1px] top-[2px] w-[3px]" />
        <div className="absolute bg-black h-[10.5px] right-0 rounded-[1px] top-0 w-[3px]" />
      </div>

      {/* Time */}
      <p className="absolute font-['SF_Pro_Text',sans-serif] font-semibold leading-normal left-[47px] text-[15px] text-black text-center text-nowrap top-[14.5px] -translate-x-1/2 whitespace-pre">
        8:35
      </p>
    </div>
  );
}
