import React from "react";
import classNames from "classnames";
import { MouseEventHandler } from "react";
import { Title } from "../Title";

type Props = {
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  color?: "orange" | "white";
  width?: string;
  disable?: boolean;
};

export function Button({
  type = "button",
  className,
  children,
  onClick,
  color,
  width = "w-[113px]",
  disable,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disable}
      className={classNames(
        `rounded-md transition-all ease-in-out duration-300 no-underline ${width} h-[38px] `,
        {
          "bg-[#F48023] hover:ring-1 hover:ring-[#b67643] text-white":
            color === "orange",
        },
        {
          "bg-[#EAEAEA] hover:ring-1 hover:ring-[#474747]":
            color === "white",
        },
        className
      )}
    >
      
      <Title>{children}</Title>
    </button>
  );
}