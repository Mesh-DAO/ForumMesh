import { Title } from "../Title"

type Props = {
    children: React.ReactNode
}

export function LinkPanel({
    children,
}: Props){
    return(
            <Title className="hover:cursor-pointer" color="blue"><li className="list-disc text-blue-600">{children}</li></Title>
        
    )  
}