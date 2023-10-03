import { PropsWithChildren } from "react";
import { cva } from "class-variance-authority";

type ButtonProps = {
  intent: "primary";
} & PropsWithChildren;

export function UiButton(props: ButtonProps) {
  const button = cva("p-2 rounded", {
    variants: {
      intent: { primary: "bg-[#0884F5] text-white" },
    },
  });

  return <button className={button(props)}>{props.children}</button>;
}
