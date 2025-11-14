import { useState } from 'react';
import {
  StatusBar,
  TitleBar,
  HeroSection,
  UserInfoSection,
  RestaurantCard,
  NavigationMenu,
} from './components';

type MenuTab = 'timeline' | 'mypage' | 'friends' | 'map';

interface Restaurant {
  id: number;
  rank: number;
  name: string;
  address: string;
  tags: string[];
  comment: string;
  isBookmarked: boolean;
}

export default function ComplexPage() {
  const [activeTab, setActiveTab] = useState<MenuTab>('timeline');
  const [restaurants, setRestaurants] = useState<Restaurant[]>([
    {
      id: 1,
      rank: 1,
      name: 'お好み焼き いまり 恵比寿店',
      address: '東京都渋谷区恵比寿西２丁目３−１１',
      tags: ['恵比寿', '鉄板焼き', 'お好み焼き', 'ビール'],
      comment:
        'ふわふわの生地と、たっぷりのキャベツと豚肉のバランスがとても良く、具も色々選べるので、飽きずに何枚でも食べられる。自家製のソースが美味しい。',
      isBookmarked: false,
    },
    {
      id: 2,
      rank: 2,
      name: 'TEPPANYAKI EBISUYA',
      address: '東京都渋谷区恵比寿西２丁目３−１１',
      tags: ['恵比寿', '鉄板焼き', 'カウンター席', 'ビール'],
      comment:
        'とにかく肉がジューシーで、塩コショウだけでシンプルに味付けされていて、肉本来の旨味が楽しめる。カウンター席でのシェフの調理ショーも迫力があって、エンタメ性もgood。',
      isBookmarked: true,
    },
    {
      id: 3,
      rank: 3,
      name: '地鶏炭火焼 えびす',
      address: '東京都渋谷区恵比寿西２丁目３−１１',
      tags: ['恵比寿', '鉄板焼き', 'お好み焼き', 'ビール'],
      comment:
        '柔らかくジューシーで、味付けも濃すぎず薄すぎず絶妙。店内の雰囲気もうるさくなく居心地がよく、サービスも上質。駅から近いのもポイント高め。',
      isBookmarked: false,
    },
  ]);

  const handleBackClick = () => {
    console.log('Back button clicked');
    // Navigate back logic here
  };

  const handleTabChange = (tab: MenuTab) => {
    setActiveTab(tab);
    console.log('Tab changed to:', tab);
  };

  const handleBookmarkClick = (restaurantId: number) => {
    setRestaurants((prev) =>
      prev.map((restaurant) =>
        restaurant.id === restaurantId
          ? { ...restaurant, isBookmarked: !restaurant.isBookmarked }
          : restaurant
      )
    );
  };

  const handleMapClick = (restaurantName: string) => {
    console.log('Open map for:', restaurantName);
    // Open Google Maps logic here
  };

  return (
    <div className="bg-white relative h-screen w-full overflow-y-auto">
      <StatusBar />
      <TitleBar title="8/10 渋谷飲みの候補" onBackClick={handleBackClick} />

      <HeroSection title="8/10 渋谷飲みの候補" itemCount={10} />

      <UserInfoSection
        userName="たなか"
        description="駅チカで適当にリストアップした。1,2はまだ行ったことないところー"
        lastUpdated="最終更新日：2022年9月28日"
      />

      <div className="absolute bg-[#f9f9f9] h-[853px] left-0 top-[683px] w-[375px]" />

      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[699px]">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            rank={restaurant.rank}
            name={restaurant.name}
            address={restaurant.address}
            tags={restaurant.tags}
            comment={restaurant.comment}
            isBookmarked={restaurant.isBookmarked}
            onBookmarkClick={() => handleBookmarkClick(restaurant.id)}
            onMapClick={() => handleMapClick(restaurant.name)}
          />
        ))}
      </div>

      <NavigationMenu activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
