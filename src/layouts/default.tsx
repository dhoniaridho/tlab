import { PropsWithChildren } from "react";
import { UiNavbar } from "../components/ui/navbar";

type Props = {
  title?: string;
};

type DefaultLayoutPropsType = PropsWithChildren & Props;

export function DefaultLayout({ children }: DefaultLayoutPropsType) {
  return (
    <>
      <UiNavbar />
      {children}
    </>
  );
}
