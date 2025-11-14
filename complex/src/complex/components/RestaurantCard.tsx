import restaurantPhoto from '../assets/restaurant-photo.png';
import bookmarkEmpty from '../assets/icons/bookmark-empty.svg';
import bookmarkFilled from '../assets/icons/bookmark-orange.svg';
import tagIcon from '../assets/icons/tag.svg';
import mapPinIcon from '../assets/icons/map-pin.svg';

interface RestaurantCardProps {
  rank: number;
  name: string;
  address: string;
  tags: string[];
  comment: string;
  isBookmarked?: boolean;
  onBookmarkClick?: () => void;
  onMapClick?: () => void;
}

export default function RestaurantCard({
  rank,
  name,
  address,
  tags,
  comment,
  isBookmarked = false,
  onBookmarkClick,
  onMapClick,
}: RestaurantCardProps) {
  return (
    <div className="h-[263px] relative shrink-0 w-[343px]">
      <div className="absolute bg-white inset-0" />

      {/* Bookmark Button */}
      <button
        onClick={onBookmarkClick}
        className="absolute bottom-[89.35%] left-[91.84%] right-0 top-0 cursor-pointer"
        aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
      >
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute bottom-[13.89%] left-1/4 right-1/4 top-[16.67%]">
            <div className="absolute inset-0">
              <img
                alt=""
                className="block max-w-none size-full"
                src={isBookmarked ? bookmarkFilled : bookmarkEmpty}
              />
            </div>
          </div>
        </div>
      </button>

      {/* Rank Badge */}
      <div className="absolute bg-[#f48522] bottom-[86.31%] box-border content-stretch flex gap-[5px] items-center left-[0.15%] p-[8px] right-[92.86%] rounded-br-[5px] top-0">
        <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
          {rank}
        </p>
      </div>

      {/* Restaurant Image */}
      <div className="absolute bottom-[42.97%] left-0 overflow-clip right-[56.27%] rounded-tl-[5px] top-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[5px]">
          <div className="absolute bg-white inset-0 rounded-tl-[5px]" />
          <img
            alt=""
            className="absolute max-w-none object-50%-50% object-cover rounded-tl-[5px] size-full"
            src={restaurantPhoto}
          />
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="absolute bottom-[51.33%] content-stretch flex flex-col gap-[6px] items-start left-[43.73%] right-0 top-[12.17%]">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[16px] py-0 relative shrink-0 w-full">
          <p className="basis-0 font-['Noto_Sans_JP:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#333333] text-[16px]">
            {name}
          </p>
        </div>
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[16px] py-0 relative shrink-0 w-full">
          <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#757575] text-[10px] text-nowrap whitespace-pre">
            {address}
          </p>
        </div>
        <div className="box-border content-stretch flex flex-col items-start px-[12px] py-0 relative shrink-0 w-full">
          <button
            onClick={onMapClick}
            className="bg-white content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 w-[103px] cursor-pointer hover:bg-gray-50 transition-colors"
            aria-label="Open in Google Maps"
          >
            <div className="overflow-clip relative shrink-0 size-[18px]">
              <div className="absolute inset-[17.69%_17.04%_19.69%_17.04%]">
                <div className="absolute inset-0">
                  <img alt="" className="block max-w-none size-full" src={mapPinIcon} />
                </div>
              </div>
            </div>
            <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#664944] text-[10px] text-center text-nowrap whitespace-pre">
              Google Mapで見る
            </p>
          </button>
        </div>
      </div>

      {/* Tags */}
      <div className="absolute bottom-[32.32%] box-border content-stretch flex flex-col gap-[10px] items-start left-0 px-[16px] py-0 right-0 top-[60.84%]">
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 overflow-x-auto">
          {tags.map((tag, index) => (
            <div key={index} className="content-stretch flex items-start relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[18px]">
                <div className="absolute inset-[18.1%_21.72%_20.47%_21.72%]">
                  <div className="absolute inset-0">
                    <img alt="" className="block max-w-none size-full" src={tagIcon} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#423533] text-[12px] text-nowrap">
                <p className="leading-[18px] whitespace-pre">{tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comment */}
      <div className="absolute bg-[#ececec] bottom-0 box-border content-stretch flex items-start left-0 px-[16px] py-[12px] right-0 shadow-[0px_-1px_0px_0px_#ececec] top-[71.48%]">
        <p className="basis-0 font-['Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[17px] min-h-px min-w-px relative shrink-0 text-[#333333] text-[11px]">
          {comment}
        </p>
      </div>
    </div>
  );
}
