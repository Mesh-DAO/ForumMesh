import classNames from "classnames";
import React from "react";

type Props = {
  className?: string;
  placeHolder: string;
};

export function Input({ className, placeHolder }: Props) {
  return (
    <input
      type="text"
      placeholder={placeHolder}
      className={classNames(
        "no-underline outline-none no border-2 border-[#EAEAEA] rounded-md py-2 px-4 w-full h-[42px]",
        className
      )}
    />
  );
}
