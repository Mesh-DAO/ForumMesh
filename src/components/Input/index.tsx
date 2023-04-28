import classNames from "classnames";
import React, { useState } from "react";

type Props = {
    className?: string
    placeHolder?: string
    borderColor?: string
}

export function Input({
    className,
    placeHolder,
    borderColor = "lightGray",
}: Props){  
    return(
        <input type="text" placeholder={placeHolder} className={classNames(
            `placeholder-[#808080] border-2  rounded-md py-2 px-4 w-full h-[42px]`,
            {
                "border-[#EAEAEA]": borderColor === "lightGray"
            },
            {
                "border-[#FFFFFF]": borderColor === "transparent"
            },
            
            className
        )}/>
    )
}