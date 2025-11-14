import closeIcon from '../assets/icons/close.svg';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Dialog({ isOpen, onClose }: DialogProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="absolute bg-[#202226] h-full left-0 opacity-40 top-0 w-[375px] cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog Box */}
      <div className="absolute bg-white box-border content-stretch flex flex-col items-center left-[calc(50%-1.5px)] pb-[24px] pt-0 px-0 rounded-[5px] top-[284px] translate-x-[-50%] w-[340px]">
        <div className="box-border content-stretch flex items-center justify-end p-[4px] relative shrink-0 w-full">
          <button
            onClick={onClose}
            className="overflow-clip relative shrink-0 size-[28px] cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Close dialog"
          >
            <div className="absolute inset-[23.49%_24.7%_25.87%_24.66%]">
              <img alt="" className="block max-w-none size-full" src={closeIcon} />
            </div>
          </button>
        </div>
        <div className="box-border content-stretch flex items-center justify-center pb-[8px] pt-0 px-0 relative shrink-0 w-full">
          <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#333333] text-[14px] text-center text-nowrap whitespace-pre">
            タイムライン機能が追加されました！
          </p>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
          <div className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#757575] text-[0px] text-center w-[287px]">
            <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] mb-0 text-[13px]">
              これからは、
            </p>
            <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] mb-0 text-[13px]">
              <span className="text-[#757575]">ともだち</span>が<span className="text-[#757575]">「行った</span>
              <span className="text-[#757575] tracking-[-12px]">」</span>
              <span className="text-[#757575]">「行きたい」</span>を<span className="text-[#757575]">追加</span>したり、
            </p>
            <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] mb-0 text-[13px]">
              「まとめ」を作成した際に、
            </p>
            <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] text-[13px]">
              <span className="text-[#757575]">こ</span>の画面にお知らせが届きます。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
