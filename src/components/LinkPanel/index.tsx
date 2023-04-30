import { Title } from "../Title"

type Props = {
    children: React.ReactNode
}

export function LinkPanel({
    children,
}: Props){
    return(
            <Title className="hover:cursor-pointer" color="blue"><li className="list-disc text-[#516FD8] hover:text-[#FF4555]">{children}</li></Title>
        
    )  
}