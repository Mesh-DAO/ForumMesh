"use client";
import React, { ChangeEvent } from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  placeHolder?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  cols?: number;
  rows?: number;
  defaultValue?: string;
};

export function TextArea({
  className,
  defaultValue,
  placeHolder,
  onChange,
  cols,
  rows,
  ...props
}: Props) {
  return (
    <textarea
      {...props}
      defaultValue={defaultValue}
      cols={cols}
      rows={rows}
      onChange={onChange}
      placeholder={placeHolder}
      className={classNames(
        "no-underline outline-none no border-2 border-[#EAEAEA] rounded-md py-2 px-4 w-full flex-1 resize-none",
        className
      )}
    />
  );
}
