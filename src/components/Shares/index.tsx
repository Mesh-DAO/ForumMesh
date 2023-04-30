import { ArrowUp } from "../Icons/ArrowUp";

type Props = {
    shares?: string
}

export function Shares({
    shares = "155"
}: Props){
    return(
        <span className="flex flex-row items-center gap-1"><ArrowUp/>{shares}</span>
    )
}