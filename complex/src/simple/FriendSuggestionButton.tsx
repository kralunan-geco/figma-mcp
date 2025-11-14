interface FriendSuggestionButtonProps {
  onClick?: () => void;
}

export default function FriendSuggestionButton({ onClick }: FriendSuggestionButtonProps) {
  return (
    <div className="flex flex-col items-center gap-[44px] w-full">
      {/* Suggestion Text */}
      <p className="font-['Noto_Sans_JP',sans-serif] font-bold leading-[28px] text-[#333333] text-[14px] text-center text-nowrap whitespace-pre">
        「もぐレコ公式」とともだちになってみる
      </p>

      {/* Friend Request Button */}
      <button
        onClick={onClick}
        className="bg-[#ec1c24] box-border flex gap-[10px] items-start px-[40px] py-[12px] rounded-[5px] border-0 cursor-pointer hover:bg-[#d31a21] transition-colors"
      >
        <div className="flex flex-col font-['SF_Pro_Text',sans-serif] font-bold justify-center text-[16px] text-center text-nowrap text-white">
          <p className="leading-[24px] whitespace-pre m-0">ともだちになってみる</p>
        </div>
      </button>
    </div>
  );
}
