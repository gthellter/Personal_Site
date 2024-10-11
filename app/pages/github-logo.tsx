import Image from "next/image";
import Link from "next/link";

export default function GitHubLogo() {
  return (
    <div
      className={`items-center  flex gap-5 rounded-lg  px-6 py-3 text-sm font-medium transition-colors hover:bg-white hover:text-black md:text-base invert hover:invert-0`}
    >
      <Link href="https://github.com/gthellter">
        <span>GitHub</span>
      </Link>
      <Image
        alt="LinkedIn Icon"
        src="/github-mark.png"
        width={204}
        height={192}
        className="w-6 h-6"
      />
    </div>
  );
}
