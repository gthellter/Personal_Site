"use client";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MessageMeForm from "./message-me-form";

export default function MessageMe() {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="flex gap-5 self-start rounded-lg  px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black md:text-base"
      >
        <span>Message Me</span> <ArrowRightIcon className="w-5 md:w-6" />
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none w-screen"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md transition ease-in-out bg-gray-50 rounded-lg text-black self-center hover:bg-LightBackgroundBlue hover:opacity-95 hover:text-black-500 hover:scale-110 bg-opacity-95 mb-5 p-8"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium">
                Send Me a Message
              </DialogTitle>
              <p className="mt-2 text-sm/6">
                Use this form to send me any questions, comments or suggestions,
              </p>
              <MessageMeForm close={close} />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
