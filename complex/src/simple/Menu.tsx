import person2Icon from '../assets/icons/person-2.svg';
import mapVector1 from '../assets/icons/map-vector-1.svg';
import mapVector2 from '../assets/icons/map-vector-2.svg';
import mapBase from '../assets/icons/map-base.svg';
import iconMog1 from '../assets/icons/icon-mog-1.svg';
import iconMog2 from '../assets/icons/icon-mog-2.svg';
import timelineActive from '../assets/icons/timeline-active.svg';
import timelineInactive from '../assets/icons/timeline-inactive.svg';

type MenuTab = "mypage" | "map" | "friends" | "timeline";

interface MenuProps {
  activeTab?: MenuTab;
  onTabChange?: (tab: MenuTab) => void;
}

export default function Menu({ activeTab = "timeline", onTabChange }: MenuProps) {
  const handleTabClick = (tab: MenuTab) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="bg-[#fffefd] h-[60px] w-full relative">
      {/* Timeline Tab */}
      <button
        onClick={() => handleTabClick("timeline")}
        className="absolute left-0 top-0 w-[94px] h-[60px] bg-white/5 border-0 cursor-pointer"
      >
        <div className="absolute left-[31px] size-[32px] top-[5px]">
          <div className="absolute inset-[17.69%_14.08%_17.69%_14.06%]">
            <img
              alt="Timeline"
              className="block max-w-none size-full"
              src={activeTab === "timeline" ? timelineActive : timelineInactive}
            />
          </div>
          <img alt="" className="block max-w-none size-full" src={mapBase} />
        </div>
        <p
          className={`absolute font-['Noto_Sans_JP',sans-serif] ${
            activeTab === "timeline" ? "font-bold text-[#f48522]" : "font-normal text-[#999999]"
          } leading-[13px] text-[10px] text-center text-nowrap whitespace-pre left-[17px] top-[39px]`}
        >
          タイムライン
        </p>
      </button>

      {/* MyPage Tab */}
      <button
        onClick={() => handleTabClick("mypage")}
        className="absolute left-[94px] top-0 w-[94px] h-[60px] bg-white/5 border-0 cursor-pointer"
      >
        <div className="absolute left-[31px] size-[32px] top-[5px]">
          <img
            alt="My Page"
            className="block max-w-none size-full"
            src={activeTab === "mypage" ? iconMog2 : iconMog1}
          />
        </div>
        <p
          className={`absolute font-['Noto_Sans_JP',sans-serif] ${
            activeTab === "mypage" ? "font-bold text-[#f48522]" : "font-normal text-[#999999]"
          } leading-[13px] text-[10px] text-center text-nowrap whitespace-pre left-[29px] top-[39px]`}
        >
          マイページ
        </p>
      </button>

      {/* Friends Tab */}
      <button
        onClick={() => handleTabClick("friends")}
        className="absolute left-[188px] top-0 w-[93px] h-[60px] bg-white border-0 cursor-pointer"
      >
        <div className="absolute left-[31px] size-[32px] top-[5px]">
          <div className="absolute inset-[19.6%_5.99%_21.35%_5.96%]">
            <img alt="Friends" className="block max-w-none size-full" src={person2Icon} />
          </div>
        </div>
        <p className="absolute font-['Noto_Sans_JP',sans-serif] font-normal leading-[13px] text-[#999999] text-[10px] text-center text-nowrap whitespace-pre left-[21.5px] top-[39px]">
          ともだち
        </p>
      </button>

      {/* Map Tab */}
      <button
        onClick={() => handleTabClick("map")}
        className="absolute left-[281px] top-0 w-[94px] h-[60px] bg-white border-0 cursor-pointer"
      >
        <div className="absolute left-[31px] size-[32px] top-[5px]">
          <div className="absolute inset-[12.11%_20.44%]">
            <img alt="Map" className="block max-w-none size-full" src={mapVector1} />
          </div>
          <div className="absolute inset-[29.78%_38.11%_46.44%_38.11%]">
            <img alt="" className="block max-w-none size-full" src={mapVector2} />
          </div>
          <img alt="" className="block max-w-none size-full" src={mapBase} />
        </div>
        <p className="absolute font-['Noto_Sans_JP',sans-serif] font-normal leading-[13px] text-[#999999] text-[10.285px] text-center text-nowrap tracking-[-0.5px] whitespace-pre left-[27px] top-[37.65px]">
          もぐMAP
        </p>
      </button>
    </div>
  );
}
