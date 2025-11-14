import statusRightIcon from '../assets/icons/status-right.svg';
import notchIcon from '../assets/icons/notch.svg';

export default function StatusBar() {
  return (
    <div className="absolute bg-black h-[44px] left-0 overflow-clip top-0 w-[375px]">
      <div className="absolute h-[31px] left-[calc(50%+0.5px)] top-[-2px] translate-x-[-50%] w-[164px]">
        <img alt="" className="block max-w-none size-full" src={notchIcon} />
      </div>
      <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.661px]">
        <img alt="" className="block max-w-none size-full" src={statusRightIcon} />
      </div>
      <div className="absolute contents left-[21px] top-[12px]">
        <div className="absolute h-[21px] left-[21px] rounded-[24px] top-[12px] w-[54px]">
          <p className="absolute font-['SF_Pro_Text:Bold',sans-serif] h-[20px] leading-[20px] left-[27px] not-italic text-[15px] text-center text-white top-px tracking-[-0.5px] translate-x-[-50%] w-[54px]">
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}
