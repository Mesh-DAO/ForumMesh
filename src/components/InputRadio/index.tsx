import React, { useState } from "react";
import { Input } from "../Input";
import classNames from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export function InputRadio({ children, className }: Props) {
  return (
    <label className="relative">
      <input type="radio" name="tag" className="z-[-1] absolute peer" ></input>
      <div
        className={classNames(
          "flex font-Roboto text-sm font-normal gap-2 h-7 px-3 items-center rounded-2xl bg-[#EAEAEA] text-[#808080] cursor-pointer peer-checked:bg-brand-blue peer-checked:text-white transition duration-[400ms]",
          className
        )}
      >
        {children}
      </div>
    </label>
  )
}