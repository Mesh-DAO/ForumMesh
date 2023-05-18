import classNames from "classnames";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function InputDiv({ className,children }: Props) {
  return (
    <div
      className={classNames(
        "flex font-Roboto text-sm font-normal gap-2 h-7 px-3 items-center rounded-2xl bg-[#EAEAEA] text-[#808080] cursor-pointer peer-checked:bg-brand-blue peer-checked:text-white transition duration-[400ms]",
        className
      )}
    >
        {children}
    </div>
  )
}