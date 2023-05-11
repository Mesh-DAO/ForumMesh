'use client'
import classNames from "classnames";
import React, { ChangeEvent } from "react";

type Props = {
  className?: string;
  placeHolder?: string;
  options: Array<string>;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({ options, className, onChange } : Props) {
  return (
    <select
      onChange={onChange}
      className={classNames(
         "form-select no-underline outline-none bg-white border-2 border-[#EAEAEA] rounded-md py-2 px-4 w-full h-[42px]",
        className
      )}
      defaultValue={options[0]}
    >
      {options.map(opt => (
        <option className="" value={opt} key={opt}>{opt}</option>
      ))}
    </select>
  )
}
