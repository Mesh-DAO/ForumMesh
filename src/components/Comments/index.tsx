import { MessageSquare } from "../Icons/MessageSquare";
type Props = {
    comments?: string
}

export function Comments({
    comments = "15"
}: Props){
    return(
        <span className="flex flex-row items-center gap-1"><MessageSquare/>{comments}</span>
    )
}