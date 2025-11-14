import { useState } from 'react';
import StatusBar from './StatusBar';
import TitleBar from './TitleBar';
import Menu from './Menu';
import EmptyNotificationState from './EmptyNotificationState';
import FriendSuggestionButton from './FriendSuggestionButton';

type MenuTab = "mypage" | "map" | "friends" | "timeline";

export default function SimplePage() {
  const [activeTab, setActiveTab] = useState<MenuTab>("timeline");

  const handleFriendRequest = () => {
    console.log('Friend request clicked');
    // Add your friend request logic here
  };

  const handleRightAccessory = () => {
    console.log('Right accessory clicked');
    // Add your right accessory button logic here
  };

  const handleTabChange = (tab: MenuTab) => {
    setActiveTab(tab);
    console.log('Tab changed to:', tab);
    // Add your tab change logic here
  };

  return (
    <div className="bg-[#f9f9f9] h-[812px] w-[375px] relative overflow-hidden">
      {/* Status Bar */}
      <div className="absolute left-0 top-0 w-full">
        <StatusBar />
      </div>

      {/* Title Bar */}
      <div className="absolute left-0 top-[44px] w-full">
        <TitleBar title="タイムライン" onRightAccessoryClick={handleRightAccessory} />
      </div>

      {/* Main Content */}
      <div className="absolute left-0 top-[206px] w-full">
        <EmptyNotificationState />
      </div>

      {/* Friend Suggestion Button */}
      <div className="absolute left-0 top-[588px] w-full px-[67px]">
        <FriendSuggestionButton onClick={handleFriendRequest} />
      </div>

      {/* Bottom Navigation Menu */}
      <div className="absolute bottom-0 left-0 w-full">
        <Menu activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </div>
  );
}
