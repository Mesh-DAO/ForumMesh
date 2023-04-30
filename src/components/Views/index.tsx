import { Eye } from "../Icons/Eye";
type Props = {
    views?: string
}

export function Views({
    views = "125"
}:Props){
    return(
        <span className="flex flex-row items-center gap-1"><Eye/>{views}</span>
    )
}