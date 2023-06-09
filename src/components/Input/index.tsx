import classNames from "classnames";
import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { placeHolder?: string };

export function Input({
  className,
  placeHolder,
  type = "text",
  name,
  ...props
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      {...props}
      className={classNames(
        "no-underline outline-none no border-2 border-[#EAEAEA] rounded-md py-2 px-4 w-full h-[42px]",
        className
      )}
    />
  );
}
