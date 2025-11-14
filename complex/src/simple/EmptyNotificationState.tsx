import iconMogLarge from '../assets/icons/icon-mog-large.svg';

export default function EmptyNotificationState() {
  return (
    <div className="flex flex-col items-start w-[375px]">
      {/* Icon and Empty Message */}
      <div className="flex flex-col gap-[8px] h-[180px] items-center justify-center w-full">
        <div className="h-[80px] w-[79px] overflow-clip">
          <img alt="No notifications" className="block max-w-none size-full" src={iconMogLarge} />
        </div>
        <p className="font-['Noto_Sans_JP',sans-serif] font-normal leading-[12px] text-[#757575] text-[12px] text-center text-nowrap whitespace-pre">
          お知らせはありません
        </p>
      </div>

      {/* Explanation Text */}
      <div className="flex items-center justify-center w-full">
        <div className="font-['Noto_Sans_JP',sans-serif] font-bold text-[#757575] text-center">
          <p className="font-normal leading-[22px] mb-0 text-[13px]">
            <span className="text-[#757575]">ともだち</span>が<span className="text-[#757575]">「行った</span>
            <span className="text-[#757575] tracking-[-12px]">」</span>
            <span className="text-[#757575]">「行きたい」</span>を<span className="text-[#757575]">追加</span>したり、
          </p>
          <p className="font-normal leading-[22px] mb-0 text-[13px]">
            「まとめ」を作成した際に、
          </p>
          <p className="font-normal leading-[22px] text-[13px]">
            <span className="text-[#757575]">こ</span>の画面にお知らせが届きます。
          </p>
        </div>
      </div>
    </div>
  );
}
