import friendsIcon from '../assets/icons/friends.svg';
import mapIcon from '../assets/icons/map-icon.svg';
import mapMarkerIcon from '../assets/icons/map-marker.svg';
import transparentIcon from '../assets/icons/transparent.svg';
import mogIcon from '../assets/icons/mog-icon.svg';
import timelineIcon from '../assets/icons/timeline.svg';

type MenuTab = 'timeline' | 'mypage' | 'friends' | 'map';

interface NavigationMenuProps {
  activeTab: MenuTab;
  onTabChange: (tab: MenuTab) => void;
}

export default function NavigationMenu({ activeTab, onTabChange }: NavigationMenuProps) {
  return (
    <div className="absolute bottom-0 h-[60px] left-0 w-[375px]">
      <div className="absolute bg-[#fffefd] inset-0" />

      {/* Timeline Tab */}
      <button
        onClick={() => onTabChange('timeline')}
        className="absolute contents left-0 top-0 cursor-pointer"
        aria-label="Timeline"
      >
        <div className="absolute bg-white h-[60px] left-0 opacity-5 top-0 w-[94px]" />
        <p
          className={`absolute font-['Noto_Sans_JP:${activeTab === 'timeline' ? 'Bold' : 'Regular'}',sans-serif] ${activeTab === 'timeline' ? 'font-bold text-[#f48522]' : 'font-normal text-[#999999]'} inset-[65%_79.47%_13.33%_4.53%] leading-[13px] text-[10px] text-center text-nowrap whitespace-pre`}
        >
          タイムライン
        </p>
        <div className="absolute left-[31px] overflow-clip size-[32px] top-[5px]">
          <div className="absolute inset-[17.69%_14.08%_17.69%_14.06%]">
            <div className="absolute inset-0">
              <img alt="" className="block max-w-none size-full" src={timelineIcon} />
            </div>
          </div>
          <img alt="" className="block max-w-none size-full" src={transparentIcon} />
        </div>
      </button>

      {/* MyPage Tab */}
      <button
        onClick={() => onTabChange('mypage')}
        className="absolute contents left-[94px] top-0 cursor-pointer"
        aria-label="My Page"
      >
        <div className="absolute bg-white h-[60px] left-[94px] opacity-5 top-0 w-[94px]" />
        <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal inset-[65%_55.73%_13.33%_30.93%] leading-[13px] text-[#999999] text-[10px] text-center text-nowrap whitespace-pre">
          マイページ
        </p>
        <div className="absolute left-[125px] overflow-clip size-[32px] top-[5px]">
          <img alt="" className="block max-w-none size-full" src={mogIcon} />
        </div>
      </button>

      {/* Friends Tab */}
      <button
        onClick={() => onTabChange('friends')}
        className="absolute contents left-[188px] top-0 cursor-pointer"
        aria-label="Friends"
      >
        <div className="absolute bg-white h-[60px] left-[188px] top-0 w-[93px]" />
        <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal inset-[65%_32.27%_13.33%_57.07%] leading-[13px] text-[#999999] text-[10px] text-center text-nowrap whitespace-pre">
          ともだち
        </p>
        <div className="absolute inset-[8.33%_33.33%_38.33%_58.13%] overflow-clip">
          <div className="absolute inset-[19.6%_5.99%_21.35%_5.96%]">
            <div className="absolute inset-0">
              <img alt="" className="block max-w-none size-full" src={friendsIcon} />
            </div>
          </div>
        </div>
      </button>

      {/* Map Tab */}
      <button
        onClick={() => onTabChange('map')}
        className="absolute contents left-[281px] top-0 cursor-pointer"
        aria-label="Map"
      >
        <div className="absolute bg-white h-[60px] left-[281px] top-0 w-[94px]" />
        <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal inset-[62.71%_7.2%_15.62%_82.13%] leading-[13px] text-[#999999] text-[10.285px] text-center text-nowrap tracking-[-0.5px] whitespace-pre">
          もぐMAP
        </p>
        <div className="absolute left-[312px] overflow-clip size-[32px] top-[5px]">
          <div className="absolute inset-[12.11%_20.44%]">
            <div className="absolute inset-0">
              <img alt="" className="block max-w-none size-full" src={mapIcon} />
            </div>
          </div>
          <div className="absolute inset-[29.78%_38.11%_46.44%_38.11%]">
            <div className="absolute inset-0">
              <img alt="" className="block max-w-none size-full" src={mapMarkerIcon} />
            </div>
          </div>
          <img alt="" className="block max-w-none size-full" src={transparentIcon} />
        </div>
      </button>
    </div>
  );
}
