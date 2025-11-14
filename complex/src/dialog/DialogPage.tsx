import { useState } from 'react';
import {
  StatusBar,
  TitleBar,
  EmptyState,
  Dialog,
  NavigationMenu,
} from './components';

type MenuTab = 'timeline' | 'mypage' | 'friends' | 'map';

export default function DialogPage() {
  const [activeTab, setActiveTab] = useState<MenuTab>('timeline');
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const handleTabChange = (tab: MenuTab) => {
    setActiveTab(tab);
    console.log('Tab changed to:', tab);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleFriendRequest = () => {
    console.log('Friend request clicked');
    // Add friend request logic here
  };

  return (
    <div className="bg-[#f9f9f9] relative h-screen w-full">
      <StatusBar />
      <TitleBar title="タイムライン" />
      <EmptyState />

      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] left-[187px] text-[#333333] text-[14px] text-center text-nowrap top-[588px] translate-x-[-50%] whitespace-pre">
        「もぐレコ公式」とともだちになってみる
      </p>

      <button
        onClick={handleFriendRequest}
        className="absolute bg-[#ec1c24] box-border content-stretch flex gap-[10px] items-start left-[calc(50%-0.5px)] px-[40px] py-[12px] rounded-[5px] top-[632px] translate-x-[-50%] cursor-pointer hover:bg-[#d11920] transition-colors"
      >
        <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
          <p className="leading-[24px] whitespace-pre">ともだちになってみる</p>
        </div>
      </button>

      <NavigationMenu activeTab={activeTab} onTabChange={handleTabChange} />

      <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  );
}
