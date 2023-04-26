import classNames from "classnames";
import React, { useState } from "react";

type Props = {
    className?: string
    placeHolder?: string

}

export function Input({
    className,
    placeHolder
}: Props){  
    return(
        <input type="text" placeholder={placeHolder} className={classNames(
            `placeholder-[#808080] border-2 border-[#EAEAEA] rounded-md py-2 px-4 w-full h-[42px]`,
            className
        )}/>
    )
}