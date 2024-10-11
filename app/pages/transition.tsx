"use client";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import Experience from "./about-me";

export default function Transitions() {
  const [open, setOpen] = useState(true);

  function returnToggle() {
    const className = "flex flex-row justify-center m-10";
    const childClassName = "m-10 text-xl";
    if (open) {
      return (
        <div className={className}>
          <p className={childClassName + " underline"}>Experience</p>
          <button
            className={childClassName}
            onClick={() => setOpen((open) => !open)}
          >
            Projects
          </button>
        </div>
      );
    } else {
      return (
        <div className={className}>
          <button
            className={childClassName}
            onClick={() => setOpen((open) => !open)}
          >
            Experience
          </button>
          <p className={childClassName + " underline"}>Projects</p>
        </div>
      );
    }
  }
  return (
    <div className="flex-col relative text-white self-center w-10/12">
      {returnToggle()}
      <Transition show={!open} appear={true}>
        <div
          className={clsx([
            // Base styles
            "absolute transition ease-in-out justify-center",
            // Shared closed styles
            "data-[closed]:opacity-1000",
            // Entering styles
            "data-[enter]:duration-1000 data-[enter]:data-[closed]:translate-x-full",
            // Leaving styles
            "data-[leave]:duration-1200 data-[leave]:data-[closed]:translate-x-full",
          ])}
        >
          <Experience />
        </div>
      </Transition>
      <Transition show={open} appear={true}>
        <div
          className={clsx([
            // Base styles
            "absolute transition ease-in-out justify-center",
            // Shared closed styles
            "data-[closed]:opacity-1000",
            // Entering styles
            "data-[enter]:duration-1000 data-[enter]:data-[closed]:-translate-x-full",
            // Leaving styles
            "data-[leave]:duration-1200 data-[leave]:data-[closed]:-translate-x-full",
          ])}
        >
          <Experience />
        </div>
      </Transition>
    </div>
  );
}
