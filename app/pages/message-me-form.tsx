import {
  Button,
  Field,
  Input,
  Textarea,
  Label,
  Fieldset,
} from "@headlessui/react";
import { FormEvent } from "react";
import clsx from "clsx";

export default function MessageMeForm({ close }: { close: Function }) {
  async function actionFunction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const response = await fetch("/api/submit-message", {
      method: "POST",
      body: JSON.stringify({
        contactInfo: data.get("contactInfo"),
        message: data.get("message"),
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const isOK = (await response.json()) === "OK";
    close(isOK);
  }
  return (
    <div className="w-full max-w-md px-4">
      <form onSubmit={actionFunction}>
        <Fieldset>
          <Field>
            <Label
              refName="contactInfo"
              className="text-sm/6 font-medium text-black"
            >
              Email/Contact Info
            </Label>
            <Input
              name="contactInfo"
              type="text"
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
            />
          </Field>
          <Field refName="message">
            <Label
              refName="message"
              className="text-sm/6 font-medium text-black"
            >
              Message
            </Label>
            <Textarea
              name="message"
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
            />
          </Field>
          <Button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
          >
            Send
          </Button>
        </Fieldset>
      </form>
    </div>
  );
}
