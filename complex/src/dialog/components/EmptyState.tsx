import mogLargeIcon from '../assets/icons/icon-mog-large.svg';

export default function EmptyState() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[206px]">
      <div className="content-stretch flex flex-col gap-[8px] h-[180px] items-center justify-center relative shrink-0 w-[375px]">
        <div className="h-[80px] overflow-clip relative shrink-0 w-[79px]">
          <img alt="" className="block max-w-none size-full" src={mogLargeIcon} />
        </div>
        <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#757575] text-[12px] text-center text-nowrap whitespace-pre">
          お知らせはありません
        </p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-[375px]">
        <div className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#757575] text-[0px] text-center text-nowrap whitespace-pre">
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
  );
}
