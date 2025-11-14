import chatBubbleIcon from '../assets/icons/chat-bubble.svg';
import userIcon from '../assets/icons/user.svg';
import lockIcon from '../assets/icons/lock.svg';

export default function LoginFrame() {
  return (
    <div className="bg-[#2148c0] content-stretch flex gap-[10px] items-center justify-center relative size-full" data-name="Login Frame" data-node-id="2:2">
      <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[300px]" data-name="Container Frame" data-node-id="2:39">
        <div className="relative shrink-0 size-[120px]" data-name="Frame" data-node-id="2:28">
          <img alt="Chat" className="block max-w-none size-full" src={chatBubbleIcon} />
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Form Frame" data-node-id="2:38">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2:37">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2:36">
              <div className="border border-solid border-white box-border content-stretch flex items-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-full" data-name="Username TextField" data-node-id="2:34">
                <div className="relative shrink-0 size-[20px]" data-name="user" data-node-id="2:7">
                  <img alt="User" className="block max-w-none size-full" src={userIcon} />
                </div>
                <input
                  type="text"
                  placeholder="USERNAME"
                  className="basis-0 bg-transparent border-none outline-none font-['Montserrat:Light',sans-serif] font-light grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white uppercase placeholder:text-white"
                  data-node-id="2:6"
                />
              </div>
              <div className="border border-solid border-white box-border content-stretch flex h-[36px] items-center justify-between px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-[300px]" data-name="Password TextField" data-node-id="2:33">
                <div className="relative shrink-0 size-[20px]" data-name="lock" data-node-id="2:13">
                  <img alt="Lock" className="block max-w-none size-full" src={lockIcon} />
                </div>
                <input
                  type="password"
                  placeholder="PASSWORD"
                  className="basis-0 bg-transparent border-none outline-none font-['Montserrat:Light',sans-serif] font-light grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white uppercase placeholder:text-white"
                  data-node-id="2:12"
                />
              </div>
            </div>
            <div className="bg-white box-border content-stretch flex gap-[10px] h-[45px] items-center justify-center px-[69px] py-[12px] relative rounded-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.3)] shrink-0 w-full" data-name="Login Button Frame" data-node-id="2:35">
              <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#2148c0] text-[16px] text-center text-nowrap uppercase whitespace-pre" data-node-id="2:18">
                login
              </p>
            </div>
          </div>
          <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-center text-white w-full" data-node-id="2:19">
            Forgot password?
          </p>
        </div>
      </div>
    </div>
  );
}
