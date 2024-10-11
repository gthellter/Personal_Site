import AcmeLogo from "../app/pages/acme-logo";
import LinkedInLogo from "./pages/linkedIn-logo";
import Link from "next/link";
import Transitions from "./pages/transition";
import ParticlesWallpaper from "./pages/particles";
import MessageMe from "./pages/message-me";
import GitHubLogo from "./pages/github-logo";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col ">
      <ParticlesWallpaper />
      <div className="flex-col h-30 shrink-0 items-end justify-between  p-4 md:flex md:flex-row">
        <AcmeLogo />
        <div className="flex flex-row items-right self-start">
          <MessageMe />
          <LinkedInLogo />
          <GitHubLogo />
        </div>
        {/*
          About Me
          Resume
          projects
          Contact me / socials
          */}
      </div>
      <div className="flex flex-col justify-top justify-center gap-6 px-6 py-10  md:px-10 md:flex-row align-center">
        <div className="mt-4 flex grow flex-col gap-4 w-100">
          <Transitions />
          {/* <Resume />
          <Projects /> */}
        </div>
      </div>
    </main>
  );
}
