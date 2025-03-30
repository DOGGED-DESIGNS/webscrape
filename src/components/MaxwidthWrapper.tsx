import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function MaxwidthWrapper({
  newClass,
  children,
}: {
  newClass?: string;
  children: ReactNode;
}) {
  return (
    <>
      <div
        className={cn(" m-auto  max-w-screen-xl  px-5 flex flex-col", newClass)}
      >
        {children}
      </div>
    </>
  );
}
