'use client'
import React, { ChangeEvent } from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  placeHolder?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export function TextArea({ className, placeHolder = '', onChange }: Props) {
  return (
    <textarea
			cols={30}
			rows={10}
      onChange={ onChange }
			placeholder={placeHolder}
			className={classNames(
        "no-underline outline-none no border-2 border-[#EAEAEA] rounded-md py-2 px-4 w-full flex-1 resize-none",
        className
      )}
		/>
  )
}