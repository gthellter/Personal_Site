import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { lusitana } from "../ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-LightBackgroundBlue`}
    >
      <ComputerDesktopIcon className="h-20 w-10 rotate-[15deg]" />
      <div className="flex flex-col h-20">
        <div>
          <span className="text-[44px]">Drew Henderson</span>
        </div>
        <div>
          <span className="text-[12px]">
            Mostly a website to advertise myself
          </span>
        </div>
      </div>
    </div>
  );
}
