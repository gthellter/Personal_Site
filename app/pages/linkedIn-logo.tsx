import Image from "next/image";
import Link from "next/link";

export default function LinkedInLogo() {
  return (
    <div
      className={`items-center  flex gap-5 rounded-lg  px-6 py-3 text-sm font-medium transition-colors hover:bg-white hover:text-black md:text-base invert hover:invert-0`}
    >
      <Link href="https://www.linkedin.com/in/drewhendersonse/">
        <span>LinkedIn</span>
      </Link>
      <Image
        alt="LinkedIn Icon"
        src="/linkedin.png"
        width={204}
        height={192}
        className="w-6 h-6"
      />
    </div>
  );
}
