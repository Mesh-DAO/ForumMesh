import React from "react";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
  defaultChecked?: boolean;
  onChange: () => void;
}

export function InputRadio({
  children,
  className,
  defaultChecked,
  onChange,
}: Props) {
  return (
    <label className="relative">
      <input
        onChange={onChange}
        type="radio"
        name="tag"
        defaultChecked={defaultChecked}
        className="z-[-1] absolute peer"
      />
      <div
        className={classNames(
          "flex font-Roboto text-sm font-normal gap-2 h-7 px-3 items-center rounded-2xl bg-[#EAEAEA] text-[#808080] cursor-pointer peer-checked:bg-brand-blue peer-checked:text-white transition duration-[400ms]",
          className
        )}
      >
        {children}
      </div>
    </label>
  );
}
