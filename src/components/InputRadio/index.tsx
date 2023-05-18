import React, { useState } from "react";
import { Input } from "../Input";
import classNames from "classnames";
import { ArrowUpRight } from "@/components/Icons/ArrowUpRight";
import { CheckClose } from "@/components/Icons/CheckClose";
import { Clock } from "@/components/Icons/Clock";
import { Fire } from "@/components/Icons/Fire";

interface Props {
  children?: React.ReactNode;
  className?: string;
  SVG: 'clock' | 'arrowUpRight' | 'fire' | 'checkClose';
}

const img = {
  clock: <Clock />,
  arrowUpRight: <ArrowUpRight />,
  fire: <Fire />,
  checkClose: <CheckClose />
}

export function InputRadio({ children, className, SVG }: Props) {
  return (
    <label className="relative">
      <input type="radio" name="tag" className="z-[-1] absolute peer" ></input>
      <div
        className={classNames(
          "flex font-Roboto text-sm font-normal gap-2 h-7 px-3 items-center rounded-2xl bg-[#EAEAEA] text-[#808080] cursor-pointer peer-checked:bg-brand-blue peer-checked:text-white transition duration-[400ms] peer-checked:stroke-white stroke-[#808080]",
          className
        )}
      >
        {img[SVG]}
        {children}
      </div>
    </label>
  )
}