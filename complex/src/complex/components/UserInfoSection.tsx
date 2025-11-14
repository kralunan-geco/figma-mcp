import userAvatar from '../assets/user-avatar.png';
import linkIcon from '../assets/icons/link.svg';
import mapImage from '../assets/map.png';

interface UserInfoSectionProps {
  userName: string;
  description: string;
  lastUpdated: string;
}

export default function UserInfoSection({ userName, description, lastUpdated }: UserInfoSectionProps) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 top-[364px]">
      <div className="box-border content-stretch flex gap-[20px] items-center px-[16px] py-0 relative shrink-0 w-[375px]">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[160px]">
          <div className="relative shrink-0 size-[32px]">
            <img alt="" className="block max-w-none size-full" height="32" src={userAvatar} width="32" />
          </div>
          <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-nowrap">
            <p className="leading-[13px] whitespace-pre">{userName}</p>
          </div>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[16px] py-0 relative shrink-0 w-[375px]">
        <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#757575] text-[12px] w-[343px]">
          {description}
        </p>
      </div>
      <div className="box-border content-stretch flex items-center px-[16px] py-0 relative shrink-0 w-[375px]">
        <div className="content-stretch flex items-center relative shrink-0 w-[170px]">
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[14.7%_16.23%_17.64%_16.2%]">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={linkIcon} />
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#757575] text-[10px] text-nowrap">
            <p className="leading-[13px] whitespace-pre">リンクを知っている全員</p>
          </div>
        </div>
        <div className="content-stretch flex items-start justify-end relative shrink-0 w-[170px]">
          <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[13px] relative shrink-0 text-[#757575] text-[10px] text-nowrap text-right whitespace-pre">
            {lastUpdated}
          </p>
        </div>
      </div>
      <div className="h-[195px] relative shrink-0 w-[375px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[465.42%] left-[-3.85%] max-w-none top-[-78.9%] w-[136.49%]" src={mapImage} />
        </div>
      </div>
    </div>
  );
}
